import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const ContactCard = ({ user }) => {
    
    const navigate = useNavigate();
    const style = {
        width: '18rem',
        padding: '8px',
        margin: '8px'
    }

    function navigateHome(){
        navigate('/');
    }
    const  HandlDelete = async (id) =>{
        var ans = window.confirm('Are you sure you want to delete ?');
        if(ans)
        {
            const res= await axios.delete(`https://localhost:7010/api/Contact/${id}`)
            if(res!==null)
            {
                navigateHome();
            }
        }
    } 

    return (
        <div className="card" style={style}>
            <div className="card-body">
                <h5 className="card-title fs-1">{user.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><i className="fa-solid fa-phone"></i> {user.phoneNumber}</li>
                <li className="list-group-item"><i className="fa-solid fa-envelope"></i> {user.email}</li>
                <li className="list-group-item fw-bold " ><i className="fa-solid fa-location-dot"></i> Address</li>
                <li className="list-group-item fw-light text-center">{user.address.country} | {user.address.state} </li>
                <li className="list-group-item fw-light text-center">{user.address.town} | {user.address.pincode}</li>
            </ul>
            <div>
                <button type="button" className="btn btn-info btn-sm mt-2 " onClick={()=>navigate(`/edit/${user.id}`)}><i className="fa-solid fa-pencil"></i> &nbsp; Info</button>
                <button type="button" className="btn btn-danger btn-sm float-end mt-2" onClick={()=>{HandlDelete(user.id)}}><i className="fa-solid fa-trash "></i>&nbsp; Delete</button>
            </div>
        </div>
    )
}

export default ContactCard