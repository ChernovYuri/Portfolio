import React from 'react';
import s from './Header.module.css'
import sc from '../common/styles/Container.module.css'
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${sc.container} ${s.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
};
