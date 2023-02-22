import React from 'react';
import s from './Main.module.css'
import sc from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sc.container} ${s.mainContainer}`}>
                <div className={s.message}>
                    <span>Hello</span>
                    <h1>My name is Yuri Chernov</h1>
                    <p>I am Front-end Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};
