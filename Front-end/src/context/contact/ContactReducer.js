const ContactReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_ALL_CONTACTS':
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }
        case 'ADD_CONTACT':
            return{
                ...state,
                loading:false
            }
        case 'DELETE_CONTACT':
            return{
                ...state,
                loading:false
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                errors:action.payload,
                loading:false
            }
        default:
            return state
    }

}
export default ContactReducer