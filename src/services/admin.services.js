import { axiosInstance } from "./auth.services";

const BASE_URL = "http://localhost:3000";

export function getUsers(){
    return axiosInstance.get(`${BASE_URL}/admin/getUsers`)
        .then(response => response.data)
        .catch(error => alert(error));
}

