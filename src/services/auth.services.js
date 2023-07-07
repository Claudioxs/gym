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

export function saveRoutine({routineName, userId}){
  return axiosInstance.post(`${BASE_URL}/user/rutinas/crear_rutina`,{routineName, userId})
    .then(response => response.data)
    .catch(error=> console.error(error))
}

export function getRoutines({userId}){
  return axiosInstance.get(`${BASE_URL}/user/rutinas`,{userId})
    .then(response => response.data)
    .catch(error=> console.error(error))
}

export {axiosInstance};