import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Andrey' id = '1'/>
                <DialogItem name='Vlad' id = '2'/>
                <DialogItem name='Vandes' id = '3'/>
                <DialogItem name='Valera' id = '4'/>
                <DialogItem name='Aloxa' id = '5'/>
            </div>
            <div className={s.messages}>
                <Message message="yoyoyo" />
                <Message message="yoyoyo" />
                <Message message="yoyoyo" />
            </div>
        </div>
    );
}

export default Dialogs;