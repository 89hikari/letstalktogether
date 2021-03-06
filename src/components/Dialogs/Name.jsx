import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Name = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.name}>   
            <NavLink to={path} activeClassName={s.active} >{props.name}</NavLink>
        </div>
}



export default Name;