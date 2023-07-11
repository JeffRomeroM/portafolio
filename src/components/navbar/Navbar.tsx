import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " aria-label="Offcanvas navbar large">
    <div className="container-fluid">
      
      
      <Link to="/" className="nav-link active"><img className='logo' src="../../../public/logo.png" alt="" width={50}/></Link>
      
      <i className="bi bi-list" 
      data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation"></i>

      <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbar2Label">JR collecion</h5>
          
          
          <i className="bi bi-x-lg" data-bs-dismiss="offcanvas" aria-label="Close"></i>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">

              <Link to="/landing" className="nav-link active">Landing</Link>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Colección
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/" className="dropdown-item">Home</Link>
                </li>
                <li>
                <Link to="/landing" className="dropdown-item">Landing</Link></li>
               
                <li><Link to="/" className="dropdown-item">Home</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Animaciones CSS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Reflexiones</a>
            </li>
           
          </ul>
          
        </div>
      </div>
    </div>
    </nav>
  )
}
