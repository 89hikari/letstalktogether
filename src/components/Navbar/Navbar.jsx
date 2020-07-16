import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import SitebarFriends from './SitebarFriends'

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.links}>
                <div className={classes.item2 + ' ' + classes.profile}>
                    <NavLink to='/profile' activeClassName={classes.active}><i className="fa fa-address-card-o" aria-hidden="true"></i></NavLink>
                </div>
                <div className={classes.item2 + ' ' + classes.messages}>
                    <NavLink to='/dialogs' activeClassName={classes.active}><i class="fa fa-comments-o" aria-hidden="true"></i></NavLink>
                </div>
                <div className={classes.item2 + ' ' + classes.news}>
                    <NavLink to='/#' activeClassName={classes.active}><i class="fa fa-newspaper-o" aria-hidden="true"></i></NavLink>
                </div>
                <div className={classes.item2 + ' ' + classes.music}>
                    <NavLink to='/#' activeClassName={classes.active}><i class="fa fa-music" aria-hidden="true"></i></NavLink>
                </div>
                <div className={classes.item2 + ' ' + classes.settings}>
                    <NavLink to='/#' activeClassName={classes.active}><i class="fa fa-cogs" aria-hidden="true"></i></NavLink>
                </div>
            </div>
            <hr></hr>
            <SitebarFriends friends={props.state} />
        </nav >
    );
}

export default Navbar;