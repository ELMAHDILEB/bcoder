import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>About - Portfolio</title>
        <meta name="description" content="Explore my latest projects including web development, UI/UX designs, and more." />
        <meta property="og:title" content="About - Portfolio" />
        <meta property="og:description" content="Explore my latest projects including web development, UI/UX designs, and more." />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="w-full flex items-center justify-center gap-10 flex-col  pt-20 pb-20">
      <motion.h1 className='relative px-[5%] text-[#ffb42a] text-[1.5em] md:text-[3em] tracking-[5px] font-medium font-bebas'
          initial={{ opacity: 1, y: "50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
          <RiDoubleQuotesL className='absolute left-0 top-0 opacity-60 text-2xl' />
          About
          <RiDoubleQuotesR className='absolute right-0 bottom-0 opacity-60 text-2xl' />
        </motion.h1>

        <motion.article className="w-4/5 md:w-full text-start md:text-start"
          initial={{ opacity: 0, y: "-50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
          <motion.p aria-label="description" className="capitalize text-sm leading-7 font-semibold text-gray-700 dark:text-gray-50">
            I am an enthusiastic and driven front-end developer aspiring to join a forward-thinking organization where I can explore innovative technologies and contribute to exciting, multifaceted projects. My solid expertise in front-end development empowers me to create impactful digital experiences.

            With a passion for continuous learning, I thrive on solving complex challenges and refining my critical thinking abilities. Staying ahead of industry trends and advancing my technical skills is a key priority, as I strive to deliver exceptional solutions in the ever-evolving tech landscape.
          </motion.p>
        </motion.article>

        <section className="w-4/5 md:w-full flex flex-col align-center justify-center  gap-10">
          <motion.h1 className="w-fit h-fit relative mx-auto my-0 text-black dark:text-white  md:text-[2em] font-bebas tracking-[4px] text-[1.2em]"
            aria-label="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}>
            <motion.div
              className=" absolute left-0 top-0 -z-10 -skew-y-3 bg-[#ffb42a] h-full "
              variants={backgroundVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
            />
            Languages and Tools

          </motion.h1>

              <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5 " initial={{ opacity: 0 }}
      
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}>


            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.li key={index} aria-label={skill.title} className="h-[50px] px-2  flex items-center justify-center gap-3 border border-1 dark:border-white border-black rounded-[5px] uppercase text-black dark:text-white hover:cursor-pointer transition-all duration-500" initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay:  index * 0.2,
                  }}
                  whileHover={{
                    borderColor: "#ffb42a",
                    borderWidth: "2px",
                    boxShadow: "0px -2px 5px rgba(255, 180, 42, 0.3), 0px 2px 5px rgba(255, 180, 42, 0.3)",
                    transition: { duration: 0.4 },
                  }}
                >
                  <Icon size={30} className=" text-[#ffb42a]" aria-label={skill.title} role="logo" />
                  <span className="text-center capitalize text-sm leading-7 font-semibold text-gray-700 dark:text-gray-50">{skill.title}</span>
                </motion.li>
              )
            })}

          </ul>
        </section>

      </section>





    </>
  );
}

export default About;
