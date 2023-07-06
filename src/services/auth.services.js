import axios from "axios";
import { getToken, setToken } from "./helpers";

const BASE_URL = "http://localhost:3000";
const axiosInstance = axios.create({baseURL: BASE_URL});

const token = getToken();

if(token){
  setToken(token);
}

export function login({email,password}) {
      
    return axiosInstance.post(`${BASE_URL}/auth/login`,{email, password})
      .then(response => response.data
      )
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
    });
}

export function getUser(){
  return axiosInstance.get(`${BASE_URL}/user/getUser`)
    .then(response => response.data)
    .catch(error=> console.error(error))
}

export {axiosInstance};