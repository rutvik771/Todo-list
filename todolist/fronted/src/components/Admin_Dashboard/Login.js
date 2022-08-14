import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {

  let navigate = useNavigate();

  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

   const login = async(e) =>{
     
    e.preventDefault();

    var data = {

      email:username,
      password:password,
    }
     await axios.post("http://localhost:4000/login" , data).then(res =>{
       console.log(res.data.data);

       if(res.data.status == 200 ){

        localStorage.setItem("email" , res.data.data.email)
        localStorage.setItem("name" , res.data.data.name)
        localStorage.setItem("role" , res.data.data.role.roleName)
        toast(res.data.msg)

        setTimeout(() => {
           navigate('/dashboard')
        }, 2000);
       }

       else {
         console.log("here..")
         setTimeout(() => {
           
          navigate('/')
         }, 2000 );

         toast(res.data.msg)
       }
     })
   }
  return (
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="row w-100 m-0">
      <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
        <div className="card col-lg-4 mx-auto">
          <div className="card-body px-5 py-5">
            <h3 className="card-title text-left mb-3">Login</h3>
            <form onSubmit={login}>
              <div className="form-group">
                <label>Username or email *</label>
                <input type="text" className="form-control p_input" onChange={(e) => setusername(e.target.value)} />
                {
                  username.length > 0 && username.length < 3 ? "please enter the correct username" : null 
                }
              </div>
              <div className="form-group">
                <label>Password *</label>
                <input type="password" className="form-control p_input" onChange={(e) => setpassword(e.target.value)}/>
                {
                  password.length > 0 && password.length < 8 ? "password should be 8 character" : null
                }
              </div>
              <div className="form-group d-flex align-items-center justify-content-between">
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" /> Remember me </label>
                </div>
                <a href="#" className="forgot-pass">Forgot password</a>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block enter-btn"  >Login</button><ToastContainer/>
              </div>
              <p className="sign-up">Don't have an Account?<Link to='registration'> Sign Up</Link></p>
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
