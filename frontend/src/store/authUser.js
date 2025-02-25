import axios from "axios"
import {create} from "zustand"
import toast from "react-hot-toast"
// for the toast to work you have to put <Toaster /> 
// on the App.js file outside the Routes ( <Routes> </ Routes>)

export const useAuthStore = create((set)=>({
    user : null,
    isSigningUp : false,
    isCheckingAuth : true,
    isLoggingOut : false,
    signup : async (credentials) =>{
        set({isSigningUp : true})
        try{        
            const response = await axios.post(`/api/v1/auth/signup`, credentials)
            set({user : response.data.user, isSigningUp : false})
            toast.success("Account created Successfully!")
        }catch(error){
            toast.error(error.response.data.message || "An error occured in the signUp")
            set({isSigningUp : false, user : null})
        }           
    },
    login : async () =>{
        try{

        }catch(error){

        }
    },
    logout : async () =>{
        set({isLoggingOut : true})
        try{
            await axios.post('/api/v1/auth//logout')
            set({user : null, isLoggingOut : false})
            toast.success("Logged off, you're good to go!")
        }catch(error){
            toast.error("Sign out? Nope, not today")
        }
    },
    authCheck : async () =>{
        set({isCheckingAuth : true})
        try{
            const response = await axios.get('/api/v1/auth/authCheck');
            set({user : response.data.user, isCheckingAuth : false})
        }catch(error){
            set({isCheckingAuth : false, user : null})
            toast.error(error.response.data.message || "An error occured in the AuthCheck")
        }
    }

}))