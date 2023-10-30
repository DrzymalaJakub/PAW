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

const apiSubjects = {}
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
        s.id === req.studentId
    })
    res.json(NOT_FOUND)
})


module.exports = router