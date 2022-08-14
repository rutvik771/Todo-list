import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export const Register = () => {
  return (
<div className="container-fluid page-body-wrapper full-page-wrapper">
  <div className="row w-100 m-0">
    <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
      <div className="card col-lg-4 mx-auto">
        <div className="card-body px-5 py-5">
          <h3 className="card-title text-left mb-3">Register</h3>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control p_input" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control p_input" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control p_input" />
            </div>
            <div className="form-group d-flex align-items-center justify-content-between">
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" /> Remember me </label>
              </div>
              <a href="#" className="forgot-pass">Forgot password</a>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-block enter-btn"><Link className='av-link active show' to="/sidebar"></Link>Login</button>
            </div>
            <div className="d-flex">
              <button className="btn btn-facebook col mr-2">
                <i className="mdi mdi-facebook" /> Facebook </button>
              <button className="btn btn-google col">
                <i className="mdi mdi-google-plus" /> Google plus </button>
            </div>
            <p className="sign-up text-center">Already have an Account?<a href="#"> Sign Up</a></p>
            <p className="terms">By creating an account you are accepting our<a href="#"> Terms &amp; Conditions</a></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
