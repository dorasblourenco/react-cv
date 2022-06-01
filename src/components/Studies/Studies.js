import React, {useState} from 'react';
// import './Section.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DarkModeButton from '../DarkModeButton';
import Study from './Study';

function Studies(props) {

    // const {darkMode, onChangeMode, title, body} = props;

    const studies = [
        {
            id: Math.random(),
            course: 'Daily English Formation Course, Post - Intermediate Level II',
            entity: 'Faculty of Letters of Coimbra, University of Coimbra',
            initDate: new Date('2020-01-01'),
            endDate: new Date('2020-06-01')
        },
        {
            id: Math.random(),
            course: 'Daily English Formation Course, Post - Intermediate Level I',
            entity: 'Faculty of Letters of Coimbra, University of Coimbra',
            initDate: new Date('2019-09-01'),
            endDate: new Date('2019-12-01')
        },
        {
            id: Math.random(),
            course: 'Integrated Master in Electrical and Computer Engineering',
            entity: 'Faculty of Cience and Technology of Coimbra, University of Coimbra',
            initDate: new Date('2014-09-01'),
            endDate: new Date('2020-12-01')
        }
    ];
    
    return (
        <div>
            {studies.map((study) => {
                return(
                    <Study course={study.course} entity={study.entity} initDate={study.initDate} endDate={study.endDate} key={study.id}/>
                );
            })}      
        </div>
    );
}

export default Studies;
