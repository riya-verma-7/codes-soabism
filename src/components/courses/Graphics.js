import React from 'react';
import graphicsData from './graphicsData';
import graphicsplaylist from './graphicsplaylist';
import AnimatedPage from '../AnimatedPage';
import Navbar2 from '../Navbar2';
import { Link, NavLink } from 'react-router-dom';
import Card from '../Layouts/Cards';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import "../style.css"
const Graphics = () => {

    const {id}=useParams();
    console.log(id);


 
  return <>
  <AnimatedPage>
  <Navbar2/>
  <div className="tagPlaylist mb-3">
            <h3 style={{fontWeight: "200px "}} className="line-1 anim-typewriter ">Graphics Programming in C </h3>
        </div>
  <div className='row'>
  <div className="col-md-7">

  <h5 className='taglist mb-2'>{graphicsData[id].title}</h5>
  <div className=" vplaylist mt-4">
<div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${graphicsData[id].embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
</div>
  </div>

<div className='col-md-4 col-sm-12  end'>
<div className="row p-3">
<div>
<h4 className='taglist'>Course Content</h4>
</div>


<div className=" list scrollbar ">
    <ul>
    { graphicsplaylist.map(({id,url,title})=>(

        <li key={id} className="coursePlaylist">
         <Card className="activeCard">
         <NavLink activeClassName='activeVideo' to={`/courses/graphics-${url}`}>{title}</NavLink>
         </Card>
        </li>
    
    ))
    }
    </ul>
    </div>

  </div>
  </div>
  </div>


  <div className='test'>
  <hr className='mb-4 ' />
  <h4 className='taglist'>Source Code & Notes</h4>
  <div>
  <div className='downloadBtn'>
      <Link to={{pathname:graphicsData[id].codeUrl}} target ="__blank"download>
      <button className='dbtn'> Download Source Code  <i className="bi bi-download"></i> 
       </button>
      </Link>
      </div>
</div>

  </div>

 


 

      </AnimatedPage>
  </>;
};

export default Graphics;
