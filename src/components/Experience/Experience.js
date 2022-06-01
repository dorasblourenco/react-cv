import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Work from './Work';

function Experience(props) {
   
    const works = [
        {
            id: Math.random(),
            workFunction: 'Full Stack Web Developer (Internship)',
            technologies: 'PHP, Code Igniter 3, Javascript, jQuery, HTML, CSS, Bootstrap, Python, Fillezilla, Sourcetree, Postman, XAMPP, MySQL, MySQL Workbench, Git, Sourcetree',
            entity: '5 Elements Technology',
            responsabilities: [
                'Develop responsive web applications for specific clients, using MVC architecture and Code Igniter 3;',
                'Migration of an online shop from PHC management software to SAP;',
                'Use Postman to test communicate with an API, fetching webstore products and machines sensors informations;'
            ],
            initDate: new Date('2021-09-01'),
            endDate: new Date('2020-05-31')
        }
    ];

    return (
        <div>
            {works.map((work) => {
                return(
                    <Work workFunction={work.workFunction} entity={work.entity} technologies={work.technologies} responsabilities={work.responsabilities} initDate={work.initDate} endDate={work.endDate} key={work.id}/>
                );
            })} 
        </div>
    );
}

export default Experience;
