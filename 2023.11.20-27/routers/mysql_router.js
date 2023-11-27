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

    router.post(`/insert`, (req, res)=>{
        function GetData(_reqData){ //making input usable
            console.log("Start of Spliting")
            class Parameters{
                constructor(name, nameArgs, query) {
                    this.name = name;
                    this.args = nameArgs;
                    this.params = query;
                }
            }
            console.log(_reqData)
            console.log(_reqData.nameArgs)
            const args = `${_reqData.nameArgs}`.split(`{${_reqData.breakWord}}`)
            const params = `${_reqData.rawQuery}`.split(`{${_reqData.breakWord}}`)
            console.log(params)
            return new Parameters(_reqData.name, args, params)
        }

        const dbConnection = require(`./mysql_router`)
        dbConnection.connect((err)=>{
            if(err) throw err
            console.log("Connected to database for INSERT")
            const reqData = GetData(req.body);
            //console.log(dbConnection)

            const _params = (p)=>{
                let _x = []
                for(let i = 0; i < p.length; i++){
                    if( p[i] === ""){
                        _x.push(`'${p[i]}'`)
                    }
                    else{
                        _x.push(p[i])
                    }
                }
                return _x
            }

            dbConnection.query(`INSERT INTO ${reqData.name}(${reqData.args.toString()}) VALUES(${_params(reqData.params)})`, (err, result)=>{
                if(err) throw err
                console.log(`Success - INSERT`)
                dbConnection.end((err)=>{
                    if(err) throw err
                    console.log("Disconnected from database for INSERT")
                    res.redirect("/")
                })
            })
        })
    })






module.exports = router