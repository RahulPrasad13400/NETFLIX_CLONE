import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVars.js"
import { User } from "../models/user.modal.js"

export const protectRoute = async (req, res, next) =>{
    try{
        const token = req.cookies["jwt-netflix"]
        if(!token){
            return res.status(401).json({
                success : false,
                message : "Unauthorized - No token provided"
            })
        }
        next()
    }catch(error){

    }
}