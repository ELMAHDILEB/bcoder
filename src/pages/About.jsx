import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGit, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiRevealdotjs, SiAdobephotoshop } from "react-icons/si";
import { motion } from "framer-motion";


function About() {


  const skills = [
    {
      title: "HTML",
      icon: FaHtml5,
    },
    {
      title: "CSS",
      icon: FaCss3Alt,
    },
    {
      title: "JAVASCRIPT",
      icon: FaJs,
    },
    {
      title: "REACT JS",
      icon: FaReact,
    },
    {
      title: "Node Js",
      icon: FaNodeJs,
    },
    {
      title: "Express Js",
      icon: SiExpress,
    },
    {
      title: "tailwindcss",
      icon: SiTailwindcss,
    },
    {
      title: "PHP",
      icon: FaPhp,
    },
    {
      title: "Git",
      icon: FaGit,
    },
    {
      title: "Revealdotjs",
      icon: SiRevealdotjs,
    },
    {
      title: "Figma",
      icon: FaFigma,
    },
    {
      title: "Photoshop",
      icon: SiAdobephotoshop,
    },

  ];



  const backgroundVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%" },
  };

  return (
    <>
      <section className="w-full flex items-center justify-center gap-10 flex-col  pt-20">
        <motion.h1
          className="w-fit h-fit flex items-center justify-center relative px-[5%] text-[#ffb42a] text-[3em] font-bebas tracking-[2px]"
          aria-label="About Me"
          initial={{ opacity: 0, y: "50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
          <RiDoubleQuotesL
            className="absolute left-0 top-0 opacity-50"
            aria-hidden="true"
          />
          About Me
          <RiDoubleQuotesR
            className="absolute right-0 bottom-0 opacity-50"
            aria-hidden="true"

          />
        </motion.h1>

        <motion.article className="w-4/5 md:w-full text-start md:text-start"
          initial={{ opacity: 0, y: "-50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
          <motion.p aria-label="description" className="font-poppins text-normal text-sm tracking-[1px]  leading-[1.50rem]">
            I am an enthusiastic and driven front-end developer aspiring to join a forward-thinking organization where I can explore innovative technologies and contribute to exciting, multifaceted projects. My solid expertise in front-end development empowers me to create impactful digital experiences.

            With a passion for continuous learning, I thrive on solving complex challenges and refining my critical thinking abilities. Staying ahead of industry trends and advancing my technical skills is a key priority, as I strive to deliver exceptional solutions in the ever-evolving tech landscape.
          </motion.p>
        </motion.article>

        <nav className="w-4/5 md:w-full flex flex-col align-center justify-center  gap-10">
          <motion.h1 className="w-full h-fit relative text-center text-black dark:text-white  md:text-[1.5em] font-bebas tracking-[2px]"
            aria-label="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}>
            <motion.div
              className=" absolute left-0 top-0 -z-10 -skew-y-3 bg-[#ffb42a] h-full"
              variants={backgroundVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 4, ease: "easeInOut", delay: 1 }}
            />
            Languages and Tools

          </motion.h1>

          <ul className="flex flex-wrap align-center justify-center gap-10 md:justify-start" initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}>


            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.li key={index} aria-label={skill.title} className=" w-[150px] h-[50px] px-2  flex items-center justify-center gap-3 border border-1 dark:border-white border-black rounded-[5px] uppercase text-black dark:text-white hover:cursor-pointer transition-all duration-500" initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 5 + index * 0.2,
                  }}
                  whileHover={{
                    borderColor: "#ffb42a",
                    borderWidth: "2px",
                    boxShadow: "0px -2px 5px rgba(255, 180, 42, 0.3), 0px 2px 5px rgba(255, 180, 42, 0.3)",
                    transition: { duration: 0.4 },
                  }}
                >
                  <Icon size={30} className=" text-[#ffb42a]" aria-label={skill.title} role="logo" />
                  <span>{skill.title}</span>
                </motion.li>
              )
            })}

          </ul>
        </nav>

      </section>





    </>
  );
}

export default About;
