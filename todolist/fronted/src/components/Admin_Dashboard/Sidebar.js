import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from './Navbar'



export const Sidebar = () => {
  return (
      <div className ="container-scroller">
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
      <div><h3>TODO LIST</h3></div>
      <Link className="sidebar-brand brand-logo-mini" to="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></Link>
    </div>
    <ul className="nav">
      <li className="nav-item profile">
        <div className="profile-desc">
          <div className="profile-pic">
            <div className="count-indicator">
              <img className="img-xs rounded-circle " src="assets/images/faces/face15.jpg" />
              <span className="count bg-success" />
            </div>
            <div className="profile-name">
              <h5 className="mb-0 font-weight-normal" style={{color:"white"}}>Rutvik Patel</h5>
            </div>
          </div>
          <Link to="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical" /></Link>
          <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
            <Link to="#" className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-settings text-primary" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
              </div>
            </Link>
            <div className="dropdown-divider" />
            <Link to="#" className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-onepassword  text-info" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
              </div>
            </Link>
            <div className="dropdown-divider" />
            <Link to="#" className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-calendar-today text-success" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
              </div>
            </Link>
          </div>
        </div>
      </li>
      <li className="nav-item nav-category">
        <span className="nav-link active show">Navigation</span>
      </li>
      {/* <li className="nav-item menu-items">
        <Link className="nav-link active show  " to="/dashboard">
          <span className="menu-icon">
            <i className="mdi mdi-speedometer" />
          </span>
          <span className="menu-title">Dashboard</span>
        </Link>
      </li> */}
      {/* <li className="nav-item menu-items">
        <Link className="nav-link active show " to="/login">
          <span className="menu-icon">
            <i className="mdi mdi-laptop" />
          </span>
          <span className="menu-title">Login</span>
        </Link>
      </li> */}
      {/* <li className="nav-item menu-items">
        <Link className="nav-link active show " to="/register">
          <span className="menu-icon">
            <i className="mdi mdi-playlist-play" />
          </span>
          <span className="menu-title">Register</span>
        </Link>
      </li> */}
      <li className="nav-item menu-items">
        <a className="nav-link " href='#auth'data-toggle="collapse" aria-expanded="false" aria-controls="auth">
          <span className="menu-icon">
            <i className="mdi mdi-table-large" />
          </span>
          <span className="menu-title">Tables</span>
          <i class="menu-arrow"></i>
        </a>
       <div className="collapse" id="auth">
  <ul className="nav flex-column sub-menu">
    <li className="nav-item"> <Link className="nav-link" to="roles/role"> Roles </Link></li>
  </ul>
  <ul className="nav flex-column sub-menu">
    <li className="nav-item"> <Link className="nav-link" to="users/usertable"> Users </Link></li>
  </ul>
  <ul className="nav flex-column sub-menu">
    <li className="nav-item"> <Link className="nav-link" to="lists/list"> Lists </Link></li>
  </ul>
  <ul className="nav flex-column sub-menu">
    <li className="nav-item"> <Link className="nav-link" to="tasks/task"> Tasks </Link></li>
  </ul>
  {/* <ul className="nav flex-column sub-menu">
    <li className="nav-item"> <Link className="nav-link" to="reminders/reminder"> Reminder</Link></li>
  </ul> */}
</div>
  </li>
    </ul>
  </nav>
  <Navbar/>
  </div>
  
  )
}
