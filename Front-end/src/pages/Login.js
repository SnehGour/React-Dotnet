import React, { useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userAuth/UserContext'

const Login = () => {

  const {authenticate} =  useContext(UserContext)
  const initialValues = {
    name:'',
    password:''
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

  const onSubmit = values => {authenticate(values) }
  

  return (
    <div className='container edit-card'>
      <div className="card">
        <div className="card-header fs-1">
          Login
        </div>
        <Formik
          initialValues={initialValues}
          validate ={validationSchema}
          onSubmit={onSubmit}
          className="card-body">
          <Form >
            
              <h5 className="card-title">Username</h5>
              <Field className='form-control' name='username' />
              <ErrorMessage name='username' >
                {
                  (errorMsg) => <div className='errors'>{errorMsg}</div>
                }
              </ErrorMessage>

              <h5 className="card-title">Password</h5>
              <Field className='form-control' name='password' />
              <ErrorMessage name='password' >
                {
                  (errorMsg) => <div className='errors'>{errorMsg}</div>
                }
              </ErrorMessage>

              <button type='submit' className='btn btn-success w-100 mt-3'>Login</button>
              <div className='mt-3 md-3'>
                <span className='m-4'>Don't have account</span> <Link to="/register" className='m-4'>Register here</Link>
              </div>
          </Form>
        </Formik>
      </div></div>
  )
}

export default Login