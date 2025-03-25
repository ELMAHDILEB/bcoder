import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

function Form() {

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  useEffect(()=>{
    if(message){
      const timer = setTimeout(()=>{
        setMessage("");
  
      }, 2000)
      return () => clearTimeout(timer);
    }
  },[message]);

  const validatorForm = (data) => {
    const errors = {};
    // validate input full name
    if (!data.name.trim())  errors.name = "Full name is required!";
    // validate input phone number
    const phonePattern = /^[0-9]+$/;
    if (!data.num.trim()) {
      errors.num = "Number Phone is required!";
    } else if (!phonePattern.test(data.num)) {
      errors.num = "Phone number must contain only numbers.";
    }
    // validate input subject
    if (!data.subject.trim()) errors.subject = "Subject is required.";
    // validate text area
    if (!data.message.trim()) errors.message = "Message is required.";
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData)
    const errors = validatorForm(data);

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return false;
    }
    emailjs
      .sendForm('service_hvoujea', 'template_dim2f5f', e.currentTarget, {
        publicKey: 'W4UZzhhDWjLFjar0Y',
      })
      .then(() => {
        setMessage("SUCCESS SEND ✅️"); 
        setErrors({});
        e.target.reset();
      })
      .catch((error) => {
        setMessage("FAILED ❌ " + error.text); 
      });
  }




  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="w-full  h-auto flex flex-col items-center justify-center gap-4  p-6 rounded-md shadow-md  dark:bg-[#5e5e5e] bg-[#dee4ec]"
        method="POST"
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100vh" }}
        transition={{ duration: 1, delay: 0.5 }}
      >

<label htmlFor="name" className=" uppercase text-semibold">
          Name:
        </label>  
        <span className="text-[#554545] dark:text-[#ffcdcd]">{errors.name}</span>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full max-w-[400px] h-[40px] rounded-md bg-gray-200 border-none outline-none text-center text-black shadow-md"
          placeholder="Your Name"
        />


        <label htmlFor="num" className=" uppercase text-semibold">
          Number Phone:
        </label>
        <span className="text-[#554545] dark:text-[#ffcdcd]">{errors.num}</span>
        <input
          type="text"
          name="num"
          id="num"
          className="w-full max-w-[400px] h-[40px] rounded-md bg-gray-200 border-none outline-none text-center  text-black shadow-md"
          placeholder="Number Phone"
        />


        <label htmlFor="subject" className=" uppercase text-semibold">
          Subject:
        </label>
        <span className="text-[#554545] dark:text-[#ffcdcd]">{errors.subject}</span>
        <input
          type="text"
          name="subject"
          id="subject"
          className="w-full max-w-[400px] h-[40px] rounded-md bg-gray-200 border-none outline-none text-center text-black shadow-md"
          placeholder="Subject"
        />


        <label htmlFor="message" className=" uppercase text-semibold">
          Message:
        </label>
        <span className="text-[#554545] dark:text-[#ffcdcd]">{errors.message}</span>
        <textarea
          name="message"
          id="message"
          className="w-full max-w-[400px] h-[200px] rounded-md bg-gray-200 border-none outline-none p-2 resize-none text-black shadow-md"
          placeholder="Message"
        ></textarea>

        <button
          className="relative after:absolute after:left-0 after:top-0 after:-z-10 -skew-y-3 bg-bgOrange  cursor-pointer rounded-[4px]"
          name="submit"
          aria-pressed="false"
          aria-label="Send Message"
          type="submit"
          value="Send"

        >
          <a
            rel="noopener noreferrer"
            className="no-underline  dark:text-white text-black  tracking-[2px] text-[1.5em] font-bold"
          >
            Send
          </a>
        </button>

        {message && <p className="text-center text-lg font-bold mt-2 transition-all duration-500">{message}</p>}
      </motion.form>
    </>
  );
}

export default Form;
