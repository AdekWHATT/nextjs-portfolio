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
        <meta name="keywords" content="Портфолио Web разработчика Килин В.А" />
        <meta name="description" content="создание сайтов интернет реакт react reactjs nextjs nodejs bootstrap chatgtp figma flexby html5 css3 javascript" />
        <meta name="copyright" content="company name" />
        <meta name="language" content="RU" />
        <meta name="robots" content="index,follow" />
        <meta name="Classification" content="Business" />
        <meta name="author" content="vyacheslaw.kilin@mail.ru" />
        <meta name="designer" content="Вячеслав Килин" />
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
