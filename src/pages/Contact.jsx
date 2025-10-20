import { motion } from "framer-motion";
import Form from "../components/Form";
import { MetaData } from "../constants/MetaData";
import MetaTags from "../components/MetaTags";
import { memo } from "react";

const textVariants = {
  hidden: { opacity: 0, y: "-50vh" },
  visible: { opacity: 1, y: 0 },
};

function Contact() {

  return (
    <>
      <MetaTags {...MetaData.contact} />
      <section className='w-full flex items-center justify-center gap-10 flex-col  pt-20 p-[2%] relative z-10'>
        <motion.h1 className='relative px-[5%] text-[#ffb42a] text-[1.5em]  sm:text-[3em] tracking-[5px] font-medium font-bebas'
          initial={{ opacity: 1, y: "50vh", }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50vh" }}
          transition={{ duration: 1 }}
        >
          {"{"} contact {"}"}
        </motion.h1>
        <div className='w-full h-full flex items-center justify-center flex-col relative gap-5'>
        <motion.p
          className='w-full p-2 text-start capitalize text-sm leading-7 font-semibold text-gray-700 dark:text-gray-50'
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1, delay: 0.5 }}
        >I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have any other requests or questions, don't hesitate to contact me using below form either.</motion.p>
          <Form className="w-1/2 absolute top-0" />
        </div>
      </section>
    </>
  )
}

export default memo(Contact);