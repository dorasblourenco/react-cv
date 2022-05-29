import React, {useState} from 'react';
import './SideInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SideInfoElement from './SideInfoElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SideInfo(props) {

    const {darkMode} = props;

    let divClass = darkMode ? 'side-info-dark' : 'side-info-light';

    const elements = [
        {
            title: 'Name',
            body: 'Dora Sodia Bernardes Lourenço'
        },
        {
            title: 'Professional experience',
            body: '9 months'
        },
        {
            title: 'Full address',
            body: 'Rua do Cruzeiro N18, Casconho, 3130-520, Soure - Coimbra'
        },
        {
            title: 'Mobile Phone',
            body: '936007980'
        },
        {
            title: 'Email',
            body: 'dorasblourenco@outlook.pt'
        },
        {
            title: 'Linkedin',
            body: 'linkedin.com/in/doralourenco132788137'
        }
    ]
    
    return (
        <div className={divClass}>
            <h3>Details</h3>
            {elements.map((element) => {
                return(
                    <SideInfoElement title={element.title} body={element.body}/>
                )
            })}
        </div>
    );
}

export default SideInfo;
