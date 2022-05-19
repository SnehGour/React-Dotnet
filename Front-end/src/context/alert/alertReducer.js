const AlertReducer = (state,action) =>{
    switch(action.type){
        case 'SET_ALERT':
            console.log(action.payload,"From reducer")
            return {
                ...state,
                alert:action.payload
            }
        case 'REMOVE_ALERT':
            return {
                ...state,
                alert:null
            }
        default:
            return state;
    }
}

export default AlertReducer