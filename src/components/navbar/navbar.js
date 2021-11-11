/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './navbar.css'
import ProfileImg from '../../assets/profile-img.jpg'

export const Navbar = () => {
    return(
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/">General Forum</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/home"><i className="fas fa-columns"></i>Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/explore"><i className="fas fa-search"></i>Explore</a>
                      </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <img className='profile-img' src={ProfileImg} alt='Prfile'></img>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="/profile"><i className="far fa-user"></i> View Profile</a></li>
                          <li><hr className="dropdown-divider"></hr></li>
                          <li><a className="dropdown-item" href="/login"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                </div>
            </nav>
        </div>
    )
}

export default Navbar