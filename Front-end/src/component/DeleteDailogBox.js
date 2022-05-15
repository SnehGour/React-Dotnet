import React from 'react'

const DeleteDailogBox = ({ openModal }) => {

    if(!openModal) return null
    const styleModal = {

    }
    return (
        <div className='modal-overlay'>
            <div className="card" style={{ width: '40%', height: '20%' }}>
                <div className="card-body">
                    <h5 className="card-title">{`Are you sure you want to delete contact ?`}</h5>
                    <a href="#" className="btn btn-danger  m-2">Delete</a>
                    <a href="#" className="btn btn-primary  float-end m-2">Cancel</a>
                </div>
            </div>

        </div>
    )
}

export default DeleteDailogBox