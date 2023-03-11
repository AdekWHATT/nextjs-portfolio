import Head from 'next/head'
import Header from '../components/Header/Header';
import MainInfo from '../components/MainInfo/MainInfo';
import DevCards from '../components/DevCards/DevCards';
import AboutMe from '../components/AboutMe/AboutMe';
import Certificates from '../components/Сertificates/Сertificates';
import Footer from '../components/Footer/Footer';
export default function Home() {
  return (
   <>
   <Head>
    <title>
      Портфолио | Главная
    </title>
   </Head>
    <div className='Main'>
      <Header />
      <MainInfo />
      <DevCards />
      <AboutMe />
      <Certificates />
      <Footer />
    </div>
   </>
  )
}
