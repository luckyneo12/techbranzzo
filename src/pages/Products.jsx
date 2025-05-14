import React from "react";
import SEO from "../common/seo";
import Products from "../components/Products";
import Wrapper from "../layout/wrapper";

const ProductsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Tech Branzzo - Products"} />
      <Products />
    </Wrapper>
  );
};

export default ProductsPage;