import React from 'react';
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
                <a href="#mainBlock" className={s.link}>Main</a>
                <a href="#skillsBlock" className={s.link}>Skills</a>
                <a href="#projectsBlock" className={s.link}>Projects</a>
                <a href="#contactsBlock" className={s.link}>Contacts</a>
        </div>
    );
};
