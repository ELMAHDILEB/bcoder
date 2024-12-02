import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import avatar from "../assets/avatar1.png";
import { motion } from "framer-motion";
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


      <section className='w-full flex items-center justify-center gap-4 flex-col  pt-20 font-bebas text-black dark:text-white '>
        <motion.h1 className='relative px-[5%] text-bgOrange text-[1.5em] md:text-[3em]  tracking-[2px]'
          initial={{ opacity: 0, y: "50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}

        > <RiDoubleQuotesL className='absolute left-0 top-0 opacity-[0.5]' /> Testimonials <RiDoubleQuotesR className='absolute right-0 bottom-0 opacity-[0.5]' /></motion.h1>
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
          className="mySwiper"
        >
          {clients.map((client, index) => {
            const { name, comment, link, stars } = client;
            return (
              <SwiperSlide key={index} className='pb-10 cursor-pointer'
              >
                <motion.div className='w-[300px] h-fit p-10 dark:bg-[#5e5e5e] bg-[#dee4ec] text-black font-bebas flex flex-col items-center justify-evenly gap-5 rounded-[10px]'
                  initial={{ opacity: 0, y: "100vh" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "100vh" }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className='w-[6em] h-[6em] overflow-hidden relative after:absolute after:content-[" "] after:top-0 after:left-0 after:bg-bgOrange after:w-full after:h-full after:-z-1 after:rounded-full'>
                    <img src={avatar} alt={name} className='w-full h-full object-cover absolute z-10' />
                  </div>
                  <h1 className='relative after:absolute after:left-0 after:top-0 after:-z-10 -skew-y-3 bg-bgOrange  cursor-pointer text-xl '>{name}</h1>
                  <p className='text-center w-full h-[150px] flex items-center justify-center'>{comment}</p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: stars }, (_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <a href={link} target='_blank'>Preview</a>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </section>
    </>
  )
}

export default Testimonials;