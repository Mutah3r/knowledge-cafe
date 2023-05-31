import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-title-container">
                <h1 className="nav-title">Knowledge Cafe</h1>
            </div>
            <div className="nav-logo-container">
                <img src="https://mutah3r.github.io/personal-website/images/profile-picture.png" alt="" className="user-logo" />
            </div>
        </nav>
    );
};

export default Navbar;