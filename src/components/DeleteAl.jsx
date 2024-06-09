import React from 'react'
import NavAl from './NavAl'

const DeleteAl = () => {
  return (
    <div>
        <NavAl/>
         <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                <label htmlFor="" className="form-label">user id</label>
                <input type="text" className="form-control"/>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteAl