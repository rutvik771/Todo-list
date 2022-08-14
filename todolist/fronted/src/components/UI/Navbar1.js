import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Contain } from './Contain'


export const Navbar1 = () => {
  

  
  return (
      
    <div>
  <nav className="navbar  navbar-expand-lg navbar-dark navbar-custom fixed-top" style={{backgroundColor: "#5f4dee"}}>
    <div className="container">
      {/* Text Logo - Use this if you don't have a graphic logo */}
      {/* <a class="navbar-brand logo-text page-scroll" href="index.html">Tivo</a> */}
      {/* Image Logo */}
      <h2 style={{color:"white"}}>Todolist</h2> 
      {/* Mobile Menu Toggle Button */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-awesome fas fa-bars" />
        <span className="navbar-toggler-awesome fas fa-times" />
      </button>
      {/* end of mobile menu toggle button */}
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link page-scroll" to="dashboard1">HOME </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link page-scroll" to="features">FEATURES</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link page-scroll" to="details">DETAILS</Link>
          </li>
        </ul>
        <span className="nav-item" >
          <NavLink className="btn-outline-sm "  to="login1"  >LOG IN</NavLink>
        </span>
      </div>
    </div> {/* end of container */}
  </nav> {/* end of navbar */}
  {/* end of navigation */}
  {/* Header */}

</div>


  )
}
