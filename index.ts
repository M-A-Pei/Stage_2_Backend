import express from "express"
import dotenv from "dotenv"
import route from "./src/routes"
import db from "./src/libs/db"
import cors from "cors"
import upload from "./src/middlewares/fileUpload"
import path from "path"

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/uploads", express.static(path.join(__dirname, "/src", "/uploads")))

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
