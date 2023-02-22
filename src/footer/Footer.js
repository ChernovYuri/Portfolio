import React from 'react';
import s from './Footer.module.css'
import sc from '../common/styles/Container.module.css'
import {Link} from "./links/Link";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sc.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Yuri Chernov</h2>
                <div className={s.socialNetworks}>
                    <Link/>
                    <Link/>
                    <Link/>
                    <Link/>
                </div>
                <div className={s.rights}>
                    <span>© 2023 All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
};