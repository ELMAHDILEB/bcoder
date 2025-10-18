import { memo } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGit, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiRevealdotjs, SiAdobephotoshop } from "react-icons/si";
import MetaTags from "../components/MetaTags";
import { MetaData } from "../constants/MetaData";

const skills = [
  { title: "HTML", icon: FaHtml5 },
  { title: "CSS", icon: FaCss3Alt },
  { title: "JAVASCRIPT", icon: FaJs },
  { title: "REACT JS", icon: FaReact },
  { title: "Node Js", icon: FaNodeJs },
  { title: "Express Js", icon: SiExpress },
  { title: "tailwindcss", icon: SiTailwindcss },
  { title: "PHP", icon: FaPhp },
  { title: "Git", icon: FaGit },
  { title: "Revealdotjs", icon: SiRevealdotjs },
  { title: "Figma", icon: FaFigma },
  { title: "Photoshop", icon: SiAdobephotoshop },
];


const backgroundVariants = { hidden: { width: "0%" }, visible: { width: "100%" } };
const listItemVariants = (i) => ({ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: i * 0.2 } } });

function About() {
  return (
    <>
      <MetaTags {...MetaData.about} />
      <section className="w-full flex flex-col items-center gap-10 pt-20 pb-20">
        <motion.h1
          className='relative px-[5%] text-[#ffb42a] text-[1.5em] sm:text-[3em] tracking-[5px] font-medium font-bebas'
          initial={{ opacity: 1, y: "50vh" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
          {"{"} about {"}"}
        </motion.h1>

        <motion.article
          className="w-4/5 md:w-full text-start"
          initial={{ opacity: 0, y: "-50vh" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
          <p className="capitalize text-sm leading-7 font-semibold text-gray-700 dark:text-gray-50">
            I am an enthusiastic and driven front-end developer aspiring to join a forward-thinking organization where I can explore innovative technologies and contribute to exciting, multifaceted projects. My solid expertise in front-end development empowers me to create impactful digital experiences.
            With a passion for continuous learning, I thrive on solving complex challenges and refining my critical thinking abilities. Staying ahead of industry trends and advancing my technical skills is a key priority, as I strive to deliver exceptional solutions in the ever-evolving tech landscape.
          </p>
        </motion.article>

        <section className="w-4/5 md:w-full flex flex-col items-center gap-10">
          <motion.h2
            className="w-fit relative mx-auto text-black dark:text-white md:text-[2em] font-bebas tracking-[4px] text-[1.2em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <motion.div
              className="absolute left-0 top-0 -z-10 -skew-y-3 bg-[#ffb42a] h-full"
              variants={backgroundVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
            />
            Languages and Tools
          </motion.h2>

          <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.li
                  key={index}
                  className="h-[50px] px-2 flex items-center justify-center gap-3 border dark:border-white border-black rounded-[5px] uppercase text-black dark:text-white hover:cursor-pointer transition-all duration-500"
                  variants={listItemVariants(index)}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    borderColor: "#ffb42a",
                    borderWidth: "2px",
                    boxShadow: "0px -2px 5px rgba(255,180,42,0.3), 0px 2px 5px rgba(255,180,42,0.3)",
                    transition: { duration: 0.4 },
                  }}
                >
                  <Icon size={30} className="text-[#ffb42a]" />
                  <span className="text-center capitalize text-sm leading-7 font-semibold text-gray-700 dark:text-gray-50">{skill.title}</span>
                </motion.li>
              );
            })}
          </ul>
        </section>
      </section>
    </>
  );
}

export default memo(About);
