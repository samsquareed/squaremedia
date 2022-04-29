

export const signIn = (formData)=> async (dispatch) =>{
    try {
        dispatch({type : "LOGIN", payload: formData})
    } catch (error) {
        
    }
}