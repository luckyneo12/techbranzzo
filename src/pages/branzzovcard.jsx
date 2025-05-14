import React from "react";
import HeaderSix from "@/src/layout/headers/header-6";
import FooterFive from "@/src/layout/footers/footer-5";
import BranzzoVCardComponent from "@/src/components/branzzovcard";

const BranzzoVCard = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BranzzoVCardComponent />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default BranzzoVCard; 