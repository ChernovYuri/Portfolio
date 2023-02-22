import React from 'react';
import s from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <img className={s.siteImg} src={props.img} alt={props.alt}/>
                <button className={s.button}>Open</button>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};
