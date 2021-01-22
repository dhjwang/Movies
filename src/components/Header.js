import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

const Header = () => {
    return (
        <nav>
            <Link to='/' className="home">Search</Link>
            <Link to = '/checkout' className = 'check'>Checkout</Link>
        </nav>
    )
}

export default Header;
