import React from 'react';
import s from './Footer.module.scss'
import sc from '../common/styles/Container.module.css'
import {Link} from "./links/Link";
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sc.container} ${s.footerContainer}`}>
                <span className={s.title}><Title  title={'Yuri Chernov'}/></span>
                <div className={s.socialNetworks}>
                    <Link icon={'https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-256.png'}
                          alt={'GitHub'} link={'GitHub'} href={'https://github.com/ChernovYuri'}/>
                    <Link icon={'https://gcdnb.pbrd.co/images/h2PBqb733ZO2.png?o=1'} alt={'LinkedIn'}
                          link={'LinkedIn'} href={'https://www.linkedin.com/in/yuri-chernov-367a89252/'}/>
                    <Link icon={'https://gcdnb.pbrd.co/images/mdaiMxkU4AKq.png?o=1'} alt={'Telegram'}
                          link={'Telegram'} href={'https://t.me/ChernovYuri'}/>
                    <Link icon={'https://gcdnb.pbrd.co/images/dA8zLEuSLrZi.png?o=1'}
                          alt={'Mail'} link={'Mail'} href={'mailto:chernovxxi@gmail.com'}/>
                </div>
                <div className={s.rights}>
                    <span>© 2023 All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
};