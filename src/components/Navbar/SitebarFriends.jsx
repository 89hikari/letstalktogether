import React from 'react';
import classes from './SitebarFriends.module.css'
import { NavLink } from 'react-router-dom';

const SitebarFriends = (props) => {

    let friendsElements = props.friends.map(m => <NavLink to='/' activeClassName={classes.active}>
    <div className={classes.item}>
        <img src={m.img} />
        <div></div>
        <span>{m.name}</span>
    </div>
    </NavLink>);

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Friends</h2>
            <div className={classes.friends}>
                { friendsElements }
            </div>
        </div>
    );
}

export default SitebarFriends;