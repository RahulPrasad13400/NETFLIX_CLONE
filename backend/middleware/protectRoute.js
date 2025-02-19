import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVars.js"
import { User } from "../models/user.modal.js"
import { Types } from 'mongoose';


export const protectRoute = async (req, res, next) =>{
    try{
        const token = req.cookies["jwt-netflix"]
        if(!token){
            return res.status(401).json({
                success : false,
                message : "Unauthorized - No token provided"
            })
        }
        
        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({
                success : false,
                message : "Unauthorized - Invalid token"
            })
        }

        const userId  = new Types.ObjectId(decoded.userId);
        // const user = await User.findById(decoded.UserId).select("-password")
        const user = await User.findById(userId).select("-password");

        console.log(user)

        if(!user){
            return res.status(404).json({
                success : false,
                message : "User not found!"
            })
        }

        req.user = user 
        next()
        
    }catch(error){
        console.log(error.message)
        res.status(500).json({
            success : false,
            message : "internal server error!"
        })
    }
}