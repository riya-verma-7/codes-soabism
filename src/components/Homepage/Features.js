import React from 'react';
import "../style.css"
const Features = () => {
  return <>
       <div className="row justify-content-evenly pt-3 pb-3 text-center ">
        <div className="col-md-3 mt-4 ">
            <i className="bi bi-code-square " style={{color: "rgb(66, 116, 163)", fontSize: "2.5rem"}} ></i>
            <h4>Made for Students</h4>
            <p className="p-2 ">The videos are intended for students interested in Computer Science. All courses are beginner-friendly. Modern programming techniques are taught in the videos. You can watch them all for free.
            </p>
        </div>
        <div className="col-md-3 mt-4 ">
            <i className="bi bi-book-fill " style={{color: "rgb(99, 143, 58)",fontSize: "2.5rem "}}></i>
            <h4>Join the IT community</h4>
            <p className="p-2 ">Many students are concerned about the fact that they are not from the IT (Information Technology) field. You can learn to code and get a job regardless of the domain you currently work in, so don't wait. Get started now.
            </p>
        </div>
        <div className="col-md-3 mt-4 ">
            <i className="bi bi-clipboard-data " style={{color: "rgb(233, 110, 79)", fontSize: "2.5rem"}}></i>
            <h4>Become a developer</h4>
            <p className="p-2 ">Get the core knowledge of programming from the videos. Become proficient at writing clean code and maintaining it. Develop programming logic and problem-solving skills. You can learn to build apps and games with coding.
            </p>
        </div>
    </div>
    <hr ></hr>
  </>;
};

export default Features;
