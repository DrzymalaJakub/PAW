const express = require("express")
const mysql = require("mysql")
const mongodb = require("mongodb");
const path = require("path")

const docPath = "/html/mysql/"
const router = express.Router()
let dbConnection;


//Sending main form
router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, `${docPath}index.html`))
})

//Establishing Connection
router.post(`/connection`, (req, res)=>{
    const reqData = req.body
    console.log(`Given Credentials: ${JSON.stringify(reqData)}`)
    dbConnection = mysql.createConnection({
        host: reqData.host,
        user: reqData.user,
        password: reqData.password,
        database: reqData.database
    })
    res.redirect("/")
})
if(dbConnection){ //when filled
    router.post(`/select`, (req, res)=>{
        const reqData = req.body
        dbConnection.connect((err)=>{
            if(err) throw err
            console.log("Connected to database for SELECT")
        })
        dbConnection.query(`${reqData.query}`, (err, result)=>{
            if(err) throw err
            console.log(`Success - ${reqData.query}`)
        })
        console.log(reqData)

        dbConnection.end((err)=>{
            if(err) throw err
            console.log("Disconnected from database for SELECT")
        })
    })
}





module.exports = router