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
    has_dropdown: true,
    title: "Pages",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/service", title: "Service" },
      { link: "/team", title: "Team" },
      { link: "/career", title: "Career" },
      { link: "/price", title: "Price" },
      { link: "/register", title: "Register" },
      { link: "/sign-in", title: "Signin" },
    ],
  },
  
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Projects",
    link: "/project",
    active: "",
    sub_menus: [
      { link: "/project", title: "Project" },
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Blog",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" },
    ],
  },
  
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
