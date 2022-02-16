import React from 'react';
import "../style.css"

const Faq = () => {
  return <>
      <div className="row justify-content-evenly pb-4 pt-4  ">
        <div className="col-md-11">
            <h1 className="text-center pb-3 projtitle"> FAQ <i className="bi bi-question-circle"></i></h1>
            <div className="accordion accordion-flush border" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            In what language will these courses be taught?

                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Indian students tend to understand concepts better in their native language, so most videos
                            on this channel are in <code>HINDI</code>. However, the important definitions or elements
                            are described in English. This is because
                            English is the root of many high-level languages such as Python, Java, C++, or Javascript.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What makes this channel stand out ?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">What makes this channel unique for Indian students is that
                            everything is explained in Hindi as well. By using real life analogies, we simplify the
                            topics, so that they are easier to understand. Students who follow along with the
                            lecture can easily understand the code, which is well written and clean.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Is there any prospect of getting the notes and the code?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">In the description, you will find all the codes written in the
                            videos as well as a list of the websites that are referred to in the notes. The content is
                            curated from the best websites and documentation available on the internet.
                            Simply follow along with the lectures and make notes for revision. However, students are
                            encouraged to write their own full code instead of using the provided code. </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            I have no prior coding knowledge. Can I take the course?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">The courses on the channel are designed for absolute beginners to
                            get an overview of everything from scratch. In the playlists, students with no prior
                            knowledge can start with the basics and then move on to the advanced topics.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr id="feedback"></hr>
  </>;
};

export default Faq;
