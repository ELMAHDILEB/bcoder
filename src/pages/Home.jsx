import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import avatar from "../assets/avatar.webp";
import { TbPointFilled } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiFiverr, SiUpwork } from "react-icons/si";
import { CiCoffeeCup } from "react-icons/ci";
import { easeIn, easeInOut, motion } from "framer-motion";

const Home = memo(() => {

  const backgroundVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%" },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const icons = [
    { icon: FaGithub, link: "https://github.com/ELMAHDILEB" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/el-mahdi-belcadi-b62570236/" },
    { icon: FaYoutube, link: "https://www.youtube.com/@okforcoding/videos" },
    { icon: FaTwitter, link: "https://x.com/elmahdicoder" },
    { icon: SiLeetcode, link: "https://leetcode.com/u/ELMAHDILEB/" },
    { icon: SiFiverr, link: "https://khamsat.com/user/medbel09/services" },
    { icon: SiUpwork, link: "https://www.upwork.com/freelancers/~011f7460d12065053a" },
    { icon: CiCoffeeCup, link: "https://buymeacoffee.com/?via=mehdibelcau" },
  ];

  return (
    <>
      <Helmet>
        <title>Home Page - Portfolio</title>
        <meta name="description" content="Explore my latest projects including web development, UI/UX designs, and more." />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="author" content="Bcoder" />
        <meta name="googlebot" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Home Page - Portfolio" />
        <meta property="og:description" content="Explore my latest projects including web development, UI/UX designs, and more." />
        <meta property="og:image" content="/home,jpeg" /> 
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bcoder.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page - Portfolio" />
        <meta name="twitter:description" content="Explore my latest projects including web development, UI/UX designs, and more." />
        <meta name="twitter:image" content="/home,jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <section className='w-full md:w-[80%] calcHeight mx-auto'>
        <div className="w-full h-full flex items-center justify-evenly flex-col gap-[50px] overflow-hidden px-4 md:px-0">
          <motion.picture
            className="w-[150px] h-[150px] overflow-hidden"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: easeIn }}
          >
            <img
              src={avatar}
              alt="avatar"
              className="w-full h-full object-cover rounded-[50%] dark:border-white border-black border-4"
              loading="lazy"
            />
          </motion.picture>

          <div className="flex flex-col items-center justify-center gap-5 font-bebas text-center">
            <motion.h1
              className="relative text-center dark:text-white text-[#181818] font-bold  font-bebas tracking-[2px] md:tracking-[4px] z-10 text-[clamp(30px,3vw,200px)]"
              aria-label="Successful Front-end Development"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.div
                className="absolute left-0 top-0 -z-10 -skew-y-3 bg-[#ffb42a] h-full"
                variants={backgroundVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.2, ease: easeInOut, delay: 0.5 }}
              />
              Successful Front-end Developer
            </motion.h1>

            <motion.h2
              className="tracking-[2px] font-bold text-[14px] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              style={{fontFamily: "Poppins", "sans-serif"}}
            >
              Hi. I’m <span className="text-[#ffb42a] ml-3 font-black text-[3em] font-bebas leading-[50px]">B</span>Coder, a freelance Front-end Developer with 3 years of commercial experience creating successful websites.
            </motion.h2>
            <motion.h3
              className="flex items-center justify-center tracking-[4px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.3, delay: 1.3 }}
            >
              <TbPointFilled className="text-xl text-green-500" />
              Based in Morocco
            </motion.h3>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            {icons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="link"
                  aria-label="View Profile"
                  className="decoration-none text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.3, delay: 1.3 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default Home;
