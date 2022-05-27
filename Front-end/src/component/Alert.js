import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/AlertState'

const Alert = () => {
  const { alert } = useContext(AlertContext)
  console.log("Alert",alert)
    return (
      alert !== null && (<div className={`alert alert-${alert.type} mt-5`} role='alert' style={{ width: '32.5%', marginLeft: 'auto', marginRight: 'auto' }}>
        <i className="fa-solid fa-circle-exclamation">{alert.msg}</i>
      </div>
      ))
}

export default Alert