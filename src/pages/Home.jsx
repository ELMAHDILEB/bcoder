import React from 'react'
import avatar from "../assets/avatar.png"
import { TbPointFilled } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiFiverr, SiUpwork } from "react-icons/si";
import { CiCoffeeCup } from "react-icons/ci";
import { easeIn, easeInOut, motion } from "framer-motion";

function Home() {

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
  ]
  return (
    <>

      <div className='w-full h-full  flex items-center justify-center lg:justify-evenly flex-col gap-[50px] overflow-hidden'>

        <motion.picture className='w-[150px] h-[150px]  overflow-hidden' initial={{ opacity: 0, y: "100%", }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: easeIn }}
        >

          <img src={avatar} alt='avatar' className='w-full h-full object-cover rounded-[50%] dark:border-white border-black border-4 ' />
        </motion.picture>

        <div className='flex flex-col  items-center justify-center gap-5 font-bebas text-center' >

          <motion.h1
            className="relative text-center dark:text-white text-[#181818] text-[1.5em] md:text-[3em] lg:text-[3.5em] font-bebas tracking-[2px] z-10"
            aria-label="Successful Front-end Development"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
          >

            <motion.div
              className="absolute left-0 top-0 -z-10 -skew-y-3 bg-[#ffb42a] h-full"
              variants={backgroundVariants}

              initial="hidden"
              animate="visible"
              transition={{ duration: 4, ease: easeInOut, delay: 1 }}
            />
            Successful Front-end Development
          </motion.h1>

          <motion.h2 className='md:text-[1.3em]  tracking-[2px] '

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}

          >Hi. I’m <span className='text-[1.5em] md:text-[3.5em]  text-[#ffb42a] ml-3 '>B</span>Coder, a freelance Front-end Developer with 3 years of commercial experience creating successful websites.</motion.h2>
          <motion.h3 className=' flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 6 }}
          ><TbPointFilled className='text-xl text-green-500' />Based in Morocco</motion.h3>
        </div>

        <div className='flex flex-wrap items-center gap-5'>
          {icons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a key={index} href={item.link} target='_blank' rel="noopener noreferrer" role='link' className='decoration-none text-xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 6.5 }}
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>

      </div>
    </>
  )
}

export default Home;