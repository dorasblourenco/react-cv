import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DarkModeButton from './DarkModeButton';

function Header(props) {

    const {darkMode, onChangeMode} = props;

    let divClass = darkMode ? 'header-dark' : 'header-light';

    return (
        <div className={divClass}>
            {props.children}
            <DarkModeButton darkMode={darkMode} onChangeMode={() => onChangeMode()}/>
        </div>
    );
}

export default Header;
