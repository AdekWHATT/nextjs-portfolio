import Head from 'next/head';
import Header from '../components/Header/Header';
import Contacts from '../components/Contacts/Contacts';
const ContactsPage = () => {
  return (
    <>
      <Head>
        <title>
          Портфолио | Контакты
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
      <div className='Contacts'>
        <Header />
        <Contacts />
      </div>
    </>
  )
}

export default ContactsPage;