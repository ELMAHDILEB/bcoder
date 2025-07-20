import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import avatar1 from "../assets/avatarTestimonials/avatar1_w_200.webp";
import avatar2 from "../assets/avatarTestimonials/avatar1_w_617.webp";
import avatar3 from "../assets/avatarTestimonials/avatar1_w_915.webp";
import avatar from "../assets/avatarTestimonials/avatar1.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../styles.css';



function Testimonials() {


  const clients = [
    {
      name: "مكتب ا.",
      comment: "من افضل المصممين ونشيط ومتعاون",
      link: "https://khamsat.com/user/medbel09/reviews/1008827",
      stars: 5
    },
    {
      name: ".Abdalrahman A ",
      comment: "مشكور اخي الله يعطيك العافيه فعلن تصميم حلو وجميل جدا ",
      link: "https://khamsat.com/user/medbel09/reviews/998846",
      stars: 5
    },
    {
      name: ".Habib B",
      comment: "Great job , keep going",
      link: "https://khamsat.com/user/medbel09/reviews/993496",
      stars: 4
    },
    {
      name: "بيان س.",
      comment: "شخص ممتاز ومتقن عمله ",
      link: "https://khamsat.com/user/medbel09/reviews/873777",
      stars: 5
    },
    {
      name: "عمار ا.",
      comment: "شخص رائع ومتعاون ومتفاني في إرضاء العميل .. وأخلاق عالية أنصح بالتعامل معه .. لن يتركك في منتصف الطريق .. هذه تجربتي وهذه شهادتي شكرا لك",
      link: "https://khamsat.com/user/medbel09/reviews/867184",
      stars: 5
    },
    {
      name: ".Abunawaf H",
      comment: "يعطيك العافيه",
      link: "https://khamsat.com/user/medbel09/reviews/862104",
      stars: 5
    },
  ]
  return (
    <>
      <Helmet>
        <title>Client Testimonials | bcoder - What People Say</title>

        <meta
          name="description"
          content="Read what clients and collaborators say about working with bcoder — real feedback on web development, design quality, and professionalism."
        />
        <meta
          name="keywords"
          content="bcoder testimonials, client reviews, feedback, web development reviews, UI/UX feedback, portfolio testimonials, what clients say, developer reputation"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="author" content="bcoder" />
        <meta
          name="googlebot"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Client Testimonials | bcoder" />
        <meta
          property="og:description"
          content="See what clients say about working with bcoder — real feedback on professionalism, web development, and UI/UX quality."
        />
        <meta property="og:image" content="/testimonials.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bcoder.vercel.app/testimonials" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Client Testimonials | bcoder" />
        <meta
          name="twitter:description"
          content="Discover what clients and partners think of working with bcoder. Honest reviews from real projects."
        />
        <meta name="twitter:image" content="/testimonials.jpeg" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>


      <section className='w-full flex items-center justify-center gap-4 flex-col  pt-20 font-bebas text-black dark:text-white '>
        <motion.h1 className='relative px-[5%] text-[#ffb42a] text-[1.5em] sm:text-[3em] tracking-[5px] font-medium font-bebas'
          initial={{ opacity: 1, y: "50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
          {"{"} testimonials {"}"}
        </motion.h1>

        <motion.h2 className='tracking-[2px] opacity-[0.8] text-[1.2em]'
          initial={{ opacity: 0, y: "-50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >What Our Client Say</motion.h2>
        <Swiper

          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper w-full swiper-container"
        >
          {clients.map((client, index) => {
            const { name, comment, link, stars } = client;
            return (
              <SwiperSlide key={index} className='pb-10 cursor-pointer'
              >
                <motion.article className='w-[300px] h-fit p-10 dark:bg-[#5e5e5e] bg-[#dee4ec] text-black font-bebas flex flex-col items-center justify-evenly gap-5 rounded-[10px] hover:scale-105 transition-transform duration-300'
                  initial={{ opacity: 0, y: "100vh" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "100vh" }}
                  transition={{ duration: 1 }}
                >
                  <div className='w-[6em] h-[6em] overflow-hidden relative after:absolute after:content-[" "] after:top-0 after:left-0 after:bg-bgOrange after:w-full after:h-full after:-z-1 after:rounded-full'>
                    {/* <img src={avatar} alt={name} className=' object-cover absolute z-10'  loading='lazy'  width='100%' height='100%'  role='avatar'/> */}
                    <img
                      className=' object-cover absolute z-10' loading='lazy' width='100%' height='100%' role='avatar'
                      sizes="(max-width: 1400px) 100vw, 1400px"
                      srcSet={`${avatar1} 200w, ${avatar2} 617w, ${avatar3} 915w,`}
                      src={avatar}
                      alt={name}></img>
                  </div>
                  <h1 className='relative after:absolute after:left-0 after:top-0 after:-z-10 -skew-y-3 bg-bgOrange  cursor-pointer text-xl '>{name}</h1>
                  <p className='text-center w-full h-[150px] flex items-center justify-center text-black dark:text-white'>{comment}</p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: stars }, (_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <a href={link} target='_blank' className="tracking-[2px] px-4 py-2 bg-[#2a5c92] text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Preview
                  </a>
                </motion.article>
              </SwiperSlide>
            );
          })}
        </Swiper>


      </section>
    </>
  )
}

export default Testimonials;