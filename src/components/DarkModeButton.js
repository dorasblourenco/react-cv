import React, {useState} from 'react';
import './DarkModeButton.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function DarkModeButton(props) {

    const {darkMode, onChangeMode} = props;

    let classColorBtn = 'button ' + (darkMode ? 'button-dark' : 'button-light');

    return (
        <button onClick={onChangeMode} className={classColorBtn}> 
        {!darkMode && 'Dark Mode'}
        {darkMode && 'Light Mode'}
        </button>
    );
}

export default DarkModeButton;
