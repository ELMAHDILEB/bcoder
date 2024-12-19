import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

function Form() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hvoujea', 'template_dim2f5f', form.current, {
        publicKey: 'W4UZzhhDWjLFjar0Y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        action=""
        className="w-full md:w-[50%] h-auto flex flex-col items-center justify-center gap-4  p-6 rounded-md shadow-md "
        method="POST"
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100vh" }}
        transition={{ duration: 1, delay: 0.5 }}
      >



        <label htmlFor="name" className=" uppercase text-semibold">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full max-w-[400px] h-[40px] rounded-md bg-gray-200 border-none outline-none text-center text-black"
          placeholder="Your Name"
        />


        <label htmlFor="num" className=" uppercase text-semibold">
          Number Phone:
        </label>
        <input
          type="text"
          name="num"
          id="num"
          className="w-full max-w-[400px] h-[40px] rounded-md bg-gray-200 border-none outline-none text-center  text-black"
          placeholder="Number Phone"
        />


        <label htmlFor="subject" className=" uppercase text-semibold">
          Subject:
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="w-full max-w-[400px] h-[40px] rounded-md bg-gray-200 border-none outline-none text-center text-black"
          placeholder="Subject"
        />


        <label htmlFor="message" className=" uppercase text-semibold">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          className="w-full max-w-[400px] h-[200px] rounded-md bg-gray-200 border-none outline-none p-2 resize-none text-black"
          placeholder="Message"
        ></textarea>

        <button
          className="relative after:absolute after:left-0 after:top-0 after:-z-10 -skew-y-3 bg-bgOrange  cursor-pointer text-3xl  "
          name="submit"
          aria-pressed="false"
          aria-label="Send Message"
          type="submit"
            value="Send"
        >
          <a
            // href="mailto:maktabEstekdam@gmail.com"
            // target="_blank"
            rel="noopener noreferrer"
            className="no-underline  dark:text-white text-black  tracking-[2px]"

          >
            Send
          </a>
        </button>
      </motion.form>
    </>
  );
}

export default Form;
