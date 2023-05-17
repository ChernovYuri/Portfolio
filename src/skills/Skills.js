import React from 'react';
import s from './Skills.module.scss'
import sc from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import jsIcon from '.././assets/icons/jsIcon256.png'
import tsIcon from '.././assets/icons/tsIcon256.png'
import cssIcon from '.././assets/icons/css3Icon256.png'
import reduxIcon from '.././assets/icons/reduxIcon256.png'
import storybookIcon from '.././assets/icons/storybookIcon256.png'
import reactIcon from '.././assets/icons/react-256.png'


export const Skills = () => {
    return (
        <div className={s.skillsBlock} id={'skillsBlock'}>
            <div className={`${sc.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    {/*
                    <Skill title={'React'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'} icon={'https://cdn3.iconfinder.com/data/icons/brands-pack/240/react-256.png'}/>
                    <Skill title={'Redux'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'} icon={'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-256.png'}/>
                    <Skill title={'TypeScript'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'} icon={'https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-3/15/typescript-256.png'}/>
                    <Skill title={'JavaScript'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'} icon={'https://cdn3.iconfinder.com/data/icons/brands-pack/240/js-256.png'}/>
                    <Skill title={'CSS'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'} icon={'https://cdn4.iconfinder.com/data/icons/blackicon/54/css3_icon-1024.png'}/>
                    <Skill title={'Storybook'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'} icon={'https://www.svgrepo.com/show/306805/storybook.svg'}/>
                    */}
                    <Skill title={'React'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'}
                           icon={reactIcon} techs={['Router dom', 'Formik']}/>
                    <Skill title={'Redux'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'}
                           icon={reduxIcon} techs={['Thunk', 'Toolkit']}/>
                    <Skill title={'TypeScript'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'}
                           icon={tsIcon} techs={['']}/>
                    <Skill title={'JavaScript'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'}
                           icon={jsIcon} techs={['Rest API', 'Axios']}/>
                    <Skill title={'CSS'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'}
                           icon={cssIcon} techs={['SCSS', 'SASS', 'MUI']}/>
                    <Skill title={'Storybook'} description={'My life my rules, my style my attitude, you love me or hate me I don\'t care'}
                           icon={storybookIcon} techs={['']}/>
                </div>
            </div>
        </div>
    );
};
