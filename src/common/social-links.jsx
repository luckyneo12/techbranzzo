import Link from "next/link";


const social_links = [
  {
    link: "https://www.facebook.com/profile.php?id=61574884286767",
    target: "_blank",
    icon: "fab fa-facebook-f", 
  },
  {
    link: "https://in.pinterest.com/branzzot/",
    target: "_blank",
    icon: "fab fa-pinterest",
  },
  {
    link: "https://www.linkedin.com/in/tech-branzzo-086754353/",
    target: "_blank",
    icon: "fab fa-linkedin-in", 
  }, 
  {
    link: "www.youtube.com/@BranzzoTechnologies",
    target: "_blank",
    icon: "fab fa-youtube", 
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;






const copy_right_text = {
  copy_right: <>© {new Date().getFullYear()} Tech Branzzo. All Rights Reserved. <br/><span className="my-2">Designed & Developed by <Link href="https://techbranzzo.com" target="_blank" >@Tech Branzzo</Link>.</span></>,
}

const {copy_right}  = copy_right_text

export const CopyRight = ()  => {
  return (
    <>
    {copy_right}
    </>
  )
}




// home 04 social link
const social_links_two = [
  {
    link: "https://www.facebook.com/profile.php?id=61574884286767",
    target: "_blank",
    icon: "fab fa-facebook-f",
    color: "1", 
  },
  {
      link: "https://www.instagram.com/tech_branzzo/?hl=en",
      target: "_blank",
      icon: "fab fa-instagram", 
      color: "2",
  },

  {
    link: "https://in.pinterest.com/branzzot/",
    target: "_blank",
    icon: "fab fa-pinterest-p", 
    color: "3",
  },
  {
    link: "https://www.linkedin.com/in/tech-branzzo-086754353/",
    target: "_blank",
    icon: "fab fa-linkedin-in",
    color: "4", 
  }, 
];

export const  SocialLinksTwo = ()  => {
   return (
     <>
        {social_links_two.map((link, i) => (
          <Link
            key={i}
            target={link.target}
            className={`icon-color-${link.color}`}
            href={link.link}
          >
            <i className={link.icon}></i>
            <span></span>
          </Link>
        ))}
     </>
   );
}