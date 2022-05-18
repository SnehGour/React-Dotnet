import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ContactContext } from '../context/contact/ContactContext'
import ContactCard from './ContactCard'
import Spinner from './Spinner'

const ContactList = () => {
    const { getAllContacts, contacts ,loading} = useContext(ContactContext)
    useEffect(() => {
        console.log("1")
        getAllContacts()
    }, [])

    const contactList = contacts.map(user => (
        <ContactCard key={user.id} user={user} />
    ))
    
        if (loading ) {
            return <Spinner />
        } 
        
    return (
        <>
            {contacts.length > 0 ? contactList : (
                <div className='container text-center d-block mt-5'>
                    <h1 className='fs-1 '>No Contact Found!!!!!</h1>
                </div>
            )}
        </>
    )

}

export default ContactList