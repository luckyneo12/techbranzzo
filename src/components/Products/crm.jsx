"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CRMHeroSection() {
  const crmFeatures = [
    { icon: "fas fa-chart-pie", text: "Intuitive Analytics Dashboard" },
    { icon: "fas fa-user-cog", text: "Customizable Workflows" },
    { icon: "fas fa-shield-alt", text: "Secure & Scalable Architecture" },
  ];

  return (
    <section className="pt-6 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Right side - Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/img/products/vcard1.png"
                  alt="Tech Branzzo CRM"
                  width={800}
                  height={600}
                  className="mx-auto rounded-xl shadow-xl"
                  style={{ transform: "perspective(1000px) rotateY(-5deg)" }}
                />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Left side - CRM Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="crm-content"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="tp-sub-title mb-2 block">Smart CRM Solutions</span>
                <h2 className="tp-section-title mb-4 text-4xl font-bold leading-tight">
                  Power Your <br />
                  <span className="text-gradient">Customer Relationships</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-6 tp-text"
              >
                Elevate your business productivity with Tech Branzzo CRM. Manage leads,
                automate processes, and deliver exceptional customer experiences — all
                from one unified platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-6"
              >
                {crmFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="flex items-center mb-3"
                  >
                    <i className={`${feature.icon} text-primary me-3 text-xl`}></i>
                    <span className="tp-text">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <button className="tp-btn">Explore CRM</button>
                <a href="#crm-demo" className="tp-link-btn">
                  <i className="fas fa-play-circle me-2"></i>
                  Watch Overview
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
