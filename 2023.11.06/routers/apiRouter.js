const express = require("express")
const router = express.Router()
const prismaClient = require("@prisma/client")

const NOT_FOUND = {
    code: 404,
    description: "Page Not Found",
}
prisma = new prismaClient.PrismaClient();

const apiLinks = {}
apiLinks[0] = {
    url: "/api/students",
    description: "list of all students",
}

apiLinks[1] = {
    url: "/api/subjects",
    description: "list of all subjects",
}


router.get("/", (req, res)=>{
    res.send(apiLinks)
})
router.get("/students", async(req, res)=>{
    let apiStudents = await prisma.students.findMany();
    console.log(`Fetched ${apiStudents.length} students`)
    res.send(apiStudents)
})
router.get("/subjects", async (req, res)=>{
    let apiSubjects = await prisma.subjects.findMany();
    console.log(`Fetched ${apiSubjects.length} students`)
    res.send(apiSubjects)
})
router.get("/students/:studentId", async(req, res)=>{
    let apiStudents = await prisma.students.findMany();
    console.log(`Fetched ${apiStudents.length} students`)
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
router.get("/subjects/:subjectId", async(req, res)=>{
    let apiSubjects = await prisma.subjects.findMany();
    console.log(`Fetched ${apiSubjects.length} students`)
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