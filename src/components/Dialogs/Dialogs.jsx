import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Vlad
                </div>
                <div className={s.dialog}>
                    Andryxa
                </div>
                <div className={s.dialog}>
                    Vanes
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hru</div>
                <div className={s.message}>Yo yo yo</div>
            </div>
        </div>
    );
}

export default Dialogs;