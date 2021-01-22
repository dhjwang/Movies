import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

const Header = () => {
    return (
        <nav>
            <Link to={`${process.env.PUBLIC_URL}/`} className="home">Search</Link>
            <Link to = {`${process.env.PUBLIC_URL}/checkout`} className = 'check'>Checkout</Link>
        </nav>
    )
}

export default Header;
