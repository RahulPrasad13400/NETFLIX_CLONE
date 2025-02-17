// it actually fetch polathe oru fn ane, syntax different ane 

import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";    

export const fetchFromTMBD = async (url) =>{

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ ENV_VARS.TMDB_API_KEY
    }
  };
  
  const res = await axios.get(url, options)

  if(res.status !== 200){
      throw new Error("failed to fetch data from TMDB")
  }

  return res.data
}