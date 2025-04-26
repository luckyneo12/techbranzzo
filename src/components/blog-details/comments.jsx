import React from 'react';
import Image from 'next/image';
import ReplyIcon from '@/src/svg/reply-icon';


import avata_1 from "../../../public/assets/img/blog/blog-avata-2.png";
import avata_2 from "../../../public/assets/img/blog/blog-avata-1.png";
import avata_3 from "../../../public/assets/img/blog/blog-list-avata-1.jpg";
import Link from 'next/link';

const comments_data = [
  {
    id: 1, 
    img: avata_1,
    name: "Ankush Kumar",
    date: "March 22, 2025 at 10:15 am",
    comment: <>Great breakdown of the design workflow. We follow a similar agile-driven approach at Tech Branzzo and it's yielded excellent results.</>,
    cls_reply: ""
  },
  {
    id: 2, 
    img: avata_2,
    name: "Sneha Patel",
    date: "March 23, 2025",
    comment: <>Insightful post! I’d love to see more examples of how your UI/UX strategies have impacted product engagement metrics.</>,
    cls_reply: "children"
  },
  {
    id: 3, 
    img: avata_3,
    name: "Ravi Sharma",
    date: "March 24, 2025 at 9:45 am",
    comment: <>We recently implemented a similar CRM optimization strategy at Tech Branzzo. The improvement in pipeline visibility was immediate.</>,
    cls_reply: ""
  },
];

const Comments = () => {
    return (
      <>
        <ul>
          {comments_data.map((item, i) => (
            <li key={i} className={item.cls_reply}>
              <div className="postbox__comment-box  d-flex">
                <div className="postbox__comment-info">
                  <div className="postbox__comment-avater mr-20">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                </div>
                <div className="postbox__comment-text">
                  <div className="postbox__comment-name d-flex">
                    <h5>{item.name}</h5>
                    <span className="post-meta">{item.date}</span>
                  </div>
                  <p>{item.comment}</p>
                  <div className="postbox__comment-reply">
                    <Link href="#">
                      <ReplyIcon />
                      Reply
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
};

export default Comments;