import React from 'react';
import "./style.css"
// import { Link } from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';

const Navbar2 = () => {
  return <>
      <nav className="navbar navbar-expand-lg navbar-dark " id="navbar" style={{backgroundColor: 'rgb(43, 44, 44)', position: 'sticky', top: '0',zIndex: '2'}}>
        <div className="container-fluid  ">
            <Link className="navbar-brand" to="/"> <img src="https://i.postimg.cc/SRBC2k8C/soabism.png" alt="logo" width="50px"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                  
                    <NavLink className="nav-link" exact to="/" activeStyle={{ color: "white" }}>Home</NavLink>
                   
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" exact to="/about" activeStyle={{ color: "white" }}>About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" exact to="/projects" activeStyle={{ color: "white" }}>Projects</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" exact to="/Courses" activeStyle={{ color: "white" }}>Courses</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" exact to="/Contact" activeStyle={{ color: "white" }}>Contact</NavLink>
                    </li>
                   
                   

                </ul>

                <div className="right">
                    <a href="https://www.instagram.com/codes.soabism/" target="_blank"><i
                            className="bi bi-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCiQhMPGMvCbBSre4NbZTHIg" target="_blank"><i
                            className="bi bi-youtube"></i></a>
                    <a href="https://www.facebook.com/pages/category/Video-Creator/Codessoabism-109423924323945/" target="_blank"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/saurav-raj-56425a1ba/" target="_blank"><i
                            className="bi bi-linkedin"></i></a>
                </div>


            </div>
        </div>
    </nav>
  </>;
};

export default Navbar2;
