import { lazy, useEffect, useState, } from "react";
import { Outlet } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import useTheme from "../hooks/useTheme";
const Navbar = lazy(() => import('../components/Navbar'));

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <div className='w-full h-screen flex items-center justify-center bg-[#f0f0f0] dark:bg-[#282828]'><PacmanLoader color='#ffb42a' /></div>


  return <>
    <div className="min-h-screen w-full   relative -z-2">

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, ${isDarkMode ? "#ffffff20" : "#00000010"
            } 49%, ${isDarkMode ? "#ffffff20" : "#00000010"
            } 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, ${isDarkMode ? "#ffffff20" : "#00000010"
            } 49%, ${isDarkMode ? "#ffffff20" : "#00000010"
            } 51%, transparent 51%)
          `,
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <section className="w-full md:w-[80%] h-full  mx-auto"> <Outlet /></section>
    </div>

  </>

}
export default MainLayout;