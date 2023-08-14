import React from 'react';
import s from './Header.module.scss'
import sc from '../common/styles/Container.module.css'
import {Nav} from "../nav/Nav";
import {Link} from "../common/components/link/Link";
import githubIcon from "../assets/icons/githubIcon256.png"
import linkedinIcon from "../assets/icons/linkedinIcon256.png"
import telegramIcon from "../assets/icons/telegramIcon256.png"
import mailIcon from "../assets/icons/mailIcon256.png"
import cvIcon from "../assets/icons/cvIcon256.png"
import cv from "../assets/cv/Чернов Юрий React.pdf"

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${sc.container} ${s.headerContainer}`}>
                <div className={s.socialNetworks}>
                    <Link icon={githubIcon}
                          alt={'GitHub'} link={'GitHub'} href={'https://github.com/ChernovYuri'}/>
                    <Link icon={linkedinIcon}
                          link={'LinkedIn'} href={'https://www.linkedin.com/in/yuri-chernov-367a89252/'}/>
                    <Link icon={telegramIcon} alt={'Telegram'}
                          link={'Telegram'} href={'https://t.me/ChernovYuri'}/>
                    <Link icon={mailIcon}
                          alt={'Mail'} link={'Mail'} href={'mailto:chernovxxi@gmail.com'}/>
                    <Link icon={cvIcon}
                          alt={'My CV'} link={'CV'} href={cv}/>
                </div>
                <Nav/>
            </div>
        </div>
    );
};
