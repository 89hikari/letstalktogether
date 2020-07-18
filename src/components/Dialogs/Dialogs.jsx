import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { NavLink } from 'react-router-dom';
import Name from './Name';

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />);
    let separateElement = props.state.dialogs.map(elem => <Name name={elem.name} id={elem.id} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let newMessage = newMessageElement.current.value;
        alert(newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div className={s.chatHead}>
                    {/*separateElement*/}
                </div>
                <div className={s.container}>
                    {messagesElements}
                </div>
                <div className={s.messageInput}>
                    <textarea className={s.textArea} ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div >
    );
}

export default Dialogs;