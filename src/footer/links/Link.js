import React from 'react';
import s from './Link.module.css'

export const Link = (props) => {
    return (
        <div className={s.link}>
            <img className={s.icon} src={props.icon} alt={props.alt} onClick={()=>{alert(props.link)}}/>
        </div>
    );
};
