import React from 'react';
import s from './Link.module.scss'

export const Link = (props) => {
    return (
        <a className={s.link} href={props.href} target={'_blank'}>
            <img className={s.icon} src={props.icon} alt={props.alt}/>
        </a>
    );
};
