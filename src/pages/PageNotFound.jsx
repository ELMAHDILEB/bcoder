
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found - Portfolio</title>
        <meta name="description" content="Explore my latest projects including web development, UI/UX designs, and more." />
        <meta property="og:title" content="Not Found - Portfolio" />
        <meta property="og:description" content="Explore my latest projects including web development, UI/UX designs, and more." />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className='w-full h-full flex items-center justify-center flex-col gap-10 p-[2%] capitalize text-center'>
        <h1 className='tracking-[0.5em] text-[clamp(40px,4vw,100px)] font-extrabold '>Page Not Found</h1>
        <h3>404</h3>
        <Link to="/"  ><h1 className="font-semibold dark:bg-[#f0f0f0] bg-[#282828]  text-white dark:text-black px-[10px]">Go To Home Page</h1></Link>
      </div>
    </>
  )
}

export default PageNotFound