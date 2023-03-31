import React from 'react';
import s from './Main.module.scss'
import sc from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock} id={'mainBlock'}>
            <div className={`${sc.container} ${s.mainContainer}`}>
                <div className={s.message}>
                    <div>Hello</div>
                    <h1>My name is <span className={s.greenText}>Yuri Chernov</span></h1>
                    <p>I am <span className={s.greenText}>Front-End Developer</span></p>
                </div>
                <img className={s.photo} src={'https://krot.info/uploads/posts/2022-03/1646697747_51-krot-info-p-smeshnoi-begemot-smeshnie-foto-54.png'}></img>
            </div>
        </div>
    );
};
