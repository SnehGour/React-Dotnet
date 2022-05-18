//2

import axios from "axios";
import { createContext, useReducer } from "react";
import { UserReducer } from '../userAuth/UserReducer'
// initialState

const initialState = {
    userInfo: {
        username: null,
        password: null
    },
    loading: false
}

// creating context
const UserContext = createContext(initialState)

const UsersProvider = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, initialState)

    // Actions
    const authenticate = async (userInfo) => {
        setLoading()
        const header = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.post('https://localhost:7010/api/User/Authenticate', userInfo, header)
        console.log(data.token)
        localStorage.setItem('token',data.token)
    }

    const setLoading = () => {
        dispatch({ type: 'SET_LOADING' })
    }
    return (
        <UserContext.Provider value={{
            userInfo: state.userInfo,
            loading: state.loading,
            authenticate
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UsersProvider}