import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container max__container">
                <Link to="/" className="link">
                    <h1 className="logo">M.Store</h1>
                </Link>
                <nav>
                    <ul className="navbar__links">
                        <li>
                            <Link to="/" className="link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="link">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="link">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;