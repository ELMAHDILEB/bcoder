
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>404 Not Found | bcoder Portfolio</title>

        <meta
          name="description"
          content="Sorry, the page you're looking for doesn't exist. You can return to the homepage or browse other sections of bcoder's portfolio."
        />
        <meta
          name="robots"
          content="noindex, follow"
        />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="author" content="bcoder" />
        <meta
          name="googlebot"
          content="noindex, follow"
        />

        {/* Open Graph */}
        <meta property="og:title" content="404 Not Found | bcoder Portfolio" />
        <meta
          property="og:description"
          content="Oops! This page doesn’t exist. Head back to the homepage to explore bcoder’s projects and content."
        />
        <meta property="og:image" content="/404.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bcoder.vercel.app/404" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 Not Found | bcoder Portfolio" />
        <meta
          name="twitter:description"
          content="Page not found. Return to the homepage to discover more about bcoder’s web development work."
        />
        <meta name="twitter:image" content="/404.jpeg" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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