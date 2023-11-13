const express = require("express");
const url = require("url")
const fs = require("fs")
const stream = require("stream")
const mysql = require("mysql")
const prismaClient = require("@prisma/client")
const apiRouter = require("./routers/apiRouter")

//for importing files
const path = require("path")

app = express()
prisma = new prismaClient.PrismaClient();
const port = 3300

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter)

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsdb'
})


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
})
app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/kontakt.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'kontakt.html'))
})
app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, 'kontakt.html'))
})
app.post('/kontakt', (req, res) => {
    let reqData = req.body
    dbConnection.connect((err)=>{
        if(err) throw err
        console.log("Connected to database from index.js")
    })
    dbConnection.query(`INSERT INTO contact(name, email, selection, content) VALUES ("${reqData.name}", "${reqData.email}", "${reqData.selection}", "${reqData.content}")`, (err, result)=>{
        if(err) throw err
        console.log("Success - INSERT contact")
    })
    console.log(reqData)
    
    dbConnection.end((err)=>{
        if(err) throw err
        console.log("Disconnected from database at index.js")
    })
    res.redirect("/")
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})