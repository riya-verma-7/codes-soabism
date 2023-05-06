import React from 'react';
import "./about.css"
import Navbar2 from '../Navbar2';
import AnimatedPage from '../AnimatedPage';
const About = () => {
  return <>
  <AnimatedPage>

     <body style={{backgroundColor: "#f1f1f1"}}>
<Navbar2></Navbar2>

<div id="carouselExampleFade" className="carousel slide " data-bs-ride="carousel" >
        <div className="carousel-inner">

            <div className="carousel-item active ">
               

                    <img src=" https://i.postimg.cc/jjvkVQQj/codes-soabism-5.png" className="d-block w-100" alt="..."/>
                
                <a href="https://www.youtube.com/channel/UCiQhMPGMvCbBSre4NbZTHIg?sub_confirmation=1"  target="__blank" title="Open in Youtube">

               
                </a>
            </div>
            <div className="carousel-item  ">
                <a href="https://www.youtube.com/playlist?list=PL5w7L_xR0pu0JxI3W8lWPfxqX7YB5PDr2" target="__blank" title="Open in Youtube">
                    <img src="https://i.postimg.cc/dQL4pwyr/Saurav-Raj-2.png" className="d-block w-100" alt="..."/>
                </a>

            </div>
            
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

{/* <!-- vision --> */}
{/* https://i.postimg.cc/7LwT1Zq7/codes-soabism-2.png */}
{/* https://i.postimg.cc/dQL4pwyr/Saurav-Raj-2.png */}

<div className="container p-3 pb-5 about-ceo mb-5 mt-5">
  <div className="row" style={{ justifyContent: "space-around" }}>
    <div
      className="col-md-8 about-item p-3"
      style={{ paddingLeft: "150px" }}
    >
      <h1 className="ceo-heading  mb-3 " style={{ fontSize: "4rem" }}>
        About the Initiative <i class="bi bi-lightbulb"></i>
      </h1>
      <p className="">
      Greetings Coders, I am <strong>Saurav Raj</strong>, a Computer Science Enthusiast trying to help students through my initiative, <strong>codes.soabism.</strong>. As a passionate teacher and mentor, I love to help students learn how to code. The learning process of coding was challenging for me as a beginner. To study I had to seek out multiple resources.  So, I decided to create a full-length course covering all of the topics.
      </p>
      <p className=" ceo-para2">
      Indian students tend to understand concepts better in their native language, so most of the videos on this channel are in HINDI. However, the important definitions or elements are described in English. This is because English is the root of many high-level languages such as Python, Java, C++, or Javascript.
        </p>
        <p>
        The courses on the channel are designed for absolute beginners to learn everything from scratch. Students with no prior knowledge will be able to start with the basics and then move on to more advanced topics. The topics are simplified by using real life analogies. 
        </p>

        <p className="ceo-para2">
        All the codes written in the videos are listed in the description, as well as a list of the websites referred to in the notes. The content is curated from the best websites and documentation available online. You can follow along with the lectures and take notes.
        </p>
    </div>
    <div className="col-md-4 about-item  p-3 aman-logo-box pt-5 mt-5">
      <img
        src="https://i.postimg.cc/LXP2zQZk/aboutimg1.png"
        alt=""
        className="aman-logo img-fluid"
      />
    </div>
  </div>
</div>

<div
  className="container-fluid p-3 pb-5 about-ceo mb-5 mt-5"
  style={{ backgroundColor: "white" }}
>
  <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row" style={{ justifyContent: "space-around" }}>
      <div
        className="col-md-8 about-item p-3"
        style={{ paddingLeft: "150px" }}
      >
        <h1 className="ceo-heading  mb-3 " style={{ fontSize: "3rem" }}>
          Why codes.soabism? <i class="bi bi-youtube"></i>
        </h1>
        
        
        <ul>
        <li className="p-3">
        codes.soabism offers a comprehensive set of courses developed after extensive research to provide a deep understanding of all topics. 
        </li>
        <li className="p-3">
        Beginner-friendly and free courses are available.
        </li>
        <li className="p-3">Videos are most often in Hindi to help indian audiences better comprehend the concepts. </li>
        <li className="p-3">
        Topics are explained through analogies from everyday life. 
        </li>
        <li className="p-3">
        A variety of practice questions and practical programming projects are explained in detail here. 
        </li>
        <li className="p-3">
        All the codes written in the videos are listed in the description, as well as a list of the websites referred to in the notes.  
        </li>
      </ul>
      
      </div>
      <div className="col-md-4 about-item  p-3 aman-logo-box pt-5">
        <img
          src="https://i.postimg.cc/GtZDX5Mc/aboutimg2.png"
          alt=""
          className="aman-logo img-fluid"
        />
      </div>
    </div>
  </div>
</div>
<div className="container p-3 pb-5 about-ceo mb-5 mt-5">
  <div className="row" style={{ justifyContent: "space-around" }}>
    <div
      className="col-md-8 about-item p-3"
      style={{ paddingLeft: "150px" }}
    >
      <h1 className="ceo-heading  mb-3 " style={{ fontSize: "4rem" }}>
        Meet our Instructor <i className="bi bi-award"></i>
      </h1>
      <p className="">
      I'm Saurav Raj, a prefinal year Computer Science student at Maharaja Agrasen Institute of Technology. Having a firm grasp of computer fundamentals, I'm a Full Stack Software Developer adept at formulating innovative programming solutions for real-world problems. A passion for teaching drives me to guide others to learn how to code. Besides teaching, I also write technical blogs.
      </p>
      <p className=" ceo-para2">
      As a developer, I'm proficient in C++, HTML, CSS, Bootstrap, Javascript (ES6), MERN stack (MongoDB, Express, React, Node JS). My strong background in Data Structures, Algorithms, and OOPS equips me with strong analytical skills. In addition to being a programmer, I am a JAVA enthusiast. 
      </p>

      <p className="ceo-para2">
      I started this channel because I am passionate about teaching and I wanted to deliver relevant content using real-life examples so that Indian students would understand the content better and not have to face the same problems that I did.  
      </p>
    </div>
    <div className="col-md-4 about-item pt-4 ">
      <div className="aman-logo-box-overlay">
        <img
         
          src="https://i.postimg.cc/G2QBhDdb/saurav.jpg"
          alt=""
          className="aman-logo-overlay img-fluid pt-5 mt-3"
        />
        
      </div>
    </div>
  </div>
</div>

</body>
  </AnimatedPage>
  </>;
};

export default About;
