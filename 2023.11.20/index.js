const express = require("express");
//const url = require("url")
//const fs = require("fs")
//const stream = require("stream")
//const mongodb = require("mongodb")
//const mgUri = "mongodb+srv://jakubdrzymala:GVXSuTa36jPPslfy@cluster0.ie8yasy.mongodb.net/?retryWrites=true&w=majority"
//const apiRouter = require("./routers/apiRouter")
const mysql_router = require("./routers/mysql_router")

//for importing files
const path = require("path")

app = express()
const port = 3300

//app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
//app.use("/api", apiRouter)
app.use("/", mysql_router)
/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
})
*/




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})