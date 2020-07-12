import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'>My Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='#'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='#'>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;