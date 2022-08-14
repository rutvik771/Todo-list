import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export const UserTable = () => {
  const [userList, setuserList] = useState([])

  const getData = () => {
    axios.get("http://localhost:4000/users").then(res => {
      console.log(res.data.data)
      setuserList(res.data.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const UserDelete = (_id) => {
    {
      axios.delete(`http://localhost:4000/users/${_id}`).then(res => {

        toast("User deleted..")
        getData();

      });
    }
  }

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">  Tables </h3>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Hoverable Table</h4>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th><h3>userId</h3></th>
                        <th><h3>name</h3></th>
                        <th><h3>email</h3></th>
                        {/* <th><h3>Password</h3></th> */}
                        <th><h3>dateofbirth</h3></th>
                        {/* <th><h3>gender</h3></th> */}
                        <th><h3>Action</h3></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        userList.map((user) => {

                          return (
                            <tr>
                              <td>{user._id}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              {/* <td>{user.password}</td> */}
                              <td>{user.dateofbirth}</td>
                              {/* <td>{user.gender}</td> */}

                              <td><button onClick={() => { UserDelete(user._id) }} className="btn btn-danger" >Delete</button>
                                <Link to={`./updateuserdata/${user._id}`} className="btn btn-primary">Update</Link>
                                <ToastContainer />

                              </td>
                            </tr>

                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
