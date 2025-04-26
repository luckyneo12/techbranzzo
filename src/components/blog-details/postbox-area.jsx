import SocialLinks from '@/src/common/social-links';
import CommentPost from '@/src/forms/comment-post';
import DoubleSemicolon from '@/src/svg/double-semicolon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Categories from '../blog-list/categories';
import RecentPost from '../blog-list/recent-post';
import Search from '../blog-list/search';
import Tags from '../blog-list/tags';
import Comments from './comments';


import blog_details_img_1 from "../../../public/assets/img/blog/blog-details-1.jpg";
import blog_details_img_2 from "../../../public/assets/img/blog/blog-details-2.jpg";
import blog_details_img_3 from "../../../public/assets/img/blog/blog-details-3.jpg";
import navigation_img_1 from "../../../public/assets/img/blog/navigation-1.png";
import navigation_img_2 from "../../../public/assets/img/blog/navigation-2.png";
import blog_details_avata from "../../../public/assets/img/blog/blog-details-avata-1.jpg";


const post_box_content = {
   title_1: <>The Evolution of Web Platforms at Tech Branzzo</>,
   des_1: (
      <>
         At Tech Branzzo, we understand that a high-performing digital platform is
         the backbone of a business’s success. Our journey through modern web
         design showcases how we've blended aesthetics with performance. Our teams
         ensure not just intuitive UI/UX, but also seamless backend operations to
         maximize conversions and user engagement.
      </>
   ),
   des_2: (
      <>
         We integrate agile methodologies with design thinking, ensuring every
         project evolves with your business goals. The new era of web development
         is here, and Tech Branzzo is leading the charge!
      </>
   ),
   checkmark_list: [
      "Eliminate unnecessary complexity with scalable tech.",
      "Leverage agile workflows for faster deployment.",
      "Capitalize on early market opportunities.",
      "Ensure secure and seamless digital transactions.",
   ],
   title_2: "How We Maintain and Evolve Client Platforms",
   des_3: (
      <>
         At Tech Branzzo, maintaining your digital product is as important as
         building it. Our update protocols ensure your platform stays future-ready
         without disrupting active services. From CMS themes to entire frameworks,
         we handle it all with precision.
      </>
   ),
   des_4: (
      <>
         Our dev team applies modular and scalable coding practices. Whether it’s
         rolling out a minor patch or a complete redesign, we maintain platform
         integrity, speed, and security throughout.
      </>
   ),
   des_5: (
      <>
         We believe continuous improvement drives lasting impact. With our
         maintenance plans, clients benefit from proactive monitoring, performance
         enhancements, and user feedback loops. Our integrated systems allow for
         data-driven decision-making and feature rollouts based on real-world
         usage.
      </>
   ),
   des_6: <></>,
};

const { title_1, des_1, des_2, checkmark_list, title_2, des_3, des_4, des_5, des_6 } = post_box_content


const PostboxArea = ({ style_details_2 }) => {
   return (
      <>
         <div className={`postbox__area ${style_details_2 && "pt-100"} pb-100`}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__details-wrapper pr-20">
                        <article>
                           {style_details_2 &&
                              <div className="postbox__thumb w-img">
                                 <Link href="/blog-details">
                                    <Image src={blog_details_img_1} alt="" />
                                 </Link>
                              </div>
                           }
                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_1}</h4>
                              <p>{des_1}</p>
                              <p>{des_2}</p>
                           </div>
                           <div className="postbox__details-checkmark">
                              <ul>
                                 {checkmark_list.map((item, i) => <li key={i}><i className="fal fa-check"></i>{item}</li>)}
                              </ul>
                           </div>
                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_2}</h4>
                              <p>{des_3}</p>
                           </div>
                           <div className="postbox__details-img-box d-flex">
                              <div className="mr-20 text-center">
                                 <Image className="mb-20" src={blog_details_img_2} alt="theme-pure" />
                                 <h4 className="postbox__details-img-caption"><span>Images by</span>@sample</h4>
                              </div>
                              <div className="text-center">
                                 <Image className="mb-20" src={blog_details_img_3} alt="theme-pure" />
                                 <h5 className="postbox__details-img-caption"><span>Images by</span>@sample</h5>
                              </div>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <p>{des_4}</p>
                           </div>
                           <div className="postbox__details-qoute mb-30">
                              <blockquote className="d-flex align-items-start">
                                 <div className="postbox__details-qoute-icon">
                                    <DoubleSemicolon />
                                 </div>
                                 <div className="postbox__details-qoute-text">
                                    <p>“The team at @techbranzzo is incredibly dedicated, innovative, and consistently delivers beyond expectations.”</p>
                                    <span> Shubham Chaturvedi</span>
                                 </div>

                              </blockquote>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <p>{des_5}</p>
                           </div>
                           <div className="postbox__details tagcloud mb-50">
                              <span>Tags:</span>
                              <Link href="#">Tech Branzzo</Link>
                              <Link href="#">SaaS Solutions</Link>
                              <Link href="#">Web Development</Link>
                              <Link href="#">Mobile Apps</Link>
                              <Link href="#">CRM</Link>
                              <Link href="#">Digital Marketing</Link>
                           </div>
                           <div className="postbox__navigation-more mb-70 d-flex justify-content-between">
                              <div className="postbox__navigation-left d-flex align-items-center">
                                 <div className="postbox__navigation-img">
                                    <Link href="#"><Image src={navigation_img_1} alt="theme-pure" /></Link>
                                 </div>
                                 <div className="postbox__navigation-content">
                                    <Link href="#">
                                       <span>
                                          <i className="far fa-arrow-left"></i>
                                          Previous post
                                       </span>
                                    </Link>
                                    <h5><Link href="#">Leveraging Feedback...</Link></h5>
                                 </div>
                              </div>
                              <div className="postbox__navigation-right d-flex align-items-center">
                                 <div className="postbox__navigation-content">
                                    <Link href="#">
                                       <span>
                                          Next post
                                          <i className="far fa-arrow-right"></i>
                                       </span>
                                    </Link>
                                    <h5><Link href="#">Typing Tutorials For...</Link></h5>
                                 </div>
                                 <div className="postbox__navigation-img">
                                    <Link href="#"><Image src={navigation_img_2} alt="theme-pure" /></Link>
                                 </div>
                              </div>
                           </div>

                           <div className="postbox__details-author-info-box mb-100 d-flex align-items-start">
                              <div className="postbox__details-author-avata">
                                 <Image src={blog_details_avata} alt="theme-pure" />
                              </div>
                              <div className="postbox__details-author-content">
                                 <h5 className="postbox__details-author-title">Swarna Singh Baghel</h5>
                                 <p>As the Co-Founder of Tech Branzzo, We are passionate about creating scalable tech solutions that drive digital transformation across industries. He believes in innovation, collaboration, and the power of clean, user-focused design.</p>
                                 <div className="postbox__details-author-social">
                                    <SocialLinks />
                                 </div>
                              </div>

                           </div>

                           <div className="postbox__comment mb-65">
                              <h3 className="postbox__comment-title">3 Comments</h3>
                              <Comments />
                           </div>
                           <div className="postbox__comment-form">
                              <h3 className="postbox__comment-form-title">Leave A Comment</h3>
                              <CommentPost />
                           </div>
                        </article>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="sidebar__wrapper">
                        <Search />
                        <RecentPost />
                        <Categories />
                        <Tags />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PostboxArea;