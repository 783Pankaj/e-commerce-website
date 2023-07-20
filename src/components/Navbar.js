import React from "react";
import { NavLink } from 'react-router-dom'
import './NavStyle.css'

const Navbar=()=>{
    return(
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a href="#">LoGo</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-5 mb-lg-0">
                                <li>
                                    <NavLink to="/" className="pk">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home" className="pk">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className="pk">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' className="pk">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/item ' className="pk">User</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/search' className="pk">Search</NavLink>
                                </li>
                                <li>
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" className="srech"/>
                                <button class="btn btn-outline-success" type="submit" className="button">Search</button>
                    
                                </li>
                            </ul>
                            
                                
                        </div>
                    </div>
                </nav>
        </>
    );
}
export default Navbar;