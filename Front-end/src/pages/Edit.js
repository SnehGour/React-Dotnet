import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
const Edit = () => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [town, setTown] = useState('')
    const [pincode, setPincode] = useState('')
    const [realtion,setRelations] = useState('')

    const { id } = useParams();

    useEffect(() => {
        const fetchContactById = async (id) => {
            const { data } = await axios.get(`https://localhost:7010/api/Contact/${id}`)
            console.log(data)
            setName(data.name)
            setPhoneNumber(data.phoneNumber)
            setEmail(data.email)
            setRelations(data.contactType)
            setCountry(data.address.country)
            setState(data.address.state)
            setTown(data.address.town)
            setPincode(data.address.pincode)
        }
        fetchContactById(id)
    }, [])
    return (
        <>
            <div className='container edit-card'>
                <div className="card">
                    <div className="card-header fs-1">
                        Edit Contact
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <input className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                        <h5 className="card-title">Phone Number</h5>
                        <input className='form-control' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <h5 className="card-title">Email</h5>
                        <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <h5 className="card-title">Country</h5>
                        <input className='form-control' value={country} onChange={(e) => setCountry(e.target.value)} />
                        <h5 className="card-title">State</h5>
                        <input className='form-control' value={state} onChange={(e) => setState(e.target.value)} />
                        <h5 className="card-title">Town</h5>
                        <input className='form-control' value={town} onChange={(e) => setTown(e.target.value)} />
                        <h5 className="card-title">Pincode</h5>
                        <input className='form-control' value={pincode} onChange={(e) => setPincode(e.target.value)} />


                        <select value={realtion} onChange={(e)=>setRelations(e.target.value)} class="form-select mt-3" id="exampleSelect1">
                            <option value='0'>Work</option>
                            <option value='1'>Friends</option>
                            <option value='2'>Family & Relation</option>
                            <option value='3'>Othes</option>
                        </select>
                        <a href="#" className="btn btn-info w-100 mt-2">Update</a>
                        <Link to="/" className="btn btn-primary w-100 mt-2">Back</Link>
                    </div>
                </div></div>
        </>
    )
}

export default Edit