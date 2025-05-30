import React from "react";
import SEO from "../common/seo";
import SignIn from "../components/sign-in";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Tech Branzzo -"} />
      <SignIn />
    </Wrapper>
  );
};

export default index;
