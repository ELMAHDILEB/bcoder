import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion"
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import maktabatabufahd from "../assets/maktabatabufahd.png";
import landingPagePaint from "../assets/landing-page-paint.png";
import store from "../assets/store.png";
import tajribatariya from "../assets/tajribatariya.png";
import goodhome from "../assets/goodhome.png";
import sellingcars from "../assets/sellingcars.png";
import maktabestekdam from "../assets/maktabestekdam.png";
import { FaArrowRight } from "react-icons/fa6";


function Projects() {
  const [visible, setVisible] = useState(3);
  const seeMore = () => {
    setVisible((prevVisible) => prevVisible + 3)

  }
  const allProjects = [
    {
      title: "GOODHOME V1",
      link: "https://elmahdileb.github.io/goodhome/",
      img: goodhome,
      technologies: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
      title: "التجربة الثرية",
      link: "https://elmahdileb.github.io/responsive-newsletter/",
      img: tajribatariya,
      technologies: ["HTML", "CSS"]
    },
    {
      title: "BEST SELLING CAR",
      link: "https://elmahdileb.github.io/sellingcars-app/dist/index.html",
      img: sellingcars,
      technologies: ["HTML", "TAILWINDCSS", "JAVASCRIPT"]
    },
    {
      title: " مكتب أبو فهد للـــــخدمات المالية",
      link: "https://elmahdileb.github.io/maktabtAbuFahd/",
      img: maktabatabufahd,
      technologies: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
      title: "STORE WEBSITE",
      link: "https://elmahdileb.github.io/responsive-store-website/STORE/",
      img: store,
      technologies: ["HTML", "CSS", "JAVASCRIPT"]
    },
    {
      title: "PAINT WEBSITE",
      link: "https://elmahdileb.github.io/landing-page-paint/",
      img: landingPagePaint,
      technologies: ["HTML", "CSS", "JAVASCRIPT, RevealJS"]
    },
    {
      title: "مكتب الاحتراف المهني للاستقدام ",
      link: "https://elmahdileb.github.io/maktabestekdam/",
      img: maktabestekdam,
      technologies: ["HTML", "CSS", "JAVASCRIPT"]
    },
  ]
  return (
    <>

      <Helmet>
        <title>My Projects - Portfolio</title>
        <meta name="description" content="Explore my latest projects including web development, UI/UX designs, and more." />
        <meta property="og:title" content="My Projects - Portfolio" />
        <meta property="og:description" content="Explore my latest projects including web development, UI/UX designs, and more." />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className='w-full flex items-center justify-center gap-10 flex-col  py-10'>
        <motion.h1 className='relative px-[5%] text-[#ffb42a] text-[1.5em] md:text-[3em] tracking-[5px] font-medium font-bebas'
          initial={{ opacity: 1, y: "50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
          <RiDoubleQuotesL className='absolute left-0 top-0 opacity-60 text-2xl' />
          Projects
          <RiDoubleQuotesR className='absolute right-0 bottom-0 opacity-60 text-2xl' />
        </motion.h1>

        {/* <menu className='w-full  md:max-w-6xl  mx-auto  flex items-start   flex-wrap gap-[20px] 	bg-red-600'> */}
        <menu className='w-full  md:max-w-6xl  mx-auto  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 	px-2 md:px-0'>

          {allProjects.slice(0, visible).map((project, index) => {
            const { img, title, link, technologies } = project;
            return (
              <motion.div className='h-[25em]   border-bgOrange border-2 flex items-center  gap-2 flex-col font-poppins' key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <div className='h-[60%] w-full overflow-hidden'>
                  <img src={img} alt={title} aria-hidden="true" loading="lazy" className='w-full h-full object-fit cursor-pointer' />
                </div>
                <div className='w-full h-[40%] flex flex-col justify-center items-center gap-5'>
                  <h3 className='w-fit relative after:absolute left-0 top-0 -z-10 -skew-y-3 bg-bgOrange '>{title}</h3>
                  <p>Technologies</p>
                  <span className='text-normal text-[12px]'>{technologies.join(" - ")}</span>
                  <a href={link} target="_blank" rel="noopener noreferrer" role='link' className='flex items-center gap-10'>
                    View Project  <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            )
          })}



        </menu>
        {visible < allProjects.length &&
          <motion.button onClick={seeMore} className='relative after:absolute after:left-0 after:top-0 after:-z-10 -skew-y-3 bg-bgOrange cursor-pointer text-3xl font-poppins rounded-[4px]'
            initial={{ opacity: 1, y: "-50vh", }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50vh" }}
            transition={{ duration: 1 }}
          >See More...
          </motion.button>
        }

      </section>
    </>
  );
}

export default Projects;
