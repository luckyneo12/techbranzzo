import React from "react";
import SEO from "../common/seo";
import Price from "../components/price";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Tech Branzzo -"} />
      <Price />
    </Wrapper>
  );
};

export default index;
