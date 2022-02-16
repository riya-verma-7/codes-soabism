import React from 'react';
import "./Projects.js"
import Navbar2 from '../Navbar2';
import Cards from '../Layouts/Cards';
import {
    Link
} from 'react-router-dom';
import projects from './project.js';
import AnimatedPage from '../AnimatedPage.js';

const Projects = () => {
    return <>
        <AnimatedPage >

        <Navbar2/>
        <div className = "tagPlaylist mt-5 " >
        <h3 
    className = "line-1 anim-typewriter " >
        Build Practical Programming Projects
         </h3> 
          </div>  
          <div className = "row  justify-content-evenly pb-1 pb-3 text-center  " >

        {
            projects.map(({ id, img, videoTitle, description, link }) => (


                    <div className = "col-lg-4 col-sm-6 p-3 "
                    style = {
                        { width: "25rem" }
                    }
                    key = { id } >
                    <Cards>
                    <
                    img className = "card-img-top "
                    src = { img }
                    alt = "Card image cap " / >
                    <h5 className = 'mt-3' style = {
        { fontWeight: "1rem " } } > { videoTitle } </h5>
                     <p style={{fontSize:"1rem"}}> { description } </p>
                     <Link to = { link } >
                    <button className = 'rbtn' > Watch now 
                    </button> 
                    </Link> 
                    </Cards> 
                     </div>

                )

            )
        } </div>




    </AnimatedPage> 
    </>;
};

export default Projects;