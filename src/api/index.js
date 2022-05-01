import Axios from "axios"


const API = Axios.create({baseURL : "http://localhost:5000"}); 

export const SignIn = (formData) => API.post(`/api/auth/login`, formData)
export const SignUp = (formData) => API.post(`/api/auth/register`, formData)
export const fetchTimelinePosts = (id)=> API.get(`/api/posts/timeline/all/${id}`)