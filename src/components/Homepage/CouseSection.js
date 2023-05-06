import React from 'react';
import "../style.css"

import { Link } from 'react-router-dom';
const CourseSection = () => {
  return <>
        <h1 className="text-center pb-3 pt-2 projtitle mt-2 mb-2">Start Learning <i className="bi bi-book"></i></h1>
    <div className="row d-flex justify-content-md-center p-3 pb-5  " style={{backgroundColor: '#f1f1f1'}}>
        <div className="col-md-3 pt-3  " >

            <h1 className="mt-4 mb-3  coursesec ">Learn <br/>Programming <br/>from scratch </h1>
         
        </div>
        <div className='col-md-3 col-sm-12 mt-3 coursep '>
<p>Do you want to get your hands on programming but have no prior experience? Then you've come to the right place. Take a series of comprehensive courses designed for absolute beginners at codes.soabism and begin your journey towards programming. Explore lessons with source code and notes, do exercises, and create real-world projects with codes.soabism .  </p>
        </div>

<div className="col-12 text-center mt-3">

<Link to ="/courses" >
       <button className='btn btnCourseSection'>Explore Courses</button>

</Link>

</div>
    </div>
    <hr className='mt-5'/>
  </>;
};

export default CourseSection;
