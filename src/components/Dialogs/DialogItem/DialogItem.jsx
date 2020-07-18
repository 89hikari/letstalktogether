import React from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.ava} src={props.ava}/>
            <NavLink to={path} activeClassName={s.active} className={s.nameLink}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;