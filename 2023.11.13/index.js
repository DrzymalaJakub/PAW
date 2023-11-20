const express = require("express");
const url = require("url")
const fs = require("fs")
const stream = require("stream")
const mongodb = require("mongodb")
const mgUri = "mongodb+srv://jakubdrzymala:GVXSuTa36jPPslfy@cluster0.ie8yasy.mongodb.net/?retryWrites=true&w=majority"
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
app.post('/kontakt', async(req, res) => {
    let reqData = req.body
    try {
        const db = await mongodb.MongoClient.connect(mgUri) //laczenie z serwerem
        const dbo = await db.db("nodejsdb") //laczenie z baza
        const newRow = { name: reqData.name, email: reqData.email, selection: reqData.selection, content: reqData.content} //new row
        try {
            await dbo.collection("nodejsdb").insertOne(newRow) //insert
            console.log(`Added ${reqData.name}`)
        } catch (e) {
            throw e
        }
        await db.close()
    } catch (e) {
        throw e
    }
    res.redirect("/")
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})