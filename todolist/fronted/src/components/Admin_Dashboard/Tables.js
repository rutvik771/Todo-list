import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Tables = () => {
  const [roleList, setroleList] = useState([])

  const getData = () => {
    axios.get("http://localhost:4000/roles").then(res => {
      console.log(res.data.data)
      setroleList(res.data.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const RoleDelete = (_id) => {
    {
      axios.delete(`http://localhost:4000/roles/${_id}`).then((res) => {
        toast("Role deleted")
        getData();
      });
    }
  }
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Roles </h3>
          {/* <Link to="crud/addroledata" className='btn btn-primary'>Add Rolename</Link> */}
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Table</h4>

                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th><h3>roleId</h3></th>
                        <th><h3>rolename</h3></th>
                        {/* <th><h3>Last_name</h3></th>
                    <th><h3>email</h3></th> */}
                        <th><h3>Action</h3></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        roleList.map((role) => {

                          return (
                            <tr>
                              <td>{role._id}</td>
                              <td>{role.roleName}</td>
                              <td><button onClick={() => { RoleDelete(role._id) }} className="btn btn-danger" >DELETE</button>
                                <Link to={`./crud/updatedata/${role._id}`} className="btn btn-primary" >UPDATE</Link></td>
                              <ToastContainer />
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
