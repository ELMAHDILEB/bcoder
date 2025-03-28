import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Form from "../components/Form";
import contact from "../../public/contact.jpeg"


function Contact() {

  return (
    <>
      <Helmet>

        <title>Contact - Portfolio</title>
        <meta name="description" content="Get in touch with me for web development, UI/UX design, and collaboration opportunities." />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="author" content="Bcoder" />
        <meta name="googlebot" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Contact - Portfolio" />
        <meta property="og:description" content="Reach out for web development services, UI/UX projects, and collaborations." />
        <meta property="og:image" content={contact} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bcoder.vercel.app/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact - Portfolio" />
        <meta name="twitter:description" content="Reach out for web development services, UI/UX projects, and collaborations." />
        <meta name="twitter:image" content={contact} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>


      <section className='w-full flex items-center justify-center gap-10 flex-col  pt-20 p-[2%]'>
        <motion.h1 className='relative px-[5%] text-[#ffb42a] text-[1.5em]  sm:text-[3em] tracking-[5px] font-medium font-bebas'
          initial={{ opacity: 1, y: "50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
         
         {"{"} contact {"}"}
          
        </motion.h1>



        <div className='w-full h-full flex items-center justify-center flex-col relative gap-5'>
          <motion.p className=' w-full p-2 text-start capitalize text-sm leading-7 font-semibold text-gray-700 dark:text-gray-50'
            initial={{ opacity: 0, y: "-50vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "50vh" }}
            transition={{ duration: 1, delay: 0.5 }}
          >I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have any other requests or questions, don't hesitate to contact me using below form either.</motion.p>
          <Form className="w-1/2 absolute top-0" />
        </div>
      </section>
    </>
  )
}

export default Contact;