import React from 'react';
import s from './Skill.module.scss'

export const Skill = (props) => {
    return (
        <div className={s.skill}>
            <img className={s.icon} src={props.icon} alt={props.title}/>
            <h3 className={s.title}>{props.title}</h3>
            <ul className={s.techs}>
                {props.techs.map(tech => <li>{tech}</li>)}
            </ul>
        </div>
    );
};
