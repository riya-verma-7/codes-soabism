import React from 'react';
import "../style.css"

const Landing = () => {
  return <>
        {/* slider */}
    <div id="carouselExampleFade" className="carousel slide " data-bs-ride="carousel" style={{zIndex: "1"}}>
        <div className="carousel-inner">

            <div className="carousel-item active ">
               

                    <img src="https://i.postimg.cc/VN7WGpcV/slideone.png" className="d-block w-100" alt="..."/>
                
<div className="col-md-12">
                <a href="https://www.youtube.com/channel/UCiQhMPGMvCbBSre4NbZTHIg?sub_confirmation=1"  target="__blank" title="Open in Youtube">

                <button className="subscribeBtn">Subscribe On YouTube</button>
                </a>
</div>
            </div>
            <div className="carousel-item  ">
                <a href="https://www.youtube.com/playlist?list=PL5w7L_xR0pu0JxI3W8lWPfxqX7YB5PDr2" target="__blank" title="Open in Youtube">
                    <img src="https://i.postimg.cc/YCmDsCbK/1.png" className="d-block w-100" alt="..."/>
                </a>

            </div>
            <div className="carousel-item">
                <a href="https://www.youtube.com/playlist?list=PL5w7L_xR0pu1kgTlGFHzL0ZDW5TA6WcPc" target="__blank" title="Open in Youtube">
                    <img src="https://i.postimg.cc/7h6mMHfR/2.png" className="d-block w-100" alt="..."/></a>

            </div>
            <div className="carousel-item">
                <a href="https://www.youtube.com/watch?v=O_CS0C1rs9s&list=PL5w7L_xR0pu29hYu_uoe7RpdEzQqrrt5G&index=1" target="__blank" title="Open in Youtube">
                    <img src="https://i.postimg.cc/CKSC0R0T/Grapphics-lab-IN-C-language-3.png" className="d-block w-100" alt="..."/></a>

            </div>
            <div className="carousel-item">
                <a href="https://www.youtube.com/watch?v=GAdOH9DNRXs&list=PL5w7L_xR0pu29hYu_uoe7RpdEzQqrrt5G&index=2" target="__blank" title="Open in Youtube">
                    <img src="https://i.postimg.cc/nh8YddwL/Grapphics-lab-IN-C-language-2.png" className="d-block w-100" alt="..."/></a>

            </div>
            <div className="carousel-item">
                <a href="https://www.youtube.com/playlist?list=PL5w7L_xR0pu2wLbJtOuK49WxJJVjiyKks" target="__blank" title="Open in Youtube">
                    <img src="https://i.postimg.cc/JzcJpRkT/Grapphics-lab-IN-C-language-1.png" className="d-block w-100" alt="..."/></a>

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

    {/* <!-- tagline --> */}

    <div className="row pt-3 pb-3 text-center mt-5">
        <div className=" col-12 ">
            <h3 style={{fontWeight: "200px "}}className="line-1 anim-typewriter ">Tech is fun with codes.soabism<br/>Serving simple explanations for complex connections </h3>
        </div>
    </div>
  </>;
};

export default Landing;
