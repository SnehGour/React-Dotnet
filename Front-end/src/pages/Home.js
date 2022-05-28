import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContactList from '../component/ContactList'
import Header from '../component/Header'

const Home = () => {

    const navigate = useNavigate()
    useEffect(() => {
        localStorage.getItem('token') === null && navigate("/login")
    }, [])

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