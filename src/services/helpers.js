import { axiosInstance } from "../services/auth.services";

export function setToken(token) {
	localStorage.setItem("token", token);
	axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export function removeToken() {
	localStorage.removeItem("token");
}

export function getToken() {
	return localStorage.getItem("token");
}

export function logout() {
	removeToken();
	localStorage.removeItem("verified");
}