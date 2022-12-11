import Head from 'next/head'
import Footer from '../components/layout/Footer'
import Main from '../components/layout/Main'
import Header from '../components/layout/Header'
import Favicon from '../components/layout/Favicon'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ankit Soni Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ankit Soni" />
        <meta name="description" content="Ankit Soni - Kreative profesjonell Front-end Utvikler/ Creative professional front-end developer" />
        <meta name="keywords" content="ankit, soni, Ankit Soni, oslo, web development, javascript, HTML, CSS3, reactJs, nextJs, norge, norway, web designer, web utvikler, front end developer, front end utvikler" />
        <Favicon />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
