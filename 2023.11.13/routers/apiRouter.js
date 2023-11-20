const express = require("express")
const mongodb = require("mongodb")
const mgUri = "mongodb+srv://jakubdrzymala:GVXSuTa36jPPslfy@cluster0.ie8yasy.mongodb.net/?retryWrites=true&w=majority"
const router = express.Router()

const NOT_FOUND = {
    code: 404,
    description: "Page Not Found",
}


let apiStudents = new Array();
let apiSubjects = new Array()
async function FetchData(){
    try {
        const db = await mongodb.MongoClient.connect(mgUri) //laczenie z serwerem
        const dbo = await db.db("nodejsdb") //laczenie z baza
        try {
            apiStudents = await dbo.collection("nodejsdb").find({surname: {$gt: ""}}).toArray() //find students
            console.log(`fetched ${apiStudents.toString()}`)
        } catch (e) {
            throw e
        }
        try {
            apiSubjects = await dbo.collection("nodejsdb").find({hours_a_week: {$gt: 0}}).toArray() //find students
            console.log(`fetched ${apiSubjects.toString()}`)
        } catch (e) {
            throw e
        }
        /*
        for(let i = 1; i < 11; i++){ //adding records
            const newRow = { id: i, name: `przedmiot_nr${i}`, hours_a_week: i + 1} //new row
            try {
                await dbo.collection("nodejsdb").insertOne(newRow) //insert
                console.log(`Added`)
            } catch (e) {
                throw e
            }
        }*/


        await db.close()
    } catch (e) {
        throw e
    }
}


const apiLinks = {}
apiLinks[0] = {
    url: "/api/students",
    description: "list of all students",
}

apiLinks[1] = {
    url: "/api/subjects",
    description: "list of all subjects",
}

FetchData().then()
router.get("/", (req, res)=>{
    res.send(apiLinks)
})
router.get("/students", (req, res)=>{
    res.json(apiStudents)
})
router.get("/subjects", (req, res)=>{
    res.json(apiSubjects)
})
router.get("/students/:studentId", (req, res)=>{
    const x = apiStudents.filter((s)=> {
        let reqId = req.params.studentId;
        if(reqId.charAt(0) == ':'){
            //console.log((reqId.charAt(0)) + " " + (reqId.charAt(0) == ':' )+ " " +( reqId.charAt(0) == ":"))
            reqId = reqId.substring(1, reqId.length)
        }
        //console.log(s.id + " " + req.params.studentId)
        //console.log(reqId)
        return s.id == reqId
    })
    console.log(x)
    res.json(x.length != 1? NOT_FOUND : x)
})
router.get("/subjects/:subjectId", (req, res)=>{
    const x = apiSubjects.filter((s)=> {
        let reqId = req.params.subjectId;
        if(reqId.charAt(0) == ':'){
            reqId = reqId.substring(1, reqId.length)
        }
        return s.id == reqId
    })
    console.log(x)
    res.json(x.length != 1? NOT_FOUND : x)
})


module.exports = router