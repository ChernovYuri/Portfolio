import React from 'react'
import s from './Main.module.scss'
import sc from '../common/styles/Container.module.css'
import mePhoto from '.././assets/images/me.jpg'
export const Main = () => {
    return (
        <div className={s.mainBlock} id={'mainBlock'}>
            <div className={`${sc.container} ${s.mainContainer}`}>
                <div className={s.message}>
                    <div>Hello</div>
                    <h1>My name is <span className={s.greenText}>Yuri Chernov</span></h1>
                    <p>I am <span className={s.greenText}>Frontend Developer</span></p>
                </div>
                <img className={s.photo} src={mePhoto} alt={'My photo'}></img>
            </div>
        </div>
    );
};
