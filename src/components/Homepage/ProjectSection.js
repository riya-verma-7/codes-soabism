import React from 'react';
// import "../style.css"
import { Link } from 'react-router-dom';


const ProjectSection = () => {
  
  return <>
        <h1 className="text-center pb-3 pt-2 projtitle mt-2 mb-2">Hands on Projects <i className="bi bi-file-earmark-ppt"></i></h1>
    <div className="row d-flex justify-content-md-center p-3 pb-5  " style={{backgroundColor: '#f1f1f1'}}>
        <div className="col-md-3 pt-3  " >

            <h1 className="mt-4 mb-3 coursesec  ">Practical Programming <br/>Projects </h1>
         
        </div>
        <div className='col-md-3 mt-3 coursep '>
<p>Every new programmer sooner or later finds themselves wondering, OK, I can read and write code, and I can solve small problems, but how do I create real-world applications? Don't worry, codes.soabism got your back. Our practical programming projects offer you a seamless transition from beginning coding scripts to building advanced software applications. </p>
        </div>

<div className="col-12 text-center mt-3">

<Link to="/projects">

       <button className='btn btnCourseSection'>Explore Projects</button>
</Link>
</div>
    </div>

    <hr id ="faq" className='mt-5'/>
  </>;
};

export default ProjectSection;
