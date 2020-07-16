import React from 'react';
import s from './SitebarFriends.module.css'
import { NavLink } from 'react-router-dom';

const SitebarFriends = (props) => {

    let friendsElements = props.friends.map(m => <NavLink to='/' activeClassName={s.active}>
    <div className={s.item}>
        <img src={m.img} />
        <div></div>
        <span>{m.name}</span>
    </div>
    </NavLink>);

    return (
        <div className={s.container}>
            <h2 className={s.title}>Friends</h2>
            <div className={s.friends}>
                { friendsElements }
            </div>
        </div>
    );
}

export default SitebarFriends;