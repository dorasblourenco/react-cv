import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import BarsInfo from './components/BarsInfo';
import Section from './components/Section';
import SideInfo from './components/SideInfo/SideInfo';
import Studies from './components/Studies/Studies';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';

function App() {

  // States
  const [darkMode, setDarkMode] = useState(false);

  // Events
  const onChangeModeHandler = () => {
    setDarkMode(
        (prevState) => {
            return !prevState;
        }
    );       
  }
  
  const bodySections = [
    {
      id: Math.random(),
      title: 'Profile', 
      body: <div><p>My name is Dora Lourenço, I am an Electrical and Computer Engineering master with a big interest in software development,
      more specifically web development. </p> <p>I have 9 months of experience, gained in a professional internship. In my internship I was able to gain experience in HTML,
Javascript, CSS, Bootstrap, PHP, Code Igniter 3, etc. With these technologies I was able to develop responsive websites and
applications</p><p>In addition, I attended a Full Stack Web Development course, done before my internship to consolidate my knowledge in the
technologies that I would use. For my own interest I did a React.js course that allowed me to acquire some knowledge in a
technology that nowadays is so widely used. These courses were done on Udemy.</p><p>I am enthusiastic about learning new technologies, what I may lack in experience I do not lack in will to learn and progress in
my career.</p></div>
    },
    {
      id: Math.random(),
      title: 'Academic Qualifications and Training', 
      body: <Studies/>
    },
    {
      id: Math.random(),
      title: 'Professional Experience', 
      body: <Experience/>
    },
    {
      id: Math.random(),
      title: 'Technical Skills', 
      body: <Skills darkMode={darkMode}/>
    }
  ]

  return (
    <>
      <BarsInfo darkMode={darkMode} onChangeMode={() => onChangeModeHandler()} header={'Dora Sofia Bernardes Lourenço'} />
      <div className='row background'>
        <div className='col-md-3'>
          <SideInfo darkMode={darkMode}/>
        </div>
        <div className='col-md-9'>
        {bodySections.map((section) => {
          return <Section darkMode={darkMode} title={section.title} body={section.body} key={section.id}/>
        })}
        </div>
      </div>
      <BarsInfo darkMode={darkMode} onChangeMode={() => onChangeModeHandler()} />
    </>
  );
}

export default App;
