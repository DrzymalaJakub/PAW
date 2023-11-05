const express = require("express")
const router = express.Router()

const NOT_FOUND = {
    code: 404,
    description: "Page Not Found",
}

const apiStudents = new Array()
for(let i = 0; i < 10; i++){
    const _apiStudent = {
        id: i,
        name: `imie_nr${i}`,
        surname: `nazwisko_nr${i}`,
        email: `student_nr${i}@gmail.net`,
    }
    apiStudents[i] = _apiStudent
}
const apiLinks = {}
apiLinks[0] = {
    url: "/api/students",
    description: "list of all students",
}

const apiSubjects = new Array()
for(let i = 0; i < 10; i++){
    const _apiSubject = {
        id: i,
        name: `przedmiot_nr${i}`,
        hoursAWeek: 1+i,
    }
    apiSubjects[i] = _apiSubject
}
apiLinks[1] = {
    url: "/api/subjects",
    description: "list of all subjects",
}


router.get("/", (req, res)=>{
    res.send(apiLinks)
})
router.get("/students", (req, res)=>{
    res.send(apiStudents)
})
router.get("/subjects", (req, res)=>{
    res.send(apiSubjects)
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