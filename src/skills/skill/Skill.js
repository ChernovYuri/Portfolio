import React from 'react';
import s from './Skill.module.scss'

export const Skill = (props) => {
    return (
        <div className={s.skill}>
            <img className={s.icon} src={props.icon}/>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};
