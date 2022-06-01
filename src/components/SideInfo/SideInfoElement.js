import React, {useState} from 'react';
import './SideInfoElement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SideInfoElement(props) {

    const {title, body} = props;
    
    return (
        <p className='element'>
            <b>{title}: </b> {body}
        </p>
    );
}

export default SideInfoElement;
