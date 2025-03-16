import { Helmet } from "react-helmet-async";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";
import Form from "../components/Form";


function Contact() {

  return (
    <>
      <Helmet>
        <title>Contact - Portfolio</title>
        <meta name="description" content="Explore my latest projects including web development, UI/UX designs, and more." />
        <meta property="og:title" content="Contact - Portfolio" />
        <meta property="og:description" content="Explore my latest projects including web development, UI/UX designs, and more." />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:type" content="website" />
      </Helmet>


      <section className='w-full flex items-center justify-center gap-10 flex-col  pt-20 p-[2%]'>
      <motion.h1 className='relative px-[5%] text-[#ffb42a] text-[1.5em] md:text-[3em] tracking-[5px] font-medium font-bebas'
          initial={{ opacity: 1, y: "50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
          <RiDoubleQuotesL className='absolute left-0 top-0 opacity-60 text-2xl' />
          Contact
          <RiDoubleQuotesR className='absolute right-0 bottom-0 opacity-60 text-2xl' />
        </motion.h1>
      

        <div className='w-full h-full flex items-center justify-center flex-col relative gap-5'>
          <motion.p className='md:w-1/2 w-full p-2 text-center capitalize text-sm leading-7 font-semibold text-gray-700 dark:text-gray-50'
             initial={{opacity:0, y:"-50vh"}}
             animate={{opacity:1, y:0}}
             exit={{opacity:0, y:"50vh"}}
              transition={{duration:1, delay:0.5}}
          >I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have any other requests or questions, don't hesitate to contact me using below form either.</motion.p>
          <Form className="w-1/2 absolute top-0"/>
        </div>
      </section>
    </>
  )
}

export default Contact;