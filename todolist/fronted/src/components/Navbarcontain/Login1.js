import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { useState , useContext , useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar1 } from '../UI/Navbar1';



export const Login1 = ({authenticate}) => {

  let navigate = useNavigate();

  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [role, setrole] = useState("")
  const [userId, setuserId] = useState("")
  const [roleId, setroleId] = useState("")




  
  useEffect( async() => {

    let email=localStorage.getItem("email")
    let role=localStorage.getItem("role") 
    let roleId=localStorage.getItem("roleId")
    let userId = localStorage.getItem("userId")



    setrole(role)
    setroleId(roleId)
    setuserId(userId) 

    // console.log("App.js email:" , email)
    // console.log("App.js role:" , role)
    // console.log("userId in App.js:", userId)

    if(email && roleId){
      setroleId(true)
    }
    else{
      setroleId(false)
    }

  }, [])

  useEffect(() => {
   localStorage.setItem("roleId", roleId)
  }, [roleId])
  

  const login = async (e) => {

    e.preventDefault();

    var data = {

      email: username,
      password: password,
    }
    await axios.post("http://localhost:4000/login", data).then(res => {
      console.log(res.data.data);


      if (res.data.status == 200 ) {

        localStorage.setItem("email", res.data.data.email)
        localStorage.setItem("name", res.data.data.name)
        localStorage.setItem("role", res.data.data.role.roleName)
        localStorage.setItem("userId",res.data.data._id)
        console.log("userId",res.data.data._id)
        
        authenticate && authenticate(true , res.data.data.role._id, res.data.data._id)

        console.log( "role",res.data.data.role._id)
         if(res.data.data.role._id === "62500a2b9be8275e64c66e22") {
        
          setTimeout(() => {
  
            navigate('/dashboard')
          }, 1300);
  
          toast.success(res.data.msg)
        }

       else if(res.data.data.role._id === "623d68d508fcef0f636eb049") {
        
          setTimeout(() => {
  
            navigate('/dashboard1')
          }, 1300);
  
          toast.success(res.data.msg)
        }

      }

      
      else {
        
        setTimeout(() => {

          navigate('/login1')
        }, 2000);

        toast.error(res.data.msg)
      }
    })
  }


  return (
    <div>

      <header id="header" className="ex-2-header" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 style={{ color: "#5f4dee" }}>Log In</h1>
              <p style={{ color: "#5f4dee" }}>You don't have a password? Then please <Link style={{ color: "#5f4dee" }} className="white" to="registration1">Sign Up</Link></p>
              {/* Sign Up Form */}
              <div className="form-container">
                <form id="logInForm" data-toggle="validator" data-focus="false" onSubmit={login}>
                  <div className="form-group">
                    <input type="email" className="form-control-input" id="lemail" required onChange={(e) => setusername(e.target.value)} />
                    <label className="label-control" htmlFor="lemail">Email</label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control-input" id="lpassword" required onChange={(e) => setpassword(e.target.value)} />
                    <label className="label-control" htmlFor="lpassword">Password</label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control-submit-button">LOG IN</button>
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
                    <div id="lmsgSubmit" className="h3 text-center hidden" />
                  </div>
                </form>
              </div> {/* end of form container */}
              {/* end of sign up form */}
            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </header> {/* end of ex-header */}
      {/* end of header */}
    </div>


  )
}
