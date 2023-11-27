const express = require("express")
const mysql = require("mysql")
const path = require("path")

const docPath = "/html/mysql/"
const router = express.Router()

//Sending main form
router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, `${docPath}index.html`))
})

//Establishing Connection
router.post(`/connection`, (req, res)=>{
    const reqData = req.body
    console.log(`Given Credentials: ${JSON.stringify(reqData)}`)
    module.exports = { dbConnection } = mysql.createConnection({
        host: reqData.host,
        user: reqData.user,
        password: reqData.pass,
        database: reqData.database,
    })

    res.redirect("/")
})
    router.post(`/select`, (req, res)=>{
        const reqData = req.body
        const dbConnection = require(`./mysql_router`)
        let dbResult
        dbConnection.connect((err)=>{
            if(err) throw err
            console.log("Connected to database for SELECT")
            //console.log(dbConnection)
            dbConnection.query(`${reqData.query}`, (err, result)=>{
                if(err) throw err
                console.log(`Success - ${reqData.query}:\n${JSON.stringify(result)}`)
                dbResult = result
                dbConnection.end((err)=>{
                    if(err) throw err
                    console.log("Disconnected from database for SELECT")
                    res.json(dbResult)
                })
            })
        })
    })






module.exports = router