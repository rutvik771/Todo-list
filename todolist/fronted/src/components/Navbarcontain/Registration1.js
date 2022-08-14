import React, { createContext } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useState , useEffect , useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Usercontext= createContext();

export const Registration1 = () => {

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
      role:'623d68d508fcef0f636eb049',
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
     

      setTimeout(() => {
         navigate('/dashboard1') 
      }, 2000);

      
      toast.success('Registration successfully')
  })
}


  return (
    <Usercontext.Provider value={username}>
    <div>
  <header id="header" className="ex-2-header" style={{backgroundColor: "#ffffff"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 style={{color : "#5f4dee"}}>Sign Up</h1>
          <p style={{color : "#5f4dee"}}>Fill out the form below to sign up for Tivo.</p> 
          {/* Sign Up Form */}
          <div className="form-container">
            <form id="signUpForm" data-toggle="validator" data-focus="false" onSubmit={submit}>
            <div className="form-group">
                <input type="text" className="form-control-input" id="sname" required onChange={(e) => {usernameChangeHandler(e)}}/>
                <label className="label-control" htmlFor="sname">Name</label>
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control-input" id="semail" required onChange={(e) => {emailChangeHandler(e)}} />
                <label className="label-control" htmlFor="semail">Email</label>
                <div className="help-block with-errors" />
              </div>
    
              <div className="form-group">
                <input type="text" className="form-control-input" id="spassword" required onChange={(e) => {passwordChangeHandler(e)}} />
                <label className="label-control" htmlFor="spassword">Password</label>
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <input type="date" className="form-control-input" id="sname" required onChange={(e) => {dateofbirthChangeHandler(e)}}/>
                <label className="label-control" htmlFor="sname">Date of Birth</label>
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control-input" id="sname" required onChange={(e) => {genderChangeHandler(e)}} />
                <label className="label-control" htmlFor="sname">Gender</label>
                <div className="help-block with-errors" />
              </div>
              <div className="form-group checkbox">
                <input type="checkbox" id="sterms" defaultValue="Agreed-to-Terms" required />I agree with Tivo's <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a>
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <button type="submit" className="form-control-submit-button" onSubmit={submit}>SIGN UP</button>
                <ToastContainer
                      position="top-center"
                      color="black"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      style={{ color:"red" }} 
                    />
              </div>
              <div className="form-message">
                <div id="smsgSubmit" className="h3 text-center hidden" />
              </div>
            </form>
          </div> {/* end of form container */}
          {/* end of sign up form */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </header> {/* end of ex-header */}
</div>
</Usercontext.Provider>
  )
}

export {Usercontext};