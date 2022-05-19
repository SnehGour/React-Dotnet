import { useReducer, createContext } from "react"
import AlertReducer from "./alertReducer"

const initialState = {
    alert: {
        msg:null,
        type:null
    }
}
const AlertContext = createContext(initialState)

const AlertState = ({ children }) => {
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // SET Alert

    
    const setAlert = (alert) => {
        console.log("2 =>=>=>=> Inside Action")
        dispatch({
            type: 'SET_ALERT',
            payload: alert
        })

        setTimeout(() => dispatch({type:'REMOVE_ALERT'}), 5000)
    }
    return (
        <AlertContext.Provider value={{
            alert:state.alert,
            setAlert
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export { AlertContext, AlertState }