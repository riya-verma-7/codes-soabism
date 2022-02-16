import React, { Children } from 'react';
import Card from '../Layouts/Cards';
import Video from '../Layouts/Video';

import { useParams } from 'react-router-dom';
import Navbar2 from '../Navbar2';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { recommendations } from './Recommendation';
import { Link } from 'react-router-dom';



const RecommendV1 = ({topic,embedId,code,codeurl,code2,codeurl2}) => {
  
  return <>
  <Navbar2/>
 

 <div className=" tag" >
            <h3 style={{fontWeight: "200px "}}className="line-1 anim-typewriter ">{topic}</h3>
        </div>
 
<div className=" vlayout">
<div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
</div>

{(code)?
<div>
<div className='test'>
  <hr className='mb-4 ' />
  <h4  className='taglist'>Source Code & Notes</h4>
  </div>
<div className='sourceCode mt-4'>
  <iframe frameborder="0" width="100%" height="500px" src={`https://replit.com/@Sauravraj4/${code}?lite=true`} ></iframe>
</div>
  </div> : null
}
{(codeurl)?
  <div className='downloadBtn'>
      <Link to={{pathname:codeurl}} target ="__blank" download="calculator">
      <button className='dbtn'> Download Source Code  <i class="bi bi-download"></i> 
       </button>
      </Link>
      </div> :null 
}
{(code2)?
<>
<div className='sourceCode mt-4'>
  <iframe frameborder="0" width="100%" height="500px" src={`https://replit.com/@Sauravraj4/${code2}?lite=true`} ></iframe>
  </div>
  <div className='downloadBtn'>
      <Link to={{pathname:codeurl2}} target ="__blank"download>
      <button className='dbtn'> Download Source Code  <i className="bi bi-download"></i> 
       </button>
      </Link>
      </div>

</> : null}



  </>

};

export default RecommendV1;
