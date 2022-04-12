import React from 'react';
import { NavLink } from 'react-router-dom';
//styles
import './Header.scss';
//icons
import { FaRegNewspaper } from 'react-icons/fa';

function Header() {

    return (
        <div className='header'>
            <NavLink to="/">
                <div className='header__title'>
                    <FaRegNewspaper className='header__title--icon' />
                    <p>Awesome News</p>
                </div>
            </NavLink>
            <div className='header__links'>
                <NavLink to="/recent-news" style={({ isActive }) => (isActive ? { textDecoration: 'none', color: 'white' } : { textDecoration: 'none', color: 'rgba(255, 255, 255, 0.485)' })}>
                    <p>Recent News</p>
                </NavLink>
                <NavLink to="/top-rated" style={({ isActive }) => (isActive ? { textDecoration: 'none', color: 'white' } : { textDecoration: 'none', color: 'rgba(255, 255, 255, 0.485)' })}>
                    <p>Top Rated</p>
                </NavLink>
                <NavLink to="/" style={({ isActive }) => (isActive ? { textDecoration: 'none', color: 'white' } : { textDecoration: 'none', color: 'rgba(255, 255, 255, 0.485)' })}>
                    <p>Categories</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;