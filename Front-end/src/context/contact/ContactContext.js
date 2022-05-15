import axios from "axios";
import { createContext, useReducer } from "react";
import ContactReducer from '../contact/ContactReducer'
// initialState

const initialState = {
    contacts: [],
    loading: false
}

// creating context
export const ContactContext = createContext(initialState)

export const ContactProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ContactReducer, initialState)

    // Actions
    const  getAllContacts =  async () => {
        setLoading()

        const { data } = await axios.get("https://localhost:7010/api/Contact/getAllContact")
        
        dispatch({
            type: 'GET_ALL_CONTACTS',
            payload: data,
        })
    }


    const setLoading = () => {
        dispatch({ type: 'SET_LOADING' })
    }
    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            loading:state.loading,
            getAllContacts
        }}>
            {children}
        </ContactContext.Provider>
    )
}