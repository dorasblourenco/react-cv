import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Skill from './Skill';
import './SkillsType.css'

function SkillsType(props) {

    const {darkMode, type} = props;
   
    const skills = [
        {
            skill: 'JavaScript',
            level: 4,
            type: 'Programming Languages'
        },
        {
            skill: 'jQuery',
            level: 4,
            type: 'Programming Languages'
        },
        {
            skill: 'C/C++',
            level: 2,
            type: 'Programming Languages'
        },
        {
            skill: 'SQL',
            level: 4,
            type: 'Programming Languages'
        },
        {
            skill: 'HTML5',
            level: 4,
            type: 'Programming Languages'
        },
        {
            skill: 'CSS',
            level: 4,
            type: 'Programming Languages'
        },
        {
            skill: 'Python',
            level: 4,
            type: 'Programming Languages'
        },
        {
            skill: 'PHP7',
            level: 4,
            type: 'Programming Languages'
        },
        {
            skill: 'NetBeans',
            level: 4,
            type: 'Development Environments (IDEs)'
        },
        {
            skill: 'Microsoft Visual Studio Code',
            level: 4,
            type: 'Development Environments (IDEs)'
        },
        {
            skill: 'Geany',
            level: 1,
            type: 'Development Environments (IDEs)'
        },
        {
            skill: 'PyCharm',
            level: 4,
            type: 'Development Environments (IDEs)'
        },
        {
            skill: 'MPLAB X IDE',
            level: 1,
            type: 'Development Environments (IDEs)'
        },
        {
            skill: 'Windows',
            level: 4,
            type: 'Operating Systems'
        },
        {
            skill: 'Linux',
            level: 2,
            type: 'Operating Systems'
        },
        {
            skill: 'React.js',
            level: 1,
            type: 'Development Frameworks'
        },
        {
            skill: 'Code Igniter',
            level: 4,
            type: 'Development Frameworks'
        },
        {
            skill: 'ROS',
            level: 3,
            type: 'Development Frameworks'
        },
        {
            skill: 'Bootstrap',
            level: 4,
            type: 'Software Libraries'
        },
        {
            skill: 'Microsoft Office',
            level: 2,
            type: 'Software Tools'
        },
        {
            skill: 'Trello',
            level: 2,
            type: 'Software Tools'
        },
        {
            skill: 'Overleaf',
            level: 2,
            type: 'Software Tools'
        },
        {
            skill: 'Filezilla',
            level: 4,
            type: 'Software Tools'
        },
        {
            skill: 'Slack',
            level: 2,
            type: 'Software Tools'
        },
        {
            skill: 'Postman',
            level: 4,
            type: 'Software Tools'
        },
        {
            skill: 'Git, Sourcetree',
            level: 4,
            type: 'Software Tools'
        },
        {
            skill: 'Chrome DevTools',
            level: 4,
            type: 'Software Tools'
        },
        {
            skill: 'XAMPP',
            level: 4,
            type: 'Software Tools'
        },
        {
            skill: 'Matlab',
            level: 2,
            type: 'Software Tools'
        },
        {
            skill: 'MySQL Workbench',
            level: 4,
            type: 'Software Tools'
        },
    ];

    const typeSkills = skills.filter(skill => skill.type === type);

    return (
        <div className='skill-type'>
            <h4>{type}</h4>
            <div className='row'>
                {typeSkills.map((skill) => {
                    return(
                        // 'x'
                        <Skill darkMode={darkMode} skill={skill.skill} level={skill.level} />
                    );
                })} 
            </div>
        </div>
    );
}

export default SkillsType;
