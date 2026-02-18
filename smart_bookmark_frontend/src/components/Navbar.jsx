import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="header">
            <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <h1>Smart Bookmark Manager</h1>
                </Link>
                <div>
                    <Link to="/" className="btn btn-primary" style={{ marginRight: '10px' }}>Home</Link>
                    <Link to="/add-bookmark" className="btn btn-primary">Add New</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;