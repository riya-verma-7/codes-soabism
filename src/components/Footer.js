import React from 'react';
import { NavLink } from 'react-router-dom';

import "./style.css"
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return <>

<div className="container-fluid footer  mt-2 bg-dark text-white pt-2 pb-2">
                <div className="container">
                    <div className="row justify-content-evenly ">
     {/* <div className="row justify-content-center mt-2 bg-dark text-white pt-2 pb-2"> */}

<div className="col-md-5 text-center  about-channel  " style={{color: '#a1a3a5'}}>
    <h2 className="text-white bottom-heading mt-4"> <img src="https://i.postimg.cc/SRBC2k8C/soabism.png" alt="logo"
            width="50px" className="img-fluid"/>&nbsp; codes.soabism</h2>
    <p className="mt-3 text-center ">codes.soabism features educational content related to coding and technology. This channel Contains a comprehensive series of courses developed after thorough research covering all the topics in-depth to equip you with a complete understanding of
        the subject. Feel free to contact me for more information.</p>
        <div className=' right col-md-12 text-center mt-2 '>
<hr className='footerhr mb-3' />
        <a href="https://www.instagram.com/codes.soabism/" target="_blank" title="INSTAGRAM"><i
                className="bi bi-instagram "></i></a>
        <a href="https://www.youtube.com/channel/UCiQhMPGMvCbBSre4NbZTHIg" target="_blank"
            title="YOUTUBE CHANNEL"><i className="bi bi-youtube"></i></a>
        <a href="https://www.facebook.com/pages/category/Video-Creator/Codessoabism-109423924323945/"
            target="_blank" title="FACEBOOK PAGE"><i className="bi bi-facebook"></i></a>
        <a href="https://www.linkedin.com/in/saurav-raj-56425a1ba/" target="_blank" title="LINKEDIN"><i
                className="bi bi-linkedin"></i></a>
                <a href="mailto:codes.soabism@gmail.com" target="_blank" title="MAIL US"><i className="bi bi-envelope"></i></a>
</div>
        </div>

        <div className="col-md-6 mt-4 ">
                            <h3 className='mb-4 quicklink'><i class="bi bi-link"></i>&nbsp; Quick Links</h3>
                          
                            <table>
                                <tbody >
                                    <tr>
                                        <td className="footer-item-2 footer-item "> <i className="bi bi-caret-right-fill "></i><a href='https://www.youtube.com/watch?v=0KlNHpZSEpg&list=PL5w7L_xR0pu0JxI3W8lWPfxqX7YB5PDr2' target='__blank'>&nbsp; C Tutorials for Beginners</a>
                                        </td>
                                        <td className="footer-item-2 footer-item"><i className="bi bi-caret-right-fill "></i> <a href='https://www.youtube.com/watch?v=Y6BxxBfgw8c&list=PL5w7L_xR0pu071bKL289PCcIg0ytEQEns' target='__blank'>&nbsp; Programming Exercises in C</a></td>
                                    </tr>
                                    <tr>
                                        <td className="footer-item-2 footer-item"> <i className="bi bi-caret-right-fill "></i><a href='https://www.youtube.com/watch?v=lmuZoHxhEkM&list=PL5w7L_xR0pu2wLbJtOuK49WxJJVjiyKks' target='__blank'>&nbsp; Graphics Lab in C | sem-3</a>
                                        </td>
                                        <td className="footer-item-2 footer-item"><i className="bi bi-caret-right-fill "></i> <a href='https://www.youtube.com/watch?v=O_CS0C1rs9s&list=PL5w7L_xR0pu29hYu_uoe7RpdEzQqrrt5G' target='__blank'>&nbsp; Projects in C Programming</a></td>
                                    </tr>
                                    <tr>
                                        <td className="footer-item-2 footer-item"> <i className="bi bi-caret-right-fill "></i> <a href='https://www.youtube.com/watch?v=MA_b8t5PP7I&list=PL5w7L_xR0pu1JvE9qpt-jTFwepSFv5naL' target='__blank'>&nbsp; Dynamic Memory Allocation in C</a>
                                        </td>
                                        <td className="footer-item-2 footer-item"><i className="bi bi-caret-right-fill "></i> <a href='https://www.youtube.com/watch?v=PeohtAsvtHg&list=PL5w7L_xR0pu3_rEufulzlpgnnqAKogC1K' target='__blank'>&nbsp; Memory Layout in C</a></td>
                                    </tr>
                                    <tr>
                                        <td className="footer-item-2 footer-item"> <i className="bi bi-caret-right-fill "></i><a href='https://www.youtube.com/watch?v=xqxUBvLABkc&list=PL5w7L_xR0pu3dQGAbflHCY9zkIrlE-qVO' target='__blank'>&nbsp; File Handling in C </a>
                                        </td>
                                        <td className="footer-item-2 footer-item"><i className="bi bi-caret-right-fill "></i> <a href='https://www.youtube.com/watch?v=FlxPPJiExPg&list=PL5w7L_xR0pu1M8OIDehSWy4wyG9MztuBG' target='__blank'>&nbsp; Programming Lab in C | ITP Lab</a></td>
                                    </tr>
                                    <tr>
                                        <td className="footer-item-2 footer-item"> <i className="bi bi-caret-right-fill "></i><a href='https://www.youtube.com/watch?v=V4DAbJWv6uw&list=PL5w7L_xR0pu1kgTlGFHzL0ZDW5TA6WcPc' target='__blank'>&nbsp; C++ Tutorials for Beginners</a>
                                        </td>
                                        <td className="footer-item-2 footer-item"><i className="bi bi-caret-right-fill "></i> <a href='https://www.youtube.com/watch?v=DymllbLwsXk&list=PL5w7L_xR0pu2GbfFgOFy_2kwhwLEqo8XB' target='__blank'>&nbsp; C++ projects for Beginners</a></td>
                                    </tr>
                                   
                                   
                                </tbody>
                            </table>


                        </div> 

                         
                        

</div>
</div>
</div>
<div className='row copyright  justify-content-evenly '>
<div className="col-md-5 mt-3 footerfix">
 &copy; {currentYear} @codes.soabism
</div>

<div className=" col-md-6   d-flex flex-md-row-reverse   footernavlink " >

<div className="p-2 "> <NavLink className="nav-link" exact to="/contact" activeStyle={{ color: "white" }} style={{color:'grey'}}>Contact</NavLink></div>
<div className="p-2"> <NavLink className="nav-link" exact to="/projects" activeStyle={{ color: "white" }} style={{color:'grey'}}>Projects</NavLink></div>
<div className="p-2 "> <NavLink className="nav-link" exact to="/courses" activeStyle={{ color: "white" }} style={{color:'grey'}}>Courses</NavLink></div>
  <div className="p-2 "> <NavLink className="nav-link" exact to="/about" activeStyle={{ color: "white" }} style={{color:'grey'}}>About</NavLink></div>
  <div className="p-2 ">
  <NavLink className="nav-link" exact to="/" activeStyle={{ color: "white" }} style={{color:'grey'}}>Home</NavLink>
                   
  </div>
</div>



</div>



  </>;
};

export default Footer;
