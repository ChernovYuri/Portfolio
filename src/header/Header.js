import React from 'react';
import s from './Header.module.scss'
import sc from '../common/styles/Container.module.css'
import {Nav} from "../nav/Nav";
import {Link} from "../footer/links/Link";
import cvIcon from "../assets/icons/cvIcon256.png"
import cv from "../assets/cv/Чернов Юрий React.pdf"

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${sc.container} ${s.headerContainer}`}>
                <div className={s.socialNetworks}>
                    <Link icon={'https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-256.png'}
                          alt={'GitHub'} link={'GitHub'} href={'https://github.com/ChernovYuri'}/>
                    <Link icon={'https://gcdnb.pbrd.co/images/h2PBqb733ZO2.png?o=1'} alt={'LinkedIn'}
                          link={'LinkedIn'} href={'https://www.linkedin.com/in/yuri-chernov-367a89252/'}/>
                    <Link icon={'https://gcdnb.pbrd.co/images/mdaiMxkU4AKq.png?o=1'} alt={'Telegram'}
                          link={'Telegram'} href={'https://t.me/ChernovYuri'}/>
                    <Link icon={'https://gcdnb.pbrd.co/images/dA8zLEuSLrZi.png?o=1'}
                          alt={'Mail'} link={'Mail'} href={'mailto:chernovxxi@gmail.com'}/>
                    <Link icon={cvIcon}
                          alt={'My CV'} link={'CV'} href={cv}/>
                </div>
                <Nav/>
            </div>
        </div>
    );
};
