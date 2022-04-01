import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;