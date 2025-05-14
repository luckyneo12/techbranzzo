import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/src/common/hero-banner";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react"; 
import VcardSection from "./vcard";
import CRMHeroSection from "./crm";


  
const Products = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={"Our"} title_bottom={"Products"} />
            <HeroBanner title="Our" subtitle="Products" bg_img="/assets/img/breadcrumb/breadcrumb-5.jpeg" />
            <VcardSection/>
            <CRMHeroSection/>
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Products;