import React from 'react';
import s from './Projects.module.scss'
import sc from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import SocialWeb from ".././assets/projects/SocialWeb/SocialWeb.png"
import Todolist from ".././assets/projects/Todolist/Todolist.png"

export const Projects = () => {
    return (
        <div className={s.projectsBlock} id={'projectsBlock'}>
            <div className={`${sc.container} ${s.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={s.projects}>
                    <Project title={'Todolist'}
                             description={'My life my rules ,my style my attitude ,you love me or hate me I don\'t care'}
                             img={Todolist}
                             alt={'Todolist Site'}
                             techs={['React', 'Redux', 'TypeScript', 'CSS']}
                             address={'https://chernovyuri.github.io/Todolist/'}
                    />
                    <Project title={'Social Network'}
                             description={'My life my rules ,my style my attitude ,you love me or hate me I don\'t care'}
                             img={SocialWeb}
                             alt={'Social Network Site'}
                             techs={['React', 'Redux', 'CSS']}
                             address={'https://chernovyuri.github.io/Social-Network/'}
                    />
                </div>
            </div>
        </div>
    );
};
