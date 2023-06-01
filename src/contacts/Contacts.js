import React from 'react';
import s from './Contacts.module.scss'
import sc from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import emailjs from "emailjs-com"

export const Contacts = () => {

    const sendEmail = (e) => {
        debugger
        e.preventDefault();
        emailjs.sendForm('service_4nl4wdl', 'template_04h285m', e.target, 'ae3We2Ky1DOKDyMTh')
            .then((result) => {
                alert('Your message successfully delivered');
            }).catch((error) => {
                alert('Sorry, something gone wrong. ' + error.text);
            });
        e.target.reset()
    }

    return (
        <div className={s.contactsBlock} id={'contactsBlock'}>
            <div className={`${sc.container} ${s.contactsContainer}`}>
                <Title title={'Contact with me'}/>
                <form className={s.contacts} onSubmit={sendEmail}>
                    <input type={'text'} className={s.input} placeholder={'Your name'} name={'name'}/>
                    <input type={'text'} className={s.input} placeholder={'Your Email'} name={'email'}/>
                    <textarea className={s.textarea} placeholder={'Other Information'} name={'message'}/>
                    <input type={'submit'} className={s.button} value={'Send'}/>
                </form>
            </div>
        </div>
    );
};
