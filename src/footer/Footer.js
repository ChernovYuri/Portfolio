import React from 'react';
import s from './Footer.module.scss'
import sc from '../common/styles/Container.module.css'
import {Link} from "./links/Link";
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sc.container} ${s.footerContainer}`}>
                <Title title={'Yuri Chernov'}/>
                <div className={s.socialNetworks}>
                    <Link icon={'https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-256.png'} alt={'GitHub'} link={'GitHub'}/>
                    <Link icon={'https://gcdnb.pbrd.co/images/h2PBqb733ZO2.png?o=1'} alt={'LinkedIn'} link={'LinkedIn'}/>
                    <Link icon={'https://gcdnb.pbrd.co/images/mdaiMxkU4AKq.png?o=1'} alt={'Telegram'} link={'Telegram'}/>
                    <Link icon={'https://gcdnb.pbrd.co/images/dA8zLEuSLrZi.png?o=1'} alt={'Mail'} link={'Mail'}/>
                </div>
                <div className={s.rights}>
                    <span>© 2023 All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
};