export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'USER_AUTHENTICATE':
            return {
                ...state,
                userInfo: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                errors: action.payload,
                loading:false
            }
        default:
            return state
    }
}