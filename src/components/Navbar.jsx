import { NavLink } from "react-router-dom"
import { FaCopy, FaCheck } from "react-icons/fa";
import { CiLight, CiDark, CiMail, CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState, useEffect, } from "react";




export default function Navbar({isDarkMode, toggleTheme}) {
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/projects", label: "Projects" },
        { to: "/testimonials", label: "testimonials" },
        { to: "/contact", label: "Contact" },
    ];
    const [toggle, setToggle] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const textCopy = "tcs6mehdi@gmail.com";
    const handleToggle = () => {
        setToggle((prev) => !prev);
    }
    const handleOut = () => {
        setToggle(false);
    }
    const handleCopy = () => {
        const textCopy = "tcs6mehdi@gmail.com";
        navigator.clipboard.writeText(textCopy).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        })
    }



    return (
        <>

            <header className="w-full md:w-[90%] h-[70px] mx-auto my-0 p-[2%] flex items-center  justify-between relative  tracking-wider	z-[10000000000]">
                {!toggle ? (<CiMenuFries className="block md:hidden cursor-pointer text-2xl" onClick={handleToggle} />) : (<IoClose className="block md:hidden cursor-pointer text-2xl" onClick={handleToggle} />)}
  
                <nav
                    className={`bg-slate-200 dark:bg-[#5e5e5e] absolute left-0 top-[70px] flex items-center justify-center w-full h-[250px] md:dark:bg-transparent md:bg-transparent md:static md:w-auto md:h-auto md:translate-x-0 ${toggle ? "translate-x-0" : "-translate-x-[100%]"
                        } transition-all duration-300 ease-in-out`}
                >
                    <ul className="flex flex-col gap-5 md:flex-row">
                        {navLinks.map((link, index) => (
                            <li key={index} className="list-none">
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-[#ffb42a] no-underline uppercase text-[14px] leading-7 font-semibold transition-all duration-300 ease-in-out"
                                            : "no-underline uppercase text-[14px] leading-7 font-semibold"
                                    }
                                    onClick={handleOut}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-5">

                    <div className="flex items-center gap-5 bg-slate-200 dark:bg-[#5e5e5e]  dark:text-white px-[20px] py-[8px] rounded-[20px] text-black border-black dark:border-white border-solid  border-2">
                        <p className=" hidden xl:block lowercase text-[15px] leading-7  font-extrabold text-gray-900 dark:text-[rgb(255,211,130)]">{textCopy}</p>
                        <div className="md:hidden">
                            <CiMail onClick={handleCopy} className="cursor-pointer hover:text-[#004a57]" />
                        </div>
                        {isCopied ? (<FaCheck className="text-green-500 " />) : (<FaCopy onClick={handleCopy} className="cursor-pointer  hover:text-[#ffb42a]" />)}
                        <button className="bg-transparent text-xl " onClick={toggleTheme} aria-label="darkLightMode">{isDarkMode ? <CiLight /> : <CiDark />}</button>
                    </div>

                </div>


            </header>
        </>
    );
}