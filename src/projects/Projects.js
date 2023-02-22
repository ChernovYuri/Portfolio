import React from 'react';
import s from './Projects.module.css'
import sc from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sc.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                    <Project title={'Todolist'} description={'My life my rules ,my style my attitude ,you love me or hate me I don\'t care'} img={'https://raw.githubusercontent.com/TuanPham303/smart-TODO-List/development/docs/main.jpeg'} alt={'Todolist Site'}/>
                    <Project title={'Social Network'} description={'My life my rules ,my style my attitude ,you love me or hate me I don\'t care'} img={'https://st.weblancer.net/download/3187469_935xp.png'} alt={'Social Network Site'}/>
                </div>
            </div>
        </div>
    );
};
