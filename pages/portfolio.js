import Head from 'next/head';
import Header from '../components/Header/Header';
import Sites from '../components/Sites/Sites';
import Technologies from '../components/Technologies/Technologies';
import Footer from '../components/Footer/Footer';
const PortfolioPage = () => {
    return (
        <>
            <Head>
                <title>
                    Мои проекты и технологии
                </title>
            </Head>
            <div className='Portfolio'>
                <Header />
                <Sites />
                <Technologies />
                <Footer />
            </div>
        </>
    )
}

export default PortfolioPage;