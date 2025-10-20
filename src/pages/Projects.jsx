import maktabatabufahd from "../assets/maktabatabufahd.webp";
import landingPagePaint from "../assets/landing-page-paint.webp";
import store from "../assets/store.webp";
import tajribatariya from "../assets/tajribatariya.webp";
import amlouinou from "../assets/amlouinou.webp";
import goodhome from "../assets/goodhome.webp";
import sellingcars from "../assets/sellingcars.webp";
import maktabestekdam from "../assets/maktabestekdam.webp";
import { memo, useState } from 'react';
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { MetaData } from '../constants/MetaData';
import MetaTags from '../components/MetaTags';

const articleVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({ opacity: 1, transition: { duration: 0.5, delay: i * 0.2 } })
};

const buttonVariants = {
  hidden: { opacity: 0, y: "-50vh" },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const allProjects = [
  { title: "Amlou Inou Ecommerce", link: "https://amlou-ecommerce-website.vercel.app/", img: amlouinou, technologies: ["REACTJS", "TAILWIND CSS"] },
  { title: "GOODHOME V1", link: "https://elmahdileb.github.io/goodhome/", img: goodhome, technologies: ["HTML", "CSS", "JAVASCRIPT"] },
  { title: "التجربة الثرية", link: "https://elmahdileb.github.io/responsive-newsletter/", img: tajribatariya, technologies: ["HTML", "CSS"] },
  { title: "BEST SELLING CAR", link: "https://elmahdileb.github.io/sellingcars-app/dist/index.html", img: sellingcars, technologies: ["HTML", "TAILWINDCSS", "JAVASCRIPT"] },
  { title: " مكتب أبو فهد للـــــخدمات المالية", link: "https://elmahdileb.github.io/maktabtAbuFahd/", img: maktabatabufahd, technologies: ["HTML", "CSS", "JAVASCRIPT"] },
  { title: "STORE WEBSITE", link: "https://elmahdileb.github.io/responsive-store-website/STORE/", img: store, technologies: ["HTML", "CSS", "JAVASCRIPT"] },
  { title: "PAINT WEBSITE", link: "https://elmahdileb.github.io/landing-page-paint/", img: landingPagePaint, technologies: ["HTML", "CSS", "JAVASCRIPT, RevealJS"] },
  { title: "مكتب الاحتراف المهني للاستقدام ", link: "https://elmahdileb.github.io/maktabestekdam/", img: maktabestekdam, technologies: ["HTML", "CSS", "JAVASCRIPT"] },
];

function Projects() {
  const [visible, setVisible] = useState(3);
  const seeMore = () => setVisible(prev => prev + 3);

  return (
    <>
      <MetaTags {...MetaData.projects} />
      <section className='w-full flex flex-col items-center gap-10 py-10 relative z-10'>
        <motion.h1
          className='relative px-[5%] text-[#ffb42a] text-[1.5em] sm:text-[3em] tracking-[5px] font-medium font-bebas'
          initial={{ opacity: 1, y: "50vh" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
          {"{"} projects {"}"}
        </motion.h1>

        <menu className='w-full md:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 px-2 md:px-0'>
          {allProjects.slice(0, visible).map(({ img, title, link, technologies }, index) => (
            <motion.article
              key={index}
              className='h-[25em] border-bgOrange border-2 flex flex-col items-center gap-2 font-poppins rounded-[5px] overflow-hidden'
              custom={index}
              variants={articleVariants}
              initial="hidden"
              animate="visible"
            >
              <div className='h-[60%] w-full overflow-hidden'>
                <img src={img} alt={title} loading="lazy" className='w-full h-full object-cover cursor-pointer' />
              </div>
              <div className='w-full h-[40%] flex flex-col justify-center items-center gap-3 dark:bg-[#5e5e5e] bg-[#dee4ec]'>
                <h3 className='w-fit relative after:absolute left-0 top-0 -z-10 -skew-y-3 bg-bgOrange'>{title}</h3>
                <p>Technologies</p>
                <span className='text-[12px] bg-slate-200 dark:bg-[#5e5e5e] px-3 py-1 rounded-[5px]'>{technologies.join(" - ")}</span>
                <a href={link} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 rounded-[5px] bg-bgOrange px-3 py-1'>
                  View Project <FaArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </menu>

        {visible < allProjects.length && (
          <motion.button
            onClick={seeMore}
            className='relative after:absolute after:left-0 after:top-0 after:-z-10 -skew-y-3 bg-bgOrange cursor-pointer text-3xl font-poppins rounded-[4px]'
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            See More...
          </motion.button>
        )}
      </section>
    </>
  );
}

export default memo(Projects);

