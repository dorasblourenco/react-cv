import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {QuestionCircle} from 'react-bootstrap-icons';

function Legend(props) {
   
    const legends = [
        {
            level: 1,
            description: 'Beginner (Academic/Training Only)'
        },
        {
            level: 2,
            description: 'Intermediate (Small projects or Internships)'
        },
        {
            level: 3,
            description: 'Advanced'
        },
        {
            level: 4,
            description: 'Professional Experience'
        },
        {
            level: 5,
            description: 'Expert'
        }
    ]

    return (
        <div className='text-center legends-box'>
            <h5 data-bs-toggle="tooltip" data-bs-placement="top" title="To view the level of each technology just pass the mouse over each one and a tooltip will appear with that information.">Legend <QuestionCircle  /> </h5>
            <div className=''>
                {legends.map((legend, key) => (
                    <div className='legend'>
                        <b className='legend-title'>Level {legend.level}: </b> {legend.description}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Legend;
