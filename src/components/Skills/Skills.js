import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SkillsType from './SkillsType';
import Legend from './Legend';
import './Legend.css'

function Skills(props) {

    const {darkMode} = props;
   
    const skillsTypes = [
        'Programming Languages',
        'Development Environments (IDEs)',
        'Operating Systems',
        'Development Frameworks',
        'Software Libraries',
        'Software Tools'
    ];

    return (
        <div>
            <Legend />
            {skillsTypes.map((type) => {
                return(
                    <SkillsType darkMode={darkMode} type={type} />
                );
            })} 
        </div>
    );
}

export default Skills;
