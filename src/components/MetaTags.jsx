import { Helmet } from "react-helmet-async"
import { MetaData } from "../constants/MetaData"


const MetaTags = ({ title, description, keywords, image, url }) => {
      
  const meta = {
    title: title || MetaData.title,
    description: description || MetaData.description,
    keywords: keywords || MetaData.keywords,
    image: image || MetaData.image,
    url: url || MetaData.url
  }
     
  return (

    <Helmet>
      <title>{meta.title}</title>

      <meta
        name="description"
        content={meta.description}
      />
      <meta
        name="keywords"
        content={meta.keywords}
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="author" content="EL MAHDI" />
      <meta
        name="googlebot"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={meta.title} />
      <meta
        property="og:description"
        content={meta.description}
      />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta
        name="twitter:description"
        content={meta.description}
      />
      <meta name="twitter:image" content={meta.image} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>

  )
}

export default MetaTags



