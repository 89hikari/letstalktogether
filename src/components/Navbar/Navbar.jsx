import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import SitebarFriends from './SitebarFriends'

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='#' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='#' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='#' activeClassName={classes.active}>Settings</NavLink>
            </div>
            <SitebarFriends friends={props.state}/>
        </nav>
    );
}

export default Navbar;