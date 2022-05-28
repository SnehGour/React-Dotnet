import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { ContactContext } from '../context/contact/ContactContext'

const Create = () => {
    
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.getItem('token') === null && navigate("/login") 
    },[])
    const {addContact} = useContext(ContactContext)

    const validationSchema = yup.object({
        name: yup.string().required('Name is required'),
        phoneNumber: yup.number('Phone Number must be a number').moreThan(999999999, 'Please enter all the number'),
        email: yup.string().email('Must be valid Email').required('Email is required'),
        country: yup.string().required('Required'),
        state: yup.string().required('Required'),
        town: yup.string().required('Required'),
        pincode: yup.string().required('Required')
    })

    const initialValues = {
        name: '',
        phoneNumber: '',
        email: '',
        country: '',
        state: '',
        town: '',
        pincode: '',
        realtion: 2
    }

    const onSubmit = async (values) => {
        const data = {
            name: values.name,
            email: values.email,
            phoneNumber: values.phoneNumber,
            address: {
                country: values.country,
                state: values.state,
                town: values.town,
                pincode: values.pincode
            },
            realtion: values.realtion
        }
        addContact(data).then(()=>{
            navigate(`/`);
        })
    }
    return (
        <>
            <div className='container edit-card'>
                <div className="card">
                    <div className="card-header fs-1">
                        Create Contact
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        className="card-body">
                        <Form >
                            <h5 className="card-title">Name</h5>
                            <Field className='form-control' name='name' />
                            <ErrorMessage name='name' >
                                {
                                    (errorMsg) => <div className='errors'>{errorMsg}</div>
                                }
                            </ErrorMessage>
                            <h5 className="card-title">Phone Number</h5>
                            <Field className='form-control' name='phoneNumber' />
                            <ErrorMessage name='phoneNumber'>
                                {
                                    (errorMsg) => <div className='errors'>{errorMsg}</div>
                                }
                            </ErrorMessage>
    
                            <h5 className="card-title">Email</h5>
                            <Field className='form-control' name='email' />
                            <ErrorMessage name='email'>
                                {
                                    (errorMsg) => <div className='errors'>{errorMsg}</div>
                                }
                            </ErrorMessage>
    
                            <h5 className="card-title">Country</h5>
                            <Field className='form-control' name='country' />
                            <ErrorMessage name='country'>
                                {
                                    (errorMsg) => <div className='errors'>{errorMsg}</div>
                                }
                            </ErrorMessage>
                            <h5 className="card-title">State</h5>
                            <Field className='form-control' name='state' />
                            <ErrorMessage name='state'>
                                {
                                    (errorMsg) => <div className='errors'>{errorMsg}</div>
                                }
                            </ErrorMessage>
    
                            <h5 className="card-title">Town</h5>
                            <Field className='form-control' name='town' />
                            <ErrorMessage name='town'>
                                {
                                    (errorMsg) => <div className='errors'>{errorMsg}</div>
                                }
                            </ErrorMessage>
                            <h5 className="card-title">Pincode</h5>
                            <Field className='form-control' name='pincode' />
                            <ErrorMessage name='pincode'>
                                {
                                    (errorMsg) => <div className='errors'>{errorMsg}</div>
                                }
                            </ErrorMessage>
    
                            <select name='realtion' className="form-select mt-3" id="exampleSelect1">
                                <option value='0'>Work</option>
                                <option value='1'>Friends</option>
                                <option value='2'>Family & Relation</option>
                                <option value='3'>Othes</option>
                            </select>
                            <button type='submit' className="btn btn-success w-100 mt-2">Add Contact</button>
                            <Link to='/' className="btn btn-primary w-100 mt-2">Back</Link>
                        </Form>
                    </Formik>
                </div></div>
        </>
    )
    
}




export default Create