import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Skill.css'

function Skill(props) {

    const {darkMode, skill, level} = props;

    const basePercentage = 20;
    const barWidth = (basePercentage * level) + '%';

    let progressClass = 'progress-bar ' + (darkMode ? 'progress-dark' : 'progress-light');

    return (
        <div className='col-md-4 col-sm-6 skill' data-bs-toggle="tooltip" data-bs-placement="top" title={'Level: ' + level}>
            <div className='skill-name'>{skill}</div>
            <div className="progress" style={{height: '2px'}}>
                <div className={progressClass} role="progressbar" style={{width: barWidth}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
}

export default Skill;
