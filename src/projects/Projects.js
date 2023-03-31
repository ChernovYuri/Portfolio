import React from 'react';
import s from './Projects.module.scss'
import sc from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";

export const Projects = () => {
    return (
        <div className={s.projectsBlock} id={'projectsBlock'}>
            <div className={`${sc.container} ${s.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={s.projects}>
                    <Project title={'Todolist'}
                             description={'My life my rules ,my style my attitude ,you love me or hate me I don\'t care'}
                             img={'https://raw.githubusercontent.com/TuanPham303/smart-TODO-List/development/docs/main.jpeg'}
                             alt={'Todolist Site'}
                             techs={['React', 'Redux', 'TypeScript', 'CSS']}/>
                    <Project title={'Social Network'}
                             description={'My life my rules ,my style my attitude ,you love me or hate me I don\'t care'}
                             img={'https://st.weblancer.net/download/3187469_935xp.png'}
                             alt={'Social Network Site'}
                             techs={['React', 'Redux', 'CSS']}/>
                </div>
            </div>
        </div>
    );
};
