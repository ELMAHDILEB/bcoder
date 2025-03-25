import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import maktabatabufahd from "../assets/maktabatabufahd.webp";
import landingPagePaint from "../assets/landing-page-paint.webp";
import store from "../assets/store.webp";
import tajribatariya from "../assets/tajribatariya.webp";
import goodhome from "../assets/goodhome.webp";
import sellingcars from "../assets/sellingcars.webp";
import maktabestekdam from "../assets/maktabestekdam.webp";
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
        <title>Projects</title>
        <meta
          name="description"
          content="Check out my latest projects in web development, UI design, and user experience."
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="ar" />
        <meta name="author" content="EL MAHDI" />
        <meta
          name="googlebot"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          property="og:title"
          content="مشاريعي - Portfolio"
        />
        <meta
          property="og:description"
          content="Check out my latest projects in web development, UI design, and user experience."
        />
        <meta property="og:image" content="/projects.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bcoder.vercel.app/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="مشاريعي - Portfolio" />
        <meta
          name="twitter:description"
          content="Check out my latest projects in web development, UI design, and user experience."
        />
        <meta name="twitter:image" content="/projects.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <section className='w-full flex items-center justify-center gap-10 flex-col  py-10'>
        <motion.h1 className='relative px-[5%] text-[#ffb42a]  text-[1.5em] sm:text-[3em] tracking-[5px] font-medium font-bebas'
          initial={{ opacity: 1, y: "50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
           {"{"} projects {"}"}
         
        </motion.h1>

        {/* <menu className='w-full  md:max-w-6xl  mx-auto  flex items-start   flex-wrap gap-[20px] 	bg-red-600'> */}
        <menu className='w-full  md:max-w-6xl  mx-auto  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 	px-2 md:px-0'>

          {allProjects.slice(0, visible).map((project, index) => {
            const { img, title, link, technologies } = project;
            return (
              <motion.article className='h-[25em] border-bgOrange border-2 flex items-center  gap-2 flex-col font-poppins rounded-[5px] overflow-hidden' key={index}
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
                <div className='w-full h-[40%] flex flex-col justify-center items-center gap-3'>
                  <h3 className='w-fit relative after:absolute left-0 top-0 -z-10 -skew-y-3 bg-bgOrange '>{title}</h3>
                  <p>Technologies</p>
                  <span className='text-normal text-[12px] bg-slate-200 dark:bg-[#5e5e5e] px-[3px] py-[5px]  rounded-[5px]'>{technologies.join(" - ")}</span>
                  <a href={link} target="_blank" rel="noopener noreferrer" role='link' className='flex items-center gap-5 rounded-[5px] bg-bgOrange px-[5px] py-[5px]'>
                    View Project  <FaArrowRight className='hidden' />
                  </a>
                </div>
              </motion.article>
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
