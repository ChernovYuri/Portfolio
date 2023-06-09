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
                             description={'The task manager app is a user-friendly tool that helps individuals organize tasks. It allows easy creation and tracking of to-do items. It enhances productivity and keeps users focused on their goals.'}
                             img={Todolist}
                             alt={'Todolist Site'}
                             techs={['TypeScript', 'React', 'Redux', 'Redux Toolkit', 'Router-dom', 'Axios', 'MUI', 'Formik', 'CSS']}
                             address={'https://chernovyuri.github.io/Todolist/'}
                    />
                    <Project title={'Social Web'}
                             description={'The social network app allows users to create profiles with personal information and job details. They can share contacts from other social networks and follow other users.'}
                             img={SocialWeb}
                             alt={'Social Network Site'}
                             techs={['React', 'Redux', 'Redux-thunk', 'Router-dom', 'Axios', 'MUI', 'Formik', 'CSS']}
                             address={'https://chernovyuri.github.io/Social-Network/'}
                    />
                </div>
            </div>
        </div>
    );
};
