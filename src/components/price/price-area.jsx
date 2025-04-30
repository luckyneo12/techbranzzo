import NoticeTwo from '@/src/svg/notice-2';
import React from 'react';

import header_img from "../../../public/assets/img/price/price-4.1.png";
import Image from 'next/image';
import Link from 'next/link';

const pricing_data_monthly = {
   header_text: <>You pay <span>₹4,999/mo</span> today. Renews <br /> May 2025 for <span>₹6,499/mo</span></>,
   // price header data 
   price_header: [
      {
         id: 1,
         title: "Basic Suite",
         description: <>Ideal for startups: <br /> website, social media & support</>,
         price: "4,999",
         price_yearly: 4999 * 12 * 0.85, // 15% off for yearly
         date: "Billed monthly",
         active: "",
      },
      {
         id: 2,
         title: "Business Pro",
         description: <>Complete digital package: <br /> Website, CRM,Application,Digital Marketing & Support</>,
         price: "40,500",
         price_yearly: 40500 * 12 * 0.85,
         date: "Billed monthly",
         active: "active",
      },
      {
         id: 3,
         title: "Enterprise Suite",
         description: <>Scalable services: <br /> BPM, advanced CRM, RPO</>,
         price: "19,999",
         price_yearly: 9999 * 12 * 0.85,
         date: "Billed monthly",
         active: "",
      },
   ],

   // price feature  
   price_feature: [
      {
         id: 1,
         title: "Team Size",
         notice: <>Maximum number of users who can collaborate under this plan.</>
      },
      {
         id: 2,
         title: "CRM Access",
         notice: <>Access to our customized CRM tools and dashboards.</>
      },
      {
         id: 3,
         title: "Mobile App",
         notice: <>Includes basic or advanced app development based on the plan.</>
      },
      {
         id: 4,
         title: "Support & Maintenance",
         notice: <>Access to support channels and monthly updates.</>
      },
      {
         id: 5,
         title: "Dedicated Account Manager",
         notice: <>Get a dedicated expert for project and client management.</>
      },
   ],

   // price feature info
   price_feature_info: [
      {
         id: 1,
         active: "",
         info: [
            "5",
            "Basic",
            "Not Included",
            "Standard",
            "No",
         ]
      },
      {
         id: 2,
         active: "active",
         info: [
            "15",
            "Advanced",
            "Included",
            "24/7 Priority",
            "Yes",
         ]
      },
      {
         id: 3,
         active: "",
         info: [
            "Unlimited",
            "Full Suite",
            "Included",
            " Priority",
            "Yes",
         ]
      },
   ]

}
const {  header_text, price_header, price_feature, price_feature_info } = pricing_data_monthly




const PriceArea = () => {
   return (
      <>
         <div className="tp-price-area mb-120">
            <div className="container">
               <div className="price-tab-content">
                  <div className="tab-content" id="nav-tabContent">

                     <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                        <div className="tp-price-table price-inner-white-bg z-index-3">
                           <div className="tp-price-table-wrapper">
                              <div className="row g-0 align-items-center">
                                 <div className="col-4">
                                    <div className="tp-price-header">
                                       <div className="tp-price-header-img">
                                          <Image src={header_img} alt="theme-pure" />
                                       </div>
                                       <div className="tp-price-header-content">
                                          <p>{header_text}</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-8">
                                    <div className="tp-price-top-wrapper">
                                       {price_header.map((item, i) =>
                                          <div key={i} className={`tp-price-top-item text-center ${item.active}`}>
                                             <div className="tp-price-top-tag-wrapper">
                                                <span>{item.title}</span>
                                                <p>{item.description}</p>
                                             </div>
                                             <div className="tp-price-top-title-wrapper">
                                                <h4>₹{item.price} <span>/mo</span></h4>
                                                <p>{item.date}</p>
                                                <Link className="tp-btn-service" href="#">Get Started</Link>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <div className="tp-price-feature-wrapper">
                                 <div className="row g-0">
                                    <div className="col-4">
                                       <div className="tp-price-feature-box">
                                          {price_feature.map((item, i) =>
                                             <div key={i} className="tp-price-feature-item p-relative">
                                                <div className="d-flex align-items-center">
                                                   <span>{item.title}</span>
                                                   <div className="tp-price-feature-tooltip-box p-relative">
                                                      <NoticeTwo />
                                                      <div className="tp-price-feature-tooltip">
                                                         <p>{item.notice}</p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                          }
                                       </div>
                                    </div>
                                    <div className="col-8">
                                       {price_feature_info.map((item, i) =>
                                          <div key={i} className={`tp-price-feature-info-item ${item.active}`}>
                                             {item?.info?.map((inf, i) =>
                                                <div key={i} className="tp-price-feature-info text-center">
                                                   <span>{inf}</span>
                                                </div>
                                             )}
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                        <div className="tp-price-table price-inner-white-bg z-index-3">
                           <div className="tp-price-table-wrapper">
                              <div className="row g-0 align-items-center">
                                 <div className="col-4">
                                    <div className="tp-price-header">
                                       <div className="tp-price-header-img">
                                          <Image src={header_img} alt="theme-pure" />
                                       </div>
                                       <div className="tp-price-header-content">
                                          <p>{header_text}</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-8">
                                    <div className="tp-price-top-wrapper">
                                       {price_header.map((item, i) =>
                                          <div key={i} className={`tp-price-top-item text-center ${item.active}`}>
                                             <div className="tp-price-top-tag-wrapper">
                                                <span>{item.title}</span>
                                                <p>{item.description}</p>
                                             </div>
                                             <div className="tp-price-top-title-wrapper">
                                                <h4>${item.price_yearly} <span>/mo</span></h4>
                                                <p>{item.date}</p>
                                                <Link className="tp-btn-service" href="#">Get Started</Link>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <div className="tp-price-feature-wrapper">
                                 <div className="row g-0">
                                    <div className="col-4">
                                       <div className="tp-price-feature-box">
                                          {price_feature.map((item, i) =>
                                             <div key={i} className="tp-price-feature-item p-relative">
                                                <div className="d-flex align-items-center">
                                                   <span>{item.title}</span>
                                                   <div className="tp-price-feature-tooltip-box p-relative">
                                                      <NoticeTwo />
                                                      <div className="tp-price-feature-tooltip">
                                                         <p>{item.notice}</p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                          }
                                       </div>
                                    </div>
                                    <div className="col-8">
                                       {price_feature_info.map((item, i) =>
                                          <div key={i} className={`tp-price-feature-info-item ${item.active}`}>
                                             {item?.info?.map((inf, i) =>
                                                <div key={i} className="tp-price-feature-info text-center">
                                                   <span>{inf}</span>
                                                </div>
                                             )}
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PriceArea;