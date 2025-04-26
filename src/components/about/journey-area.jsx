import React, {useState, useEffect} from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// slider setting
const setting = {
    loop: true, 
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    }, 
      scrollbar: {
        el: ".tp-scrollbar",
        clickable: true,
    },
  }
// journey_data
const journey_data = [
  {
    id: "01",
    date: "JAN 2023",
    title: <>The Beginning <br /> of Tech Branzzo</>,
    description: <>Founded with a mission to simplify and innovate IT solutions,<br /> Tech Branzzo began its journey in Jabalpur, Madhya Pradesh.</>,
  },
  {
    id: "02",
    date: "MAR 2023",
    title: <>First Client <br /> Onboarded</>,
    description: <>Secured our first client in the SaaS domain, <br /> laying the foundation for long-term partnerships.</>,
  },
  {
    id: "03",
    date: "JUN 2023",
    title: <>Expanded <br /> Our Services</>,
    description: <>Rolled out new verticals including CRM development,<br /> RPO solutions, and mobile app development.</>,
  },
  {
    id: "04",
    date: "SEP 2023",
    title: <>Tech Branzzo <br /> Goes Digital</>,
    description: <>Launched our digital presence, <br /> starting with website and social media branding.</>,
  },
  {
    id: "05",
    date: "DEC 2023",
    title: <>Strategic <br /> Collaborations</>,
    description: <>Collaborated with education and rental mobility startups <br /> to deliver tailored tech solutions.</>,
  },
  {
    id: "06",
    date: "MAR 2024",
    title: <>Product <br /> Development Begins</>,
    description: <>Initiated internal product development, <br /> including vCard and IoT-based management systems.</>,
  },
  {
    id: "07",
    date: "JUL 2024",
    title: <>New Office <br /> and Team Growth</>,
    description: <>Expanded to a new workspace and grew the team <br /> to support increasing project demands.</>,
  },
  {
    id: "08",
    date: "Present",
    title: <>Shaping the <br /> Future of Tech</>,
    description: <>Now delivering solutions across industries with a focus <br /> on AI-powered platforms, automation, and digital empowerment.</>,
  }
];

const JourneyArea = () => {

  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
     setIsDragged(true);
  };

  const handleTransitionEnd = () => {
     setIsDragged(false);
  };

    return (
      <>
        <div className="journey-area p-relative fix">
          <div className="journey-grey-bg grey-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="journey-section-box">
                  <h5 className="inner-section-subtitle pb-10">TIMELINE</h5>
                  <h3 className="ab-brand-title pb-0 mb-0">
                    Journey Was Started
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="journey-slider-wrapper">
                  <Swiper
                    {...setting}
                    onSliderMove={handleSlideChange}
                    onTransitionEnd={handleTransitionEnd}
                    modules={[Navigation, Scrollbar]}
                    className={`swiper-container journey-slider-active ${isDragged ? "dragged" : ""}`}
                  >
                    {journey_data.map((item, i) => (
                      <SwiperSlide
                        key={i}
                        className="journey-slider-item p-relative"
                      > 
                        <div className="journey-stroke-text">
                          <h2>{item.id}</h2>
                        </div>
                        <div className="journey-slider-meta">
                          <span>{item.date}</span>
                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="tp-scrollbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default JourneyArea;