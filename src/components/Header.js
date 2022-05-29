import React, {useState} from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DarkModeButton from './DarkModeButton';

function Header(props) {

    const {darkMode, onChangeMode} = props;

    let divClass = darkMode ? 'header-dark' : 'header-light';

    return (
        <div className={divClass}>
            <div className='row'>
                <div className='col-md-1 float-end'>
                    <DarkModeButton darkMode={darkMode} onChangeMode={() => onChangeMode()}/>
                </div>
            </div>           
        </div>
    );
}

export default Header;
