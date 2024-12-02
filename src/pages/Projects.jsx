import React, { useState } from 'react';
import {motion} from "framer-motion"
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import maktabatabufahd from "../assets/maktabatabufahd.jpeg";
import landingPagePaint from "../assets/landing-page-paint.jpeg";
import store from "../assets/store.jpeg";
import tajribatariya from "../assets/tajribatariya.jpeg";
import goodhome from "../assets/good.png";
import sellingcars from "../assets/sellingcars.jpeg";
import maktabestekdam from "../assets/maktabestekdam.jpeg";
import { FaArrowRight } from "react-icons/fa6";


function Projects() {
  const [visible, setVisible] = useState(3);
  const seeMore = ()=>{
    setVisible((prevVisible)=>prevVisible +3)
  }
  const allProjects = [
    {
      title: "GOODHOME V1",
      link: "https://elmahdileb.github.io/goodhome/",
      img:goodhome,
      technologies:["HTML", "CSS", "JAVASCRIPT"]
    },
    {
      title: "التجربة الثرية",
      link: "https://elmahdileb.github.io/responsive-newsletter/",
      img:tajribatariya,
      technologies:["HTML", "CSS"]
    },
    {
      title: "BEST SELLING CAR",
      link: "https://elmahdileb.github.io/sellingcars-app/dist/index.html",
      img:sellingcars,
      technologies:["HTML", "TAILWINDCSS", "JAVASCRIPT"]
    },
    {
      title:" مكتب أبو فهد للـــــخدمات المالية",
      link: "https://elmahdileb.github.io/maktabtAbuFahd/",
      img:maktabatabufahd,
      technologies:["HTML", "CSS", "JAVASCRIPT"]
    },
    {
      title: "STORE WEBSITE",
      link: "https://elmahdileb.github.io/responsive-store-website/STORE/",
      img:store,
      technologies:["HTML", "CSS", "JAVASCRIPT"]
    },
    {
      title: "PAINT WEBSITE",
      link: "https://elmahdileb.github.io/landing-page-paint/",
      img:landingPagePaint,
      technologies:["HTML", "CSS", "JAVASCRIPT, RevealJS"]
    },
    {
      title: "مكتب الاحتراف المهني للاستقدام ",
      link: "https://elmahdileb.github.io/landing-page-paint/",
      img:maktabestekdam,
      technologies:["HTML", "CSS", "JAVASCRIPT"]
    },
  ]
  return (
  <>
      
    <section className='w-full flex items-center justify-center gap-10 flex-col  pt-20'>
      <motion.h1 className='relative px-[5%] text-[#ffb42a] text-[1.5em] md:text-[3em] font-bebas tracking-[2px]'
          initial={{ opacity: 1, y: "50vh", }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50vh" }}
        transition={{ duration: 1 }}
      >
        <RiDoubleQuotesL className='absolute left-0 top-0 opacity-60'/>
        Projects
        <RiDoubleQuotesR className='absolute right-0 bottom-0 opacity-60'/>
      </motion.h1>
      
      <menu className='w-full  max-w-[1000px] flex  items-center justify-center md:justify-between flex-wrap gap-5 	'>
     
      {allProjects.slice(0,visible).map((project, index)=>{
        const {img, title,link,technologies} = project;
        return (
          <motion.div className='w-full max-w-[318px] h-[22em]  border-bgOrange border-2 flex items-center  gap-2 flex-col font-poppins' key={index}
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{
            duration:0.5,
            delay:1 + index * 0.2,
           }}
          >
          <div className='h-[13em] w-full overflow-hidden'>
            <img src={img} alt={title} aria-hidden="true" className='w-full h-full object-cover hover:scale-[1.1]  transition-all duration-500 cursor-pointer'/>
          </div>
         <h3 className='w-fit relative after:absolute left-0 top-0 -z-10 -skew-y-3 bg-bgOrange '>{title}</h3>
          <p>Technologies</p>
          <span className='text-bold'>{technologies.join(" - ")}</span>
          <a href={link} target="_blank" rel="noopener noreferrer" role='link' className='flex items-center gap-10'>
              View Project  <FaArrowRight/>
            </a>
        </motion.div>
        )
      })}

     
   
      </menu>
      <motion.button onClick={seeMore} className='relative after:absolute after:left-0 after:top-0 after:-z-10 -skew-y-3 bg-bgOrange cursor-pointer text-3xl font-poppins'
         initial={{ opacity: 1, y: "-50vh", }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50vh" }}
        transition={{ duration: 1 }}
      >See More...
      </motion.button>
        
    </section>
  </>
  );
}

export default Projects;
