import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Study.css';

function Study(props) {
    const [timePassed, setTimePassed] = useState({
        years: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    } );

    const {course, entity, initDate, endDate} = props;

    const calculateTimePassed = () => {
        let today = new Date();
        let difference =  today.getTime() - initDate.getTime();
      
        let timePassed = {};

        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        difference -= years * (1000 * 60 * 60 * 24 * 365);
        const days =  Math.floor(difference / (1000 * 60 * 60 * 24)) % 365;
        difference -= days * (1000 * 60 * 60 * 24);
        const hours =  Math.floor((difference / (1000 * 60 * 60)) % 24);
        difference -= hours * (1000 * 60 * 60);
        const minutes =  Math.floor((difference / (1000 * 60)) % 60);
        difference -= minutes* (1000 * 60);
        const seconds =  Math.floor((difference / (1000))%60);
      
        timePassed = {
            years,
            days,
            hours,
            minutes,
            seconds
        }  

        setTimePassed(timePassed);
    }

    setInterval(() => {
        calculateTimePassed();
        console.log(timePassed);
    }, 1000);


    return (
        <div className='study'>
            <b>{course}</b><br/>
            {entity} <br/>
            {initDate.toDateString()} to {endDate.toDateString()} <br/>
            ({timePassed.years} years {timePassed.days} days {timePassed.hours} hours {timePassed.minutes} minutes {timePassed.seconds} seconds)
        </div>
    );
}

export default Study;
