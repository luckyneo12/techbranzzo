
import FooterFive from "@/src/layout/footers/footer-5";
import React from "react";
import HeaderEight from "@/src/layout/headers/header-8";
import Hero from "./hero";
import Brands from "./brands";
import About from "../about";

const ProjectDetails = () => {
  return (
    <>
      <HeaderEight/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero/>
            <Brands/>
            <About/>
          </main>
          <FooterFive style_contact={true}  style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
