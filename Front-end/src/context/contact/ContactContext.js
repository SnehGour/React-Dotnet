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

    // Get all contacts => Home page
    const getAllContacts = async () => {
        setLoading()

        try {
            var token = localStorage.getItem('token')
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
            const { data } = await axios.get("https://localhost:7010/api/Contact/getAllContact", config)

            dispatch({
                type: 'GET_ALL_CONTACTS',
                payload: data,
            })
        } catch (err) {

            dispatch({
                type: 'FETCH_ERROR',
                payload: err.message.response
            })
        }
    }

    // Add contact => create page
    const addContact = async (contactInfo) => {
        setLoading()

        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }

            const res = await axios.post('https://localhost:7010/api/Contact/addContact', contactInfo, config)
            dispatch({
                type:'ADD_CONTACT'
            })
        } catch (err) {

        }
    }

    // Delete Contact => ContactCard

    const deletContact = async (id) => {
        setLoading()
        try {
            const config = {
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
            const data = await axios.delete(`https://localhost:7010/api/Contact/${id}`,config)
            dispatch({
                type:'DELETE_CONTACT'
            })
        } catch (err) {
            
        }
    }
    const setLoading = () => {
        dispatch({ type: 'SET_LOADING' })
    }
    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            loading: state.loading,
            getAllContacts,
            setLoading,
            addContact,
            deletContact
        }}>
            {children}
        </ContactContext.Provider>
    )
}