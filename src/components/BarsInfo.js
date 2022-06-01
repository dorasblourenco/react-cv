import React, {useState} from 'react';
import './BarsInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DarkModeButton from './DarkModeButton';

function Header(props) {

    const {darkMode, onChangeMode, header, footer} = props;

    let divClass = darkMode ? 'header-dark' : 'header-light';

    return (
        <div className={divClass}>
            <div className='info-position'>
                <div className='row'>
                    <div className='col-md-1 '>
                        <DarkModeButton darkMode={darkMode} onChangeMode={() => onChangeMode()}/>
                    </div>
                    <div className="col-md-11 text-end additional-info">
                        {header && <h3>{header}</h3>}
                        {footer && footer}
                    </div>
                </div>               
            </div>           
        </div>
    );
}

export default Header;
