const ContactReducer = (state,action) =>{
    switch(action.type){
        case 'SET_LOADING':
            return{
                ...state,
                loading:true
            }
        case 'GET_ALL_CONTACTS':
            return{
                ...state,
                contacts:action.payload,
                loading:false
            }
        default:
            return state
    }

}
export default ContactReducer