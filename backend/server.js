import express from "express"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js"
import movieRoutes from "./routes/movie.route.js"
import tvRoutes from "./routes/tv.route.js"

import { ENV_VARS } from "./config/envVars.js"
import { connectDB } from "./db/connectMongoDb.js"

const app = express()
const PORT = ENV_VARS.PORT || 5000
app.use(express.json()) // this is the fn that allow us to use req.body 
app.use(cookieParser()) // this allow to access the cookies 

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/movie', protectRoute, movieRoutes)
app.use('/api/v1/tv', protectRoute, tvRoutes)

app.listen(PORT,()=>{
    console.log("server running..")
    connectDB()
})




