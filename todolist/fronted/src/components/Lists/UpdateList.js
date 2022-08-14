import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateList = () => {

  var id = useParams().id;
  console.log("id", id);

  const [data, setdata] = useState('')
  const [listName, setlistName] = useState(data.listName)

  const getdata = async () => {
    await axios.get(`http://localhost:4000/lists/${id}`).then(res => {
      setdata(res.data.data);
      console.log(res.data.data);
    })
  }

  useEffect(() => {
    getdata();
  }, [])

  const update = (e) => {
    var updatedata = {
      listName: listName,
    };

    e.preventDefault();

    axios.put(`http://localhost:4000/lists/${id}`, updatedata).then(res => {
      console.log(updatedata);
      toast("Listname updated..")
    });
  };

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <form onSubmit={update}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">List Name</label>
            <input type="text" className="form-control" defaultValue={data.listName} onChange={(e) => setlistName(e.target.value)} />
          </div>
          <button type="submit" onClick={update} className="btn btn-primary">Submit</button>
          <Link to="/dashboard" className='btn btn-light'>Go Back</Link>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}
