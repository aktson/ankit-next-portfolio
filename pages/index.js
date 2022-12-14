import Head from 'next/head'
import Footer from '../components/layout/Footer'
import Main from '../components/layout/Main'
import Header from '../components/layout/Header'
import React from 'react'
import LangContext from '../components/context/LangContext'



export default function Home({ skills }) {
  const { isEng } = React.useContext(LangContext)

  const title =
    isEng
      ?
      "Professional freelance front end developer and web designer based in Oslo, Norway"
      :
      "Profesjonell frilans front end utvikler og web designer basert i Oslo, Norge"



  return (
    <>
      <Head>
        <title>Ankit Soni | {title} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Ankit Soni" />
        <meta name="url" content="https://ankitsoni.dev" />
        <meta name="image" content="../public/images/ankitLightGray.jpg" />
        <meta name="description"
          content="Looking for professional freelance front-end developer or web designe? Ankit Soni is creative professional Front End Developer and web designer skilled in react, next, typescript and vanilla javascript. Kreative profesjonell  Front End Utvikler & web designer | " />
        <meta name="keywords" content="ankit, soni,portfolio, Ankit Soni, oslo, web development, frilanser, freelancer, javascript, HTML, CSS3, reactJs, nextJs, norge, norway, web designer, web utvikler, front end developer, front end utvikler" />
        <meta property="og:title" content="Ankit Soni | Front End Developer" />
        <meta property="og:description"
          content="Looking for professional freelance front-end developer or web designe? Ankit Soni is creative professional Front End Developer and web designer skilled in react, next, typescript and vanilla javascript. Kreative profesjonell  Front End Utvikler & web designer | " />
        <meta property="og:image" content="../public/images/ankitLightGray.jpg" />
        <meta property="og:url" content="https://ankitsoni.dev" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <Main data={skills} />
      <Footer />
    </>
  )
}


export async function getStaticProps() {

  let data = []

  try {
    const response = await fetch("https://ankson.up.railway.app/api/categories?populate=*");
    const json = await response.json();

    data = json

  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      skills: data,
    },
    // unstable_revalidate: 1,
  };
}

