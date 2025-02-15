import express from "express"
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"

const app = express()
dotenv.config()

app.use('/api/v1/auth', authRoutes)

app.listen(5000,()=>{
    console.log("server running..")
})



