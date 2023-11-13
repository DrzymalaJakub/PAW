const express = require("express");
const url = require("url")
const fs = require("fs")
const stream = require("stream")
const mongodb = require("mongodb")
const apiRouter = require("./routers/apiRouter")

//for importing files
const path = require("path")

app = express()
const port = 3300

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter)


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
    res.redirect("/")
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})