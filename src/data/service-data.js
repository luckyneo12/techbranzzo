import ServiceIconOne from "../svg/service/service-icon-1"
import ServiceIconTwo from "../svg/service/service-icon-2"
import ServiceIconThree from "../svg/service/service-icon-3"
import ServiceIconFoure from "../svg/service/service-icon-4"
import ServiceIconFive from "../svg/service/service-icon-5"
import ServiceIconsix from "../svg/service/service-icon-6"
import ServiceIconSeven from "../svg/service/service-icon-7"

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";
import img_4 from "../../public/assets/img/service/sv-icon-4.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";
// for home 04
import icon_1 from "../../public/assets/img/service/sv-icon-4-1.png"
import icon_2 from "../../public/assets/img/service/sv-icon-4-2.png"
import icon_3 from "../../public/assets/img/service/sv-icon-4-3.png"
import icon_4 from "../../public/assets/img/service/sv-icon-4-4.png"

// for home 05
import img_6 from "../../public/assets/img/service/sv-icon-5-1.png";
import img_7 from "../../public/assets/img/service/sv-icon-5-2.png";
import img_8 from "../../public/assets/img/service/sv-icon-5-3.png";
import img_9 from "../../public/assets/img/service/sv-icon-5-4.png";

// import img_10 from "../../public/";
// import img_11 from "../../public/";
// import img_12 from "../../public/";
// import img_13 from "../../public/";
// import img_14 from "../../public/";
// import img_15 from "../../public/";




const  service_data = [
    // for home 01 
    {
        id: 1,
        icon: img_1,
        img: img_1,
        title: "Web Design & Development",
    description: <>Custom websites to elevate your brand</>,
        delay: ".4s",
    },
    {
        id: 2,
        icon: img_2,
        img: img_2,
        title: "Mobile App Development",
    description: <>iOS & Android apps tailored to your needs</>,
        delay: ".6s",
    },
    {
        id: 3,
        icon: img_3,
        img: img_3,
        title: "CRM Solutions",
    description: <>Efficient customer management systems</>,
        delay: ".7s",
    },
    {
        id: 4,
        icon: img_4,
        img: img_4,
        title: "SaaS Product Development",
        description: <>Scalable cloud-based software solutions</>,
        delay: ".8s",
    },
    {
        id: 5,
        icon: img_5,
        img: img_5,
        title: "Digital Marketing",
        description: <>SEO, social media & ad strategies that convert</>,
        delay: ".9s",
    },

    // for home 03
    {
        id: 6,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: "Project management jamil",
        description: <>Automate Workflows <br /> and Monitor your Sales.</>,
        delay: ".9s",
    },
    {
        id: 7,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: "Sales analytics",
        description: <>Track your Marketing to see the best Results.</>,
        delay: ".9s",
    },
    {
        id: 8,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: "Easy Invoicing",
        description: <>Automate recurring invoices and save time.</>,
        delay: ".9s",
    },
    {
        id: 9,
        icon: <ServiceIconFoure/>,
        img: <ServiceIconFoure />,
        title: "Complete Visibility",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },
    
    // for home 04
    {
        id: 10,
        icon: icon_1,
        img: icon_1,
        title: "Cloud Infrastructure",
        sub_title: "DevOps Ready",
        cls: "1",
        description: <>Deploy secure, scalable apps <br /> on the cloud.</>,
        delay: ".9s",
    },
    {
        id: 11,
        icon: icon_2,
        img: icon_2,
        title: "DevOps Automation",
        sub_title: "CI/CD Enabled",
        cls: "2",
        description: <>Streamline release cycles <br /> with CI/CD pipelines.</>,
        delay: ".9s",
    },
    {
        id: 12,
        icon: icon_3,
        img: icon_3,
        title: <>Managed <br /> Services</>,
        sub_title: "All-in-One",
        cls: "3",
        description: <>We manage your web stack <br /> so you can scale freely.</>,
        delay: ".9s",
    },
    {
        id: 13,
        icon: icon_4,
        img: icon_4,
        title: "Client Support Portal",
        sub_title: "Support System",
        cls: "4",
        description: <>Dedicated helpdesk and <br /> service request platform.</>,
        delay: ".9s",
    },

    // for home 05
    {
        id: 14,
        icon: img_6,
        img: img_6,
        title: <>Live Project <br /> Tracking</>,
        sub_title: "Project View",
        cls: "4",
        description: <>Keep stakeholders informed <br /> with live dashboards.</>,
        delay: ".9s",
    },
    {
        id: 15,
        icon: img_7,
        img: img_7,
        title: <>Agile Task <br /> Boards</>,
        sub_title: "Scrum Ready",
        cls: "4",
        description: <>Organize, assign, and execute <br /> with clarity.</>,
        delay: ".9s",
    },
    {
        id: 16,
        icon: img_8,
        img: img_8,
        title: <>Team <br /> Collaboration</>,
        sub_title: "Collab Suite",
        cls: "4",
        description: <>Boost productivity with <br /> integrated comms.</>,
        delay: ".9s",
    },
    {
        id: 17,
        icon: img_9,
        img: img_9,
        title: <>Omnichannel <br /> Experience</>,
        sub_title: "Unified UI",
        cls: "4",
        description: <>Deliver seamless UX <br /> across devices.</>,
        delay: ".9s",
    },

    // service page
    {
        id: 18,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: "Project management jamil",
        description: <>Automate Workflows <br /> and Monitor your Sales.</>,
        delay: ".9s",
    },
    {
        id: 19,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: "Sales analytics",
        description: <>Track your Marketing to see the best Results.</>,
        delay: ".9s",
    },
    {
        id: 20,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: "Easy Invoicing",
        description: <>Automate recurring invoices and save time.</>,
        delay: ".9s",
    },
    {
        id: 21,
        icon: <ServiceIconFoure/>,
        img: <ServiceIconFoure />,
        title: "Complete Visibility",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },
    
    {
        id: 22,
        icon: <ServiceIconFive/>,
        img: <ServiceIconFive />,
        title: "FIELDS OPTION",
        description: <>Quick & Easy Repeater Fields Option</>,
        delay: ".9s",
    },
    
    {
        id: 23,
        icon: <ServiceIconsix/>,
        img: <ServiceIconsix />,
        title: "Safe Online Services",
        description: <>Online services to view company level.</>,
        delay: ".9s",
    },
    
    {
        id: 24,
        icon: <ServiceIconSeven/>,
        img: <ServiceIconSeven />,
        title: "Online marketing",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },


]
export default service_data