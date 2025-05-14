'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import content from './Navcontent'
import useSticky from '@/src/hooks/use-sticky'
import logo_white from "../../../public/assets/img/logo/logo-white.png"
import logo_black from "../../../public/assets/img/logo/logo-black.png"
import { HiMenu, HiX } from 'react-icons/hi'

const HeaderEight = ({ style_2 = false }) => {
  const { sticky } = useSticky()
  const [isOpen, setIsOpen] = useState(false)

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }
    }
  }

  const linkHover = {
    scale: 1.1,
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  }

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`header-bottom__area z-50 header-sticky-bg-2 ${sticky ? 'header-sticky' : ''} ${style_2 ? 'inner-header-2' : ''}`}
      >
        <div className="container">
          <div className="row g-0 align-items-center">
            {/* Logo */}
            <div className="col-6 col-md-4 col-lg-2">
              <div className="header-bottom__logo">
                <Link href="/" className="white-logo">
                  <Image src={logo_white} alt="logo" />
                </Link>
                <Link href="/" className="black-logo">
                  <Image src={logo_black} alt="logo" />
                </Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="col-lg-7 d-none d-lg-block">
              <div className="d-flex align-items-center gap-4 justify-content-center">
                {content.navLinks.map((link, i) => (
                  <motion.div key={i} whileHover={linkHover}>
                    <Link
                      href={link.href}
                      className="text-white text-base font-medium hover:text-purple-200 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="col-6 col-md-8 col-lg-3">
              <div className="d-flex justify-content-end align-items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} className="d-none d-md-block">
                  <Link
                    href={content.cta.href}
                    className="bg-white text-indigo-600 px-5 py-2 rounded-full shadow-md hover:bg-purple-100 hover:shadow-lg transition-all font-semibold"
                  >
                    {content.cta.text}
                  </Link>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white d-lg-none"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="fixed top-0 right-0 h-screen w-4/5 sm:w-3/5 bg-gradient-to-b from-indigo-700 to-purple-800 shadow-2xl flex flex-col items-start gap-8 p-8 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className="self-end mb-4 text-white"
            >
              <HiX size={30} />
            </motion.button>

            {content.navLinks.map((link, i) => (
              <motion.div key={i} whileHover={linkHover}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl font-semibold hover:text-purple-200 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} className="w-full">
              <Link
                href={content.cta.href}
                onClick={() => setIsOpen(false)}
                className="block text-center bg-white text-indigo-600 px-6 py-3 rounded-full shadow-md hover:bg-purple-100 hover:shadow-lg font-semibold"
              >
                {content.cta.text}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default HeaderEight
