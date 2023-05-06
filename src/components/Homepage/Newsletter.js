
import '../style.css';
import React ,{useState}  from 'react';
import axios from 'axios' ;



const Results=()=>{
    return <>


    <div className="alert alert-warning  mt-3" role="alert">
  <strong>Congratulations!</strong> You have successfully subscribed to our newsletter. 
 
</div>
    </>
}

// const baseUrl="https://soabism-server.herokuapp.com/";
// const baseUrl="http://localhost:5000/";
const baseUrl="https://soabism-server.onrender.com/";



const Newsletter = () => {

    

   
    const [ user, setUser] = useState({
        fName:"",
        lName:"",
        email:""
    })

    const [showResults, setShowResults] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
        const newsletter=()=>{
            const { fName,lName,email } = user
        if( fName && lName && email ){
            axios.post(baseUrl, user)
            .then((res) => {
                console.log("Success")
                console.log(user);
                setShowResults(true)
            })
        } else {
            console.log("Invalid")
        }
        
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({
            fName:"",
            lName:"",
            email:""
            
        })
       
        setShowResults(true)
        setTimeout((showResults=false)=>{
setShowResults(showResults)
        },3000)
    }


  return <>
        <h1 className="text-center pb-3 projtitle mt-2"> Get Started <i className="bi bi-skip-start-btn"></i></h1>
    <div className="row justify-content-evenly p-3 pb-5  " style={{backgroundColor: '#f1f1f1'}}>
        <div className="col-md-7 pt-3" style={{textAlign: 'left'}}>

            <h3 className="mt-3 mb-3">Sign up to our Newsletter for latest updates.</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">First name</label>
                    <input type="text" name="fName" className="form-control" id="name" aria-describedby="emailHelp"
                        autoComplete="off" autoCapitalize="on" value={user.fName} onChange={handleChange} required/>

                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Last name</label>
                    <input type="text" name="lName" className="form-control" id="name" aria-describedby="emailHelp"
                        autoComplete="off" autoCapitalize="on" value={user.lName} onChange={handleChange} required/>

                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" autoComplete="off" value={user.email} onChange={handleChange} required/>
                    <div id="emailHelp" className="form-text">We'll never share your info with anyone else.</div>
                </div>

                <button onClick={newsletter} type="submit" className="btn btn-newsletter">Sign me up! </button>
                { showResults ? <Results /> : null }
                <div id="emailHelp" className="form-text">We'll send you all the notifications from codes.soabism.</div>


            </form>
        </div>
        <div className="col-md-3 pt-3" style={{textAlign: 'left'}}>
            <img src="https://i.postimg.cc/gk6zSh4J/4.jpg" alt="subscribe" className="img-fluid pt-5"/>

        </div>

    </div>
  </>;
};

export default Newsletter;
