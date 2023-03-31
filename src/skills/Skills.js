import React from 'react';
import s from './Skills.module.css'
import sc from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={s.skillsBlock} id={'skillsBlock'}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JavaScript'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'} icon={'https://cdn3.iconfinder.com/data/icons/brands-pack/240/js-256.png'}/>
                    <Skill title={'CSS'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'} icon={'https://cdn4.iconfinder.com/data/icons/blackicon/54/css3_icon-1024.png'}/>
                    <Skill title={'React'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'} icon={'https://cdn3.iconfinder.com/data/icons/brands-pack/240/react-256.png'}/>
                </div>
            </div>
        </div>
    );
};
