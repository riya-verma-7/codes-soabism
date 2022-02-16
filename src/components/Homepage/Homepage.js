import React from "react";
import Landing from "./Landing";
import Features from "./Features";
import CourseSection from "./CouseSection";
import Recommendation from "./Recommendation";
import ProjectSection from "./ProjectSection";
import Faq from "./Faq";
import Feedback from "./Feedback";
import Newsletter from "./Newsletter";
import Navbar1 from "./Navbar1";
import AnimatedPage from "../AnimatedPage";

const Homepage = () => {
  return (
    <>
      <AnimatedPage>
        <Navbar1 />
        <Landing />
        <Features />
        <CourseSection />
        <Recommendation />
        <ProjectSection />
        <Faq />
        <Feedback />
        <Newsletter />
      </AnimatedPage>
    </>
  );
};

export default Homepage;
