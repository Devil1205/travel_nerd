import React from 'react';
import logo from './logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='myNavbar'>
            <div className="logo">
                <Link to="/"><img src={logo} alt="TNerd" /></Link>
                <Link to='/'>Travel NeRd</Link>
            </div>
        </div>
    )
}

export default Navbar