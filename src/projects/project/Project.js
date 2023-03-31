import React from 'react';
import s from './Project.module.scss'

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <img className={s.siteImg} src={props.img} alt={props.alt}/>
                <button className={s.button}>Open</button>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
                <ul className={s.techs}>
                    {props.techs.map(tech => <li>{tech}</li>)}
                </ul>
            </div>
        </div>
    );
};
