import express from "express"
import dotenv from "dotenv"
import { send } from "process"

const app = express()
dotenv.config()

app.get("/", (req, res) => {
    res.send("hiiii")
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})
