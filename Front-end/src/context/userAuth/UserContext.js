//2

import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../alert/AlertState";
import { UserReducer } from '../userAuth/UserReducer'
// initialState

const initialState = {
    userInfo: {
        username: null,
        password: null,
        token:null
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
        try {
            const header = {
                'Content-Type': 'application/json'
            }
            const { data } = await axios.post('https://localhost:7010/api/User/Authenticate', userInfo, header)
            localStorage.setItem('token',data.token)
            
            const userData ={
                username:userInfo.username,
                password:userInfo.password,
                token:data.token
            }

            dispatch({
                type:'USER_AUTHENTICATE',
                payload:userData
            })
            
        } catch (error) {
                dispatch({
                    type:'FETCH_ERROR',
                    payload:error.message.response
                })
        }
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