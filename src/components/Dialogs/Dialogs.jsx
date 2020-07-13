import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Vlad"},
        {id: 3, name: "Vandes"},
        {id: 4, name: "Valera"},
        {id: 5, name: "Aloxa"},
        {id: 6, name: "Some"},
    ];

    let messages = [
        {id: 1, message: "yoyoyo"},
        {id: 2, message: "yoyoyo1"},
        {id: 3, message: "yoyoyo2"},
        {id: 4, message: "yoyoyo3"},
        {id: 5, message: "yoyoyo4"},
        {id: 6, message: "yoyoyo5"},
    ];

    let dialogElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;