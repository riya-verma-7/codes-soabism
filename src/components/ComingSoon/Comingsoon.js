import React , {useState} from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import "./stylepuzzle.css"
import Navbar2 from '../Navbar2';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';




const Comingsoon = () => {

  const data={
    "java":{
  title:"Java",
  img:'https://i.postimg.cc/zXMMdBsG/33-b.png'
    },
    "python":{
      title:"Python",
      img:'https://i.postimg.cc/66LSQkh0/python.png'
    },
    "react":{
      title:"React.js",
      img:'https://i.postimg.cc/RFqNVWqH/1-9-MECPZ5w-UPS08-IWMcq-JKi-A.png'
    },
    "webdev":{
      title:"Full Stack Web Development",
      img:'https://i.postimg.cc/MKMnVf6Z/webdevv.jpg'
    },
    "js":{
      title:"Javascript",
      img:'https://i.postimg.cc/G2Bmn6SP/javascript-Puzzle2.png'
    },
    "html":{
      title:"HTML",
      img:'https://i.postimg.cc/sgSdYsGZ/pengertian-html.jpg'
    },
  }

  const {id} =useParams();
  

const [text ,setText]=useState('Unpuzzle the pieces!!');

const set=()=>{
setText("Congratulations!!")
}

  return <>
<Navbar2></Navbar2>
<div className=" tag " >
            <h3 className="line-1 anim-typewriter ">{data[id].title} tutorials coming soon ...</h3>
            <h5 className="line-1 anim-typewriter ">{text}</h5>
           
        </div>





      <JigsawPuzzle
  imageSrc={data[id].img}
  rows={3}
  columns={3}
  onSolved={set}
  className="jigsaw-puzzle"

/>

 

  </>;
};

export default Comingsoon;
