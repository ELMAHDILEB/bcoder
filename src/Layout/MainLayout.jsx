import { lazy, useEffect, useState,  } from "react";
import { Outlet } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
const Navbar = lazy(() => import('../components/Navbar'));

 const MainLayout = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(()=>{
      return localStorage.getItem("theme") === "dark";
    })
    useEffect(()=>{
      const timer = setTimeout(()=>setIsLoading(false), 1000);
  
      return ()=>  clearTimeout(timer);
    },[]);

    useEffect(()=>{
      isDarkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")

    },[isDarkMode])
  
    if(isLoading) return <div className='w-full h-screen flex items-center justify-center bg-[#f0f0f0] dark:bg-[#282828]'><PacmanLoader color='#ffb42a'/></div>
  
    
     return <><Navbar /> 
      <section className="w-full md:w-[80%] h-full  mx-auto"> <Outlet/></section>
    </>
  
  }
  export default  MainLayout;