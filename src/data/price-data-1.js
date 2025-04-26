import PriceList from "../svg/price-list"

import pric_img_1 from "../../public/assets/img/price/price-icon-1.png";
import pric_img_2 from "../../public/assets/img/price/price-icon-2.png";
import pric_img_3 from "../../public/assets/img/price/price-icon-3.png";


const price_data_home_one = [
    // monthly pricing for Tech Branzzo services
    {
        id: 1,
        img: pric_img_1,
        title: "Starter Website",
        desctiption: <>Perfect for small businesses getting started online.</>,
        cls: "",
        pric: "4,999",
        price_feature: [
          { list: "1-Page Static Website", icon: <PriceList />, cls: "" },
          { list: "Mobile Responsive Design", icon: <PriceList />, cls: "" },
          { list: "Basic SEO Setup", icon: <PriceList />, cls: "" },
          { list: "3 Revisions", icon: <PriceList />, cls: "inactive" },
        ],
      },
      {
        id: 2,
        img: pric_img_2,
        title: "Professional Website",
        desctiption: <>Advanced design with animations and multiple pages.</>,
        cls: "active",
        pric: "14,999",
        price_feature: [
          { list: "Multi-Page Website (Up to 6)", icon: <PriceList />, cls: "" },
          { list: "Custom UI/UX with Animations", icon: <PriceList />, cls: "" },
          { list: "SEO Optimization + Contact Form", icon: <PriceList />, cls: "" },
          { list: "30 Days Free Support", icon: <PriceList />, cls: "" },
        ],
      },
      {
        id: 3,
        img: pric_img_3,
        title: "Enterprise Solution",
        desctiption: <>Scalable web solutions tailored for your enterprise needs.</>,
        cls: "",
        pric: "Custom",
        price_feature: [
          { list: "Full-Stack Web App Development", icon: <PriceList />, cls: "" },
          { list: "Admin Dashboard Integration", icon: <PriceList />, cls: "" },
          { list: "API & Payment Integration", icon: <PriceList />, cls: "" },
          { list: "Dedicated Project Manager", icon: <PriceList />, cls: "" },
        ],
      },
  
    // yearly pricing for Tech Branzzo services
    {
      id: 4,
      img: pric_img_1,
      title: "Digital Marketing",
      desctiption: <>Grow your brand with targeted digital campaigns.</>,
      cls: "",
      pric: "6,999.00",
      price_feature: [
        { list: "SEO + SEM", icon: <PriceList />, cls: "" },
        { list: "Social Media Management", icon: <PriceList />, cls: "" },
        { list: "Monthly Analytics Report", icon: <PriceList />, cls: "" },
        { list: "Ad Budget Optimization", icon: <PriceList />, cls: "inactive" }
      ]
    },
    {
      id: 5,
      img: pric_img_2,
      title: "CRM & BPO Services",
      desctiption: <>End-to-end customer support & business processing.</>,
      cls: "active",
      pric: "19,999.00",
      price_feature: [
        { list: "Dedicated Agents", icon: <PriceList />, cls: "" },
        { list: "Real-Time Reporting", icon: <PriceList />, cls: "" },
        { list: "Multi-Language Support", icon: <PriceList />, cls: "" },
        { list: "24/7 Support", icon: <PriceList />, cls: "" }
      ]
    },
    {
      id: 6,
      img: pric_img_3,
      title: "Complete IT Package",
      desctiption: <>All-in-one solution for your tech needs.</>,
      cls: "",
      pric: "Custom",
      price_feature: [
        { list: "Web + App + CRM", icon: <PriceList />, cls: "" },
        { list: "Marketing & SEO", icon: <PriceList />, cls: "" },
        { list: "Dedicated Project Manager", icon: <PriceList />, cls: "" },
        { list: "Lifetime Support Plan", icon: <PriceList />, cls: "" }
      ]
    }
  ];
  
  export default price_data_home_one;
  