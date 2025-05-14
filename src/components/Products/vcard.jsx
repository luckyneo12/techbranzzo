"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function VcardSection() {
  const features = [
    { icon: "fas fa-qrcode", text: "Instant QR Code Sharing" },
    { icon: "fas fa-mobile-alt", text: "Cross-Platform Compatible" },
    { icon: "fas fa-chart-line", text: "Analytics Dashboard" },
  ];

  
  return (
    <section className=" pt-6 pb-20 ">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side - Laptop Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="position-relative"
            >
              {/* Main Image */}
              <div className="position-relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/img/products/vcard.png"
                    alt="Tech Branzzo VCard Preview"
                    width={800}
                    height={600}
                    className="mx-auto"
                    style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Content */}
          <div className="col-lg-6 ps-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="vcard-content"
            >
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="tp-sub-title mb-2 d-inline-block">Smart Business Cards</span>
                <h2 className="tp-section-title mb-4">
                  Elevate Your <br />
                  <span className="text-gradient">Digital Identity</span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-5 tp-text"
              >
                Transform your networking experience with our cutting-edge digital business cards. 
                Share your professional identity instantly, track engagement, and stand out in the digital age.
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="d-flex align-items-center mb-3"
                  >
                    <i className={`${feature.icon} text-primary me-3 fs-4`}></i>
                    <span className="tp-text">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="d-flex align-items-center gap-4"
              >
                <Link href="/branzzovcard" className="tp-btn">
                  Get Started Now
                </Link>
                <Link href="/branzzovcard" className="tp-link-btn">
                  <i className="fas fa-play-circle me-2"></i>
                  Watch Demo
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add these styles to your CSS
const styles = `
.text-gradient {
 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tp-link-btn {
  display: inline-flex;
  align-items: center;
  color: #2563eb;
  font-weight: 600;
  transition: all 0.3s ease;
}

.tp-link-btn:hover {
  color: #1e40af;
  transform: translateX(5px);
}

.tp-text {
  color: #4b5563;
  font-size: 1.1rem;
  line-height: 1.7;
}

.tp-sub-title {
  color: #2563eb;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
}
`;
