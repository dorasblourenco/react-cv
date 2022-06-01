import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import TimePassed from '../TimePassed';
import './Work.css';

function Work(props) {
   
    const {workFunction, entity, initDate, endDate, technologies, responsabilities} = props;

    return (
        <div className='work'>
            <b>{workFunction}</b> - {entity}<br/>
            {initDate.toDateString()} to {endDate.toDateString() + ' '}
            <b> <TimePassed date={initDate} /> </b> <br/>
            <b>Technologies: </b> {technologies} <br/>
            <b>Responsabilities:</b>
            <ul>
                {responsabilities.map(responsability => <li>{responsability}</li>)}
            </ul>
           
            
        </div>
    );
}

export default Work;
