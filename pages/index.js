import Head from 'next/head'
import Footer from '../components/layout/Footer'
import Main from '../components/layout/Main'
import Header from '../components/layout/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ankit Soni Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />
    </>
  )
}
