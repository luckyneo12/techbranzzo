import React from "react";
import SEO from "../common/seo";
import CareerDetails from "../components/career-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Tech Branzzo -"} />
      <CareerDetails />
    </Wrapper>
  );
};

export default index;
