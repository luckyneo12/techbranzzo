import EmailThree from '@/src/svg/email-3';
import LocationTwo from '@/src/svg/location-2';
import PhoneThree from '@/src/svg/phone-3';
import Link from 'next/link';
import Image from 'next/image';
import NiceSelect from '@/src/ui/nice-select';
import React from 'react';

import contact_img from "../../../../public/assets/img/hero/hero-4-3.png"
import shape_1 from "../../../../public/assets/img/contact/shape-4-1.png"

const contact_content = {
    sub_title: "CONTACT US",
    title: "Request Free Consultancy",
    phone: "+91 6269957381",
    email: "branzzotechnologies@gmail.com",
    location: <>Omega Tower 4th-Floor, Indore, Madhya Pradesh, India</>,
}
const {sub_title, title , phone, email, location}  = contact_content

const ContactArea = () => {
    const selectHandler = (e) => {};
    return (
        <>
            <div className="tp-contact-area tp-contact-overlay pt-120 pb-120 blue-bg z-index p-relative fix">
               <div className="tp-contact-glob-img">
                  <Image src={contact_img} alt="theme-pure" />
               </div>
               <div className="container">
                  <div className="row">

                     <div className="col-xl-5 col-12 z-index-3 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className="tp-contact-section-box pb-25">
                           <h5 className="tp-section-subtitle-4 pb-10 ">{sub_title}</h5>
                           <h3 className="tp-section-title-4">{title}</h3>
                        </div>
                        <div className="tp-contact-info-box tp-title-anim">
                           <ul>
                              <li>
                                <PhoneThree />                                   
                                 <Link href={`tel:${phone}`}>{phone}</Link>
                              </li>
                              <li>
                                <EmailThree /> 
                                 <Link href={`mailto:${email}`}>{email}</Link>
                              </li>
                              <li>
                                <LocationTwo /> 
                                 <Link href="https://www.google.com/maps/place/Omega+Tower,+Ware+House+Rd,+Mechanic+Nagar,+Badi+Bhamori,+Indore,+Madhya+Pradesh+452002/@22.7491879,75.8881755,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fd5630da7d0f:0x7b927144557e6b25!8m2!3d22.7491879!4d75.8907504!16s%2Fg%2F1tcxh56l?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank">{location}</Link>
                              </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-xl-7 col-12 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-contact-input-wrapper p-relative">
                           <div className="tp-contact-shape">
                              <Image src={shape_1} alt="theme-pure" />
                           </div>
                           <div className="row">
                              <div className="col-xl-6">
                                 <div className="tp-contact-input mb-20">
                                    <input type="text" placeholder="Full name"  required/>
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tp-contact-input mb-20">
                                    <input type="email" placeholder="Email address" required />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="tp-contact-select">
                                    <div className="tp-select-icon"> 
                                       <NiceSelect
                                        options={[ 
                                            { value: "Hack Protection", text: "Hack Protection" },
                                            { value: "Online Support", text: "Online Support" },
                                            { value: "Live Security", text: "Live Security" },
                                            { value: "Hack Protection2", text: "Hack Protection2" }, 
                                        ]}
                                        defaultCurrent={0}
                                        onChange={selectHandler}
                                        />
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="tp-contact-input mb-20">
                                    <textarea placeholder="Enter your message"></textarea>
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="tp-contact-btn">
                                    <button type="submit" className="tp-btn-yellow-lg yellow-bg w-100">Get a free consultation</button>
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

export default ContactArea;