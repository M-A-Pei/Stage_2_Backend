import express from "express"
import dotenv from "dotenv"
import route from "./src/routes"
import db from "./src/libs/db"
import path from "path"

const app = express()
dotenv.config()
app.use(express.urlencoded({extended : true}))

app.use(route)

const port = process.env.PORT || 3000
app.listen(port, async ()=>{
    try{
        await db.$connect()
        console.log(`server is running at http://localhost:${port}`)
    }catch{
         await db.$disconnect()
    }
})
