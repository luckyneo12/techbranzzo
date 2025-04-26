import React from "react";
import SEO from "../common/seo";
import Career from "../components/career";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Tech Branzzo -"} />
      <Career />
    </Wrapper>
  );
};

export default index;
