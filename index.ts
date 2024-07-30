import express from "express"
import dotenv from "dotenv"
import postRoutes from "./src/routes/postRoutes"

const app = express()
dotenv.config()

//post routes
const post = new postRoutes()
app.use(post.router)

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})
