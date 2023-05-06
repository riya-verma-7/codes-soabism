import React ,{useState,useEffect}  from 'react';
import axios from 'axios' ;

import AnimatedPage from './AnimatedPage';
import Navbar2 from './Navbar2';
import "./styleContact.css"

const baseUrl="https://soabism-server.onrender.com/";

const Results=()=>{
    return <>


    <div className="alert alert-warning " role="alert">
  <strong>Thank you </strong> , your Response has been successfully recorded. 
 
</div>
    </>
}

const Contact = () => {



const [ user, setUser] = useState({
        fullname:"",
        email:"",
        number:"",
        msg:""
    })

    const [showResults, setShowResults] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
        const contact=()=>{
            const { fullname,email,number,msg } = user
        if( fullname && email && msg ){
            axios.post(`${baseUrl}contact`, user)
            .then((res) => {
                console.log("Success")
                setShowResults(true)
            })
        } else {
            console.log("Invalid")
        }
        
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({
            fullname:"",
            email:"",
            number:"",
            msg:""
            
        })

        setShowResults(true)
        setTimeout((showResults=false)=>{
setShowResults(showResults)
        },3000)
    }



  return <>
  <AnimatedPage>

  <Navbar2/>
  { showResults ? <Results /> : null }
      <div className="container contactUs">
		<div className="contact-box">
			<div className="left contactLeft">
                <h3 className='mt-5'>Welcome to codes.soabism</h3>
                <h4 className='mt-2 '>Let's Connect</h4>
                <img src="https://i.postimg.cc/SRBC2k8C/soabism.png" alt="" width="150px"/>
                <p className='m-3'>If you have any queries at all, please feel free to reach out and we'll gladly answer them.Drop in your valuable suggestions and start your journey of coding.</p>
               
                <p>Thanks for visiting codes.soabism</p>

            </div>
			<div className="right contactRight">
				<h2 className='contacth2'>Contact Us</h2>
                <form onSubmit={handleSubmit}>
				<input type="text" name="fullname" value={user.fullname} className="field contactField" onChange={handleChange} placeholder="Enter your Full Name" required/>
				<input type="email" className="field contactField" name="email" value={user.email}  onChange={handleChange}  placeholder="Enter your Email" required/>
				<input type="text" className="field contactField" name="number" value={user.number}  onChange={handleChange}  placeholder="Enter your Phone Number"/>
				<textarea name="msg" value={user.msg}  onChange={handleChange}  placeholder="Suggestions/Queries" className="field contactField contactTextarea" required></textarea>
				<button className="btn contactBtn" type='submit' onClick={contact}>Send</button>
                </form>
			</div>
		</div>
	</div> 
  </AnimatedPage>
  </>
};

export default Contact;
