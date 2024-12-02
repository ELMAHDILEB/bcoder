import { NavLink } from "react-router-dom"
import { FaCopy, FaCheck } from "react-icons/fa";
import { CiLight, CiDark, CiMail } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState, useEffect, } from "react";




export default function Navbar() {
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/projects", label: "Projects" },
        { to: "/testimonials", label: "testimonials" },
        { to: "/contact", label: "Contact" },
    ];
    const [toggle, setToggle] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    })

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("theme", newMode ? "dark" : "light");
            return newMode;
        })
    }
    useEffect(() => {
        isDarkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");

    }, [isDarkMode])
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

            <header className="w-full md:w-[90%] h-[70px] mx-auto my-0 p-[2%] flex items-center  justify-between relative font-bebas  tracking-wider	z-[10000000000]">
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
                                            ? "text-[#ffb42a] no-underline capitalize text-2xl leading-7 font-medium transition-all duration-300 ease-in-out"
                                            : "no-underline capitalize text-lg leading-7 font-medium"
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

                    <div className="flex items-center gap-5 bg-slate-200 dark:bg-[#5e5e5e]  dark:text-white px-[25px] py-[10px] rounded-[20px] text-black border-black dark:border-white border-solid  border-2">
                        <p className="font-bebas hidden md:block">{textCopy}</p>
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