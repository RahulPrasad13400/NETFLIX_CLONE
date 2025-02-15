import express from "express"
import authRoutes from "./routes/auth.route.js"
import { ENV_VARS } from "./config/envVars.js"
import { connectDB } from "./db/connectMongoDb.js"

const app = express()
const PORT = ENV_VARS.PORT || 5000
app.use(express.json()) // this is the fn that allow us to use req.body 

app.use('/api/v1/auth', authRoutes)

app.listen(PORT,()=>{
    console.log("server running..")
    connectDB()
})




