import { User } from "../models/user.modal.js";
import bcryptjs from "bcryptjs"
import { generateTokeAndSetCookie } from "../utils/generateToken.js";

export async function signup(req, res){
    try{
        const {username, email, password} = req.body
        if(!email || !username || !password){
            return res.status(400).json({
                success : false,
                message : "fill all the fields!"
            })
        }
        // checking whether the email is valid or not 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({
                success : false,
                message : "enter a valid email!"
            })
        }
        // checking the strength of password 
        if(password.length<4){
            return res.status(400).json({
                success : false,
                message : "password must be atleast 4 characters!"
            })
        }
        // checking whether the email already exist 
        const existingUserByEmail = await User.findOne({email : email})
        if(existingUserByEmail){
            return res.status(400).json({
                success : false,
                message : "user with this email is already present!"
            })
        }
        // checking whether the username already present 
        const existingUsername = await User.findOne({username})
        if(existingUsername){
            return res.status(400).json({
                success : false,
                message : "username already exist!"
            })
        }
        // password encryption 
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        
        const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

        const newUser = new User({
            email,
            username,
            image,
            password : hashedPassword
        })

    
        generateTokeAndSetCookie(newUser._id, res)
        await newUser.save()
        res.status(201).json({
            success : true,
            user : {
                ...newUser._doc,
                password : ""
            }
        }) 

        
    }catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

export async function login(req, res){
    try{
        const {password, email} = req.body
        if(!password || !email){
            return res.status(400).json({
                success : false,
                message : "please enter email and password"
            })
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({
                success : false,
                message : "invalid credentials"
            })
        }
        // checking whether the enterd password is correct or not 
        const isPasswordCorrect = await bcryptjs.compare(password, user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({
                success : false,
                message : "please enter correct password"
            })
        }
        
        generateTokeAndSetCookie(user._id, res)
            res.status(200).json({
            success: true,
			user: {
				...user._doc,
				password: "",
			},
        })

    }catch(error){
        res.status(500).json({
            success : false,    
            message : "internal server error!"
        }) 
    }
}

export async function logout(req, res){
    try{
        res.clearCookie("jwt-netflix")
        res.status(200).json({
            success: true, 
            message: "Logged out successfully" 
        })
    }catch(error){
        res.status(500).json({
            success : false,    
            message : "internal server error!"
        })
    }
}