import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import TimePassed from '../TimePassed';
import './Study.css';

function Study(props) {
   
    const {course, entity, initDate, endDate} = props;

    return (
        <div className='study'>
            <b>{course}</b><br/>
            {entity} <br/>
            {initDate.toDateString()} to {endDate.toDateString()} <br/>
            <TimePassed date={initDate} />
        </div>
    );
}

export default Study;
