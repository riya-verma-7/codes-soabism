import React from 'react';
import "../style.css";
const Feedback = () => {
  return <>
       <div className="row justify-content-center  pb-4 pt-4 ">
        <h1 className="text-center pb-3 projtitle"> Feedback <i className="bi bi-arrow-return-left"></i></h1>

        <div id="carouselExampleFade2" className="carousel slide feedback" data-bs-ride="carousel" style={{zIndex: '1'}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.postimg.cc/9fBBdT2G/feedback1.png" className="d-block w-100"
                        alt="..."/>
                </div>
                <div className="carousel-item">

                    <img src="https://i.postimg.cc/bN7xtg7G/feedback3.png" className="d-block w-100"
                        alt="..."/>

                </div>
                <div className="carousel-item">
                    <img src="https://i.postimg.cc/qB84rvp9/feedback2.png" className="d-block w-100"
                        alt="..."/>

                </div>
                <div className="carousel-item">

                    <img src="https://i.postimg.cc/857dvYz6/feedback4.png" className="d-block w-100"
                        alt="..."/>

                </div>
                <div className="carousel-item">

                    <img src="https://i.postimg.cc/MpGnXQTc/feedback5.png" className="d-block w-100"
                        alt="..."/>

                </div>
                <div className="carousel-item">

                    <img src="https://i.postimg.cc/PJBSNjbJ/feedback6.pngg" className="d-block w-100"
                        alt="..."/>

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <hr id="join"></hr>
  </>;
};

export default Feedback;
