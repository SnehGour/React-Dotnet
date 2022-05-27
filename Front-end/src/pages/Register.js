import { ErrorMessage, Field, Form, Formik } from 'formik'
import {Link, useNavigate} from 'react-router-dom'
import React, { useContext } from 'react'
import { UserContext } from '../context/userAuth/UserContext'


const Register = () => {
   
    const {register} = useContext(UserContext)
    const navigate = useNavigate()
    const initialValues = {
        username: '',
        password: ''
    }
    const validationSchema = values => {
        const errors = {}
        if (!values.username) {
            errors.username = "Username is required !!"
        }
        if (!values.password) {
            errors.password = "Password is required !!"
        }
        return errors
    }

    const onSubmit = (values) => {
        console.log("button click");
        register(values).then(()=>{
            navigate("/login")
        })
    }

    return (
        <div className='container edit-card'>
            <div className="card">
                <div className="card-header fs-1">
                    Register
                </div>
                <Formik
                    initialValues={initialValues}
                    validate={validationSchema}
                    onSubmit={onSubmit}

                    className="card-body">
                    {({ isSubmmiting }) => (
                        <Form>
                            <h5 className="card-title">Username</h5>
                            <Field className='form-control' name='username' />
                            <ErrorMessage name='username' >
                                {
                                    (errorMsg) => <div className='errors'>{errorMsg}</div>
                                }
                            </ErrorMessage>

                            <h5 className="card-title">Password</h5>
                            <Field className='form-control' name='password' type="password" />
                            <ErrorMessage name='password' >
                                {
                                    (errorMsg) => <div className='errors'>{errorMsg}</div>
                                }
                            </ErrorMessage>

                            <button type='submit' className='btn btn-success w-100 mt-3' disabled={isSubmmiting}>Register</button>
                            <div className='mt-3 md-3'>
                                <span className='m-4'>Already have account</span> <Link to="/login" className='m-4'>Login</Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Register