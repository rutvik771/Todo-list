import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const List = () => {

  const [listsList, setlistsList] = useState([])

  const getList = () => {
    axios.get("http://localhost:4000/lists").then(res => {
      console.log(res.data.data);

      setlistsList(res.data.data);
    })
  }

  useEffect(() => {

    getList();

  }, [])

  const deleteList = (_id) => {

    axios.delete(`http://localhost:4000/lists/${_id}`).then(res => {
      toast("List deleted..")
      getList();
    })
  }
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> List </h3>
          {/* <Link to="/dashboard/list/addlist" className='btn btn-primary'>Add List</Link> */}
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"> Table</h4>

                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th><h3>List Id</h3></th>
                        <th><h3>List name</h3></th>
                        {/* <th><h3>Role</h3></th>
                        <th><h3>User</h3></th> */}
                        <th><h3>Action</h3></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        listsList.map((list) => {

                          return (
                            <tr>
                              <td>{list._id}</td>
                              <td>{list.listName}</td>
                              {/* <td>{list.role.roleName}</td>
                              <td>{list.user.name}</td> */}
                              <td><button onClick={() => { deleteList(list._id) }} className="btn btn-danger" >Delete</button>
                                <Link to={`./updatelist/${list._id}`} className="btn btn-primary">Update</Link>
                              </td>
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
