import React from 'react';
import "../style.css"
import Cards from '../Layouts/Cards';

import { Link } from 'react-router-dom';



const recommendations=[
    {
    title:'Everying about coding',
    id:'introduction',
    description:"Let's take a dive into the world of coding, clear our concepts with exercises, and take a look at real-world projects. Become a programming expert! ",
    img:'https://i.postimg.cc/N0kDR07M/recommended-1.png'
},
    {
    title:'Scientific Calculator',
    id:'calculator-c',
    description:'This tutorial helps you learn conditional statements (if/else), loops. With this Scientific Calculator, you can perform simple mathematical computations.   ',
    img:'https://i.postimg.cc/T3LMqKQM/Program-to-find-the-fibonacci-series-61.png'
},
    {
    title:'Stone Paper Scissors',
    id:'stonepaperscissors',
    description:'To start with, the Stone Paper Scissors Game sounds interesting. This will cover random number generation and interacting with users based on their responses.  ',
    img:'https://i.postimg.cc/W1MQzgzq/recommended-3.png'
}
]

const Recommendation = () => {

  
    return < >
    <h1 className="text-center pt-4 projtitle ">Recommended Tutorials <i className="bi bi-kanban-fill "></i> </h1>

    <div className="row justify-content-evenly pt-3 pb-3 text-center ">
    {recommendations.map(({title,id,description,img})=>(
    <div className="col-md-3 " key={id} >
    <Cards>
    <img className="card-img-top " src={img} alt="Card image cap "/>
    <h4 className = 'mt-3' style = {
        { fontWeight: "1rem " } } > { title } </h4>
                     <p style={{fontSize:"1rem"}}> { description } </p>
    <Link to={`/${id}`}>
    <button className='rbtn'>Start Watching</button>
    </Link>
    </Cards>
    </div>
    ))}
   
    </div>
    <hr className=" mt-5" id="faq "/>

   
     </>;
};

export default Recommendation
export {recommendations}