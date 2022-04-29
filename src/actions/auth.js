import * as api from "../api"

export const signIn = (formData)=> async (dispatch) =>{
    try {
        const {data} = await api.SignIn(formData)
        dispatch({type : "LOGIN", payload: data})
    } catch (error) {
        
    }
}

export const SignUp = (formData) => async (dispatch) =>{
    try {
        const { data } = await api.SignUp(formData)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}