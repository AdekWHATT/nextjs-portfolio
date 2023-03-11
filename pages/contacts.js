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
      </Head>
      <div className='Contacts'>
        <Header />
        <Contacts />
      </div>
    </>
  )
}

export default ContactsPage;