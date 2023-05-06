import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";



import RecommendV1 from "./components/Homepage/RecommendV1";

import Footer from "./components/Footer";

import About from "./components/About/About";
import Homepage from "./components/Homepage/Homepage";


import ScrollToTop from "./components/Layouts/ScrollToTop";

import Contact from "./components/Contact";
import Projects from "./components/Projects/Projects";

import ProjectData from "./components/Projects/ProjectData";
import Spinner from "./components/Layouts/Spinner";

import {useEffect, useState} from "react";

import Courses from "./components/courses/Courses";


import C from "./components/courses/C";
import Cpp from "./components/courses/Cpp";
import Graphics from "./components/courses/Graphics";
import Comingsoon from "./components/ComingSoon/Comingsoon";
function App() {

  // const location=useLocation();
  
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };
      
    loadData();
  }, [])

  if (loading) {
    return <Spinner/>
}else {


  return (

    <>
      <Router>
        <ScrollToTop />
       
        <Switch>
      
          <Route exact path="/" component={Homepage}></Route>

          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
         

          <Route exact path="/introduction" render={(props)=>(
            <RecommendV1  topic='Introduction to codes.soabism-Everything about coding' embedId='U9TpN8LIg5M' 
          />)}></Route>

          <Route exact path="/calculator-c" render={(props)=>(
            <RecommendV1  topic='Creating a Scientific Calculator in C' embedId='GAdOH9DNRXs' code='69' codeurl="https://drive.google.com/file/d/16wS3_MX4z5gdJzwUfa-Z7LeIoSZ2HYor/view?usp=sharing"
          />)}></Route>

          <Route exact path="/stonepaperscissors" render={(props)=>(
            <RecommendV1  topic='Stone Paper Scissors' embedId='O_CS0C1rs9s' code='75' code2='75b' codeurl="https://drive.google.com/file/d/16wS3_MX4z5gdJzwUfa-Z7LeIoSZ2HYor/view?usp=sharing" codeurl2="https://drive.google.com/file/d/1Q0QDlHrkbH5YbIeQmk5aWwKJnOK-m7lE/view?usp=sharing"
          />)}></Route>
        
         <Route exact path="/projects"  component={Projects}/>
         <Route exact path="/projects/:id"  component={ProjectData}/>
        
         <Route exact path="/courses"  component={Courses}/>
         <Route exact path="/courses/c-:id"  component={C}/>
         <Route exact path="/courses/c++-:id"  component={Cpp}/>
         <Route exact path="/courses/graphics-:id"  component={Graphics}/>
        
         <Route exact path="/courses/comingsoon-:id"  component={Comingsoon}/>

         

          
        </Switch>
      
      
        <Footer />
      </Router>
    </>
  );
}

}
export default App;