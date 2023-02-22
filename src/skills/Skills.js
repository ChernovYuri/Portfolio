import React from 'react';
import s from './Skills.module.css'
import sc from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill title={'JavaScript'} description={'My life my rules ,my style my attitude ,you love me or hate me I don\'t care'}/>
                    <Skill title={'CSS'} description={'My life my rules ,my style my attitude ,you love me or hate me I don\'t care'}/>
                    <Skill title={'React'} description={'My life my rules ,my style my attitude ,you love me or hate me I don\'t care'}/>
                </div>
            </div>
        </div>
    );
};
