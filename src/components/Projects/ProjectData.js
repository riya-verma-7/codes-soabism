import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import Navbar2 from '../Navbar2';
import AnimatedPage from '../AnimatedPage';

const ProjectData = () => {
    const {id}=useParams();

    console.log(id);
   
    const data={
        "1":{
            title:" Scientific Calculatorin C++",
            embedId:"DymllbLwsXk",
            code:'',
            codeurl:'https://drive.google.com/uc?id=17LGetuvn4e8cmOal8-Umxq2Yh1we1q9j&export=download'
        },
        "2":{
            title:"Stone Paper Scissors",
            embedId:"O_CS0C1rs9s",
            code:'75',
            code2:'75b',
            codeurl:'https://drive.google.com/file/d/1ushiD3_pVqilJ-uKtW8CMq4h1wSkmoKp/view?usp=sharing',
            codeUrl2:'https://drive.google.com/file/d/1Q0QDlHrkbH5YbIeQmk5aWwKJnOK-m7lE/view?usp=sharing'

        },
        "3":{
            title:"Scientific Calculator - C",
            embedId:'GAdOH9DNRXs',
            code:'',
            codeurl:'https://drive.google.com/u/0/uc?id=1IMyu1w2gjWo7sL0Nm_a5j-E475BHpN6M&export=download'
        },
        "4":{
            title:"Tower of Hanoi",
            embedId:"xLnipTjTS4w",
            code:'94',
            codeurl:'https://drive.google.com/file/d/1UPOtd6icyndk1qYSXMDND3O8RtNakpZG/view?usp=sharing'
        },
        "5":{
            title:"Character Counter",
            embedId:"DcX6XvtEUV0",
            code:'98',
            codeurl:'https://drive.google.com/file/d/1cRQ0erdLRcFXKnAShfOq8aFAgbq_jhNR/view?usp=sharing'
        },
        "6":{
            title:" Making a scenery using a rainbow in C graphics | A man walking in the rain ",
            embedId:"HlRK296wmjk",
            code:'',
            codeurl:'https://drive.google.com/file/d/1A07rZrRuPQ07Vg8MI8DWgYJH3ROpMGMZ/view?usp=sharing'
        },
        "7":{
            title:"Making a hut by using c graphics",
            embedId:"Xals7TTCXcs",
            code:'',
            codeurl:'https://drive.google.com/file/d/1ByIojLobaxw5sl9-aCE3V6uq08Ciq6gs/view?usp=sharing'
        },
        "8":{
            title:"Student Record Management System",
            embedId:"3BRlxNSCWPU",
            code:'77',
            codeurl:'https://drive.google.com/file/d/1fjrbe2Bl1h2hB_8WNnSOhYX6NRHDWS05/view?usp=sharing'
        },
        "9":{
            title:"Making a rainbow in C graphics ",
            embedId:"4-s2xXMjlVo",
            code:'',
            codeurl:'https://drive.google.com/file/d/1fWIrkKM9Z6aUHmeYIXv4R82FjtdS9fN1/view?usp=sharing'
        }
    }
  return <>
<AnimatedPage>

  <Navbar2/>
 

 <div className=" tag" >
            <h3 className="line-1 anim-typewriter ">{data[id].title}</h3>
        </div>
 
<div className=" vlayout">
<div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${data[id].embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
</div>

<div className='test'>
  <hr className='mb-4 ' />
  <h4  className='taglist'>Source Code & Notes</h4>
<div>
{(data[id].code)?
<div className='sourceCode mt-4'>
  <iframe frameborder="0" width="100%" height="500px" src={`https://replit.com/@Sauravraj4/${data[id].code}?lite=true`} ></iframe>
  </div> : null
}
  <div className='downloadBtn'>
      <Link to={{pathname:data[id].codeUrl}} target ="__blank" download="calculator">
      <button className='dbtn'> Download Source Code  <i class="bi bi-download"></i> 
       </button>
      </Link>
      </div>
</div>
</div> 

{(data[id].code2)?
<>
<div className='sourceCode mt-4'>
  <iframe frameborder="0" width="100%" height="500px" src={`https://replit.com/@Sauravraj4/${data[id].code2}?lite=true`} ></iframe>
  </div>
  <div className='downloadBtn'>
      <Link to={{pathname:data[id].codeUrl2}} target ="__blank"download>
      <button className='dbtn'> Download Source Code  <i className="bi bi-download"></i> 
       </button>
      </Link>
      </div>

</> : null}





</AnimatedPage>
  </>;
};


 

export default ProjectData;
