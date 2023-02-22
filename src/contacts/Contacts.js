import React from 'react';
import s from './Contacts.module.css'
import sc from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sc.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>My contacts</h2>
                <form className={s.contacts}>
                    <input></input>
                    <input></input>
                    <textarea></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};
