import Head from "next/head";

export default ({
  name = "Arts Week 2020",
  title = "Collaboration Hub",
  description = `Pulled apart by COVID-19, let's come together to collaborate on art virtually. 
  Here you can share your artwork with the entire school 
  as well as share remixes of works done by your peers at school.`,
  image = "https://cloud-eal030yrr.vercel.app/collaboration_hub.png",
  url = "https://gwas-arts-week-collab-hub.vercel.app",
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="msapplication-TileColor" content="#0070f3" />
    <meta name="theme-color" content="#0070f3" />
  </Head>
);
