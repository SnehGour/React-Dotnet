import React from 'react'
import { Link } from 'react-router-dom'
import ContactList from '../component/ContactList'
import Header from '../component/Header'

const Home = () => {
    return (
        <>
            <Header />
            <Link to='/create' className='btn btn-success float-end m-2'><i className="fa-solid fa-circle-plus"></i> &nbsp;Add Contact</Link>
            <div className='container'>
                <ContactList />
            </div>
        </>
    )
}

export default Home