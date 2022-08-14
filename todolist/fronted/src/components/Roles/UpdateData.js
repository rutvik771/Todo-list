import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const UpdateData = () => {


  var id = useParams().id;
  console.log("id", id)

  const [data, setdata] = useState('')
  const [roleName, setroleName] = useState(data.roleName)

  const getData = async () => {
    await axios.get(`http://localhost:4000/roles/${id}`).then(res => {
      setdata(res.data.data);
      console.log(res.data.data);
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const update = (e) => {
    //api calling..

    var updatedData = {
      roleName: roleName,
    };
    e.preventDefault();

    axios.put(`http://localhost:4000/roles/${id}`, updatedData).then(res => {
      toast("Rolename updated..")
    });
  };

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <form onSubmit={update}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">RoleName</label>
            <input type="text" className="form-control" defaultValue={data.roleName} onChange={(e) => setroleName(e.target.value)} />
          </div>
          <tr>
            <button type="submit" onClick={update} className="btn btn-primary">Submit</button>
            <Link to="/dashboard" className="btn btn-light" >Go Back</Link>
            <ToastContainer />
          </tr>
        </form>
      </div>
    </div>

  )
}
