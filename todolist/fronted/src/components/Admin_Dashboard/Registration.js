import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const Registration = () => {

    let navigate = useNavigate();

    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [dateofbirth, setdateofbirth] = useState('')
    const [gender, setgender] = useState('')

    var data = {
        name:username,
        email:email,
        password:password,
        dateofbirth:dateofbirth,
        gender:gender,
    }

    const usernameChangeHandler = (e) =>{
        setusername(e.target.value)
    }

    const emailChangeHandler = (e) =>{
        setemail(e.target.value)
    }

    const passwordChangeHandler = (e) =>{
        setpassword(e.target.value)
    }
    const dateofbirthChangeHandler = (e) =>{
        setdateofbirth(e.target.value)
    }
    const genderChangeHandler = (e) =>{
        setgender(e.target.value)
    }

    const submit =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/users' , data).then(res =>{
            console.log(res.data);
            toast("Successfully register");

            setTimeout(() => {
               navigate('/dashboard') 
            }, 2000);
        })
    }
  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="row w-100 m-0">
      <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
        <div className="card col-lg-4 mx-auto">
          <div className="card-body px-5 py-5">
            <h3 className="card-title text-left mb-3">Sign up</h3>
            <form onSubmit={submit}>
              <div className="form-group">
                <label>Name*</label>
                <input type="text" className="form-control p_input" onChange={(e) => {usernameChangeHandler(e)}} />
              </div>
              <div className="form-group">
                <label>E-mail*</label>
                <input type="email" className="form-control p_input" onChange={(e) => {emailChangeHandler(e)}}/>
               </div>
               <div className="form-group">
                <label>Password*</label>
                <input type="password" className="form-control p_input" onChange={(e) => {passwordChangeHandler(e)}}/>
               </div>
               <div className="form-group">
                <label>Date of Birth</label>
                <input type="text" className="form-control p_input" onChange={(e) => {dateofbirthChangeHandler(e)}}/>
               </div>
               <div className="form-group">
                <label>Gender</label>
                <input type="text" className="form-control p_input" onChange={(e) => {genderChangeHandler(e)}}/>
               </div>
              <div className="form-group d-flex align-items-center justify-content-between">
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" /> Remember me </label>
                </div>
                <a href="#" className="forgot-pass">Forgot password</a>
              </div>
              <div className="text-center">
                <button type="submit" onClick={submit} className="btn btn-primary btn-block enter-btn"  >Register</button><ToastContainer/>
              </div>
              <p className="sign-up">Already have an Account?<Link to='/'> Login</Link></p>
            </form>
          </div>
        </div>
      </div>
      {/* content-wrapper ends */}
    </div>
    {/* row ends */}
    
  </div>
  
  )
}
