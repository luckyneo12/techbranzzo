const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    title: "Home",
    link: "/",
    active: "active",
    sub_menus: [
      { link: "/home-3", title: "CRM Software" },
      { link: "/home-4", title: "Security Software" },
      { link: "/home-5", title: "Saas" },
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    active: "",
    // sub_menus: [
    //   { link: "/about", title: "About" },
    //   { link: "/service", title: "Service" },
    //   { link: "/team", title: "Team" },
    //   { link: "/career", title: "Career" },
    //   { link: "/price", title: "Price" },
    //   { link: "/register", title: "Register" },
    //   { link: "/sign-in", title: "Signin" },
    // ],
  },
  
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Projects",
    link: "/project",
    active: "",
    // sub_menus: [
    //   { link: "/project", title: "Project" },
    // ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blog",
    active: "",
    
  },
  
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Products",
    link: "/Products",
    active: "",
  },
  
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Service",
    link: "/service",
    active: "",
  },
];
export default menu_data;
