import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="image not found" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders Review</a>
                <a href="/inventory">Manage Inventory</a></nav>
        </div>
    );
};

export default Header;