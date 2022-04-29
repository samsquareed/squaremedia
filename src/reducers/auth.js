
const authReducer =  (state= {authData : null}, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log("login called");
            localStorage.setItem("user", JSON.stringify(action.payload))
            return action.payload;
        case 'LOGOUT' :
            localStorage.clear();
            return { ...state, authData: null};
        default:
            return state;
    }
}
export default authReducer;