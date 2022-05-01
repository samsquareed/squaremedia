const postReducer = (state=[], action) => {
    switch(action.type){
        case 'FETCHTIMELINE' :
            return action.payload
        
        default :
            return state;
    }
}