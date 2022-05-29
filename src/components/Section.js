import React, {useState} from 'react';
import './Section.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DarkModeButton from './DarkModeButton';

function Section(props) {

    const {darkMode, onChangeMode, title, body} = props;

    let divClass = darkMode ? 'section-dark' : 'section-light';
    
    return (
        <div className={divClass}>
            <h2 className='title'>{title}</h2>
            <div>
                {body}
            </div>           
        </div>
    );
}

export default Section;
