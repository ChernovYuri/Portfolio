import React from 'react';
import s from './Footer.module.scss';
import sc from '../common/styles/Container.module.css';
import {Link} from "../common/components/link/Link";
import {Title} from "../common/components/title/Title";
import githubIcon from "../assets/icons/githubIcon256.png";
import linkedinIcon from "../assets/icons/linkedinIcon256.png";
import telegramIcon from "../assets/icons/telegramIcon256.png";
import mailIcon from "../assets/icons/mailIcon256.png";
import cvIcon from "../assets/icons/cvIcon256.png";
import cv from "../assets/cv/CV Чернов Юрий React.pdf";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sc.container} ${s.footerContainer}`}>
                <span className={s.title}><Title  title={'Yuri Chernov'}/></span>
                <div className={s.socialNetworks}>
                    <Link icon={githubIcon}
                          alt={'GitHub'} link={'GitHub'} href={'https://github.com/ChernovYuri'}/>
                    <Link icon={linkedinIcon} alt={'LinkedIn'}
                          link={'LinkedIn'} href={'https://www.linkedin.com/in/yuri-chernov-367a89252/'}/>
                    <Link icon={telegramIcon} alt={'Telegram'}
                          link={'Telegram'} href={'https://t.me/ChernovYuri'}/>
                    <Link icon={mailIcon}
                          alt={'Mail'} link={'Mail'} href={'mailto:chernovxxi@gmail.com'}/>
                    <Link icon={cvIcon}
                          alt={'My CV'} link={'CV'} href={cv}/>
                </div>
                <div className={s.rights}>
                    <span>© 2023 All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
};