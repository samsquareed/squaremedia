import * as api from "../api"

export const signIn = (formData, nevigate)=> async (dispatch) =>{
    try {
        const {data} = await api.SignIn(formData)
        dispatch({type : "LOGIN", payload: data})
        nevigate("/")
    } catch (error) {
        
    }
}

export const SignUp = (formData, nevigate) => async (dispatch) =>{
    try {
        const { data } = await api.SignUp(formData)
        nevigate("/login")
    } catch (error) {
        console.log(error);
    }
}