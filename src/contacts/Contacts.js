import React from 'react';
import s from './Contacts.module.scss'
import sc from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock} id={'contactsBlock'}>
            <div className={`${sc.container} ${s.contactsContainer}`}>
                <Title title={'Contact with me'}/>
                <form className={s.contacts}>
                    <input type={'text'} className={s.input} placeholder={'Your name'}/>
                    <input type={'email'} className={s.input} placeholder={'Your Email'}/>
                    <textarea className={s.textarea} placeholder={'Other Information'}/>
                </form>
                <button type={'submit'} className={s.button}>Send</button>
            </div>
        </div>
    );
};
