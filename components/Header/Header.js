import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logotext from '../../public/images/logo-text.svg';
import whatsapp from '../../public/images/icons/wa.svg';
import telegram from '../../public/images/icons/tg.svg';
import home from '../../public/images/mobile/home.png';
import about from '../../public/images/mobile/about.png';
import certificates from '../../public/images/mobile/certificates.png';
import portfolio from '../../public/images/mobile/portfolio.png';
import contacts from '../../public/images/mobile/contacts.png';

const Header = () => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <div className="">
            <div className="container">
                <div className="">
                    <div className="">
                        <Link href="/">
                            <a>
                                <Image src={logotext} alt="Адекват" />
                            </a>
                        </Link>
                    </div>
                    <div className="">
                        <ul className="">
                            <li className="">
                                <Link href="/">Главная</Link>
                            </li>
                            <li>
                                <Link href="/#about_me">Обо мне</Link>
                            </li>
                            <li>
                                <Link href="/#certificates">Сертификаты</Link>
                            </li>
                            <li className="">
                                <Link href="/portfolio">Портфолио</Link>
                            </li>
                            <li
                                className=""
                            >
                                <Link href="/contacts">Контакты</Link>
                                <ul>
                                    <li>
                                        <a
                                            href="https://wa.me/79991699390"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Image src={whatsapp} alt="WhatsApp" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://t.me/adekwhatt"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Image src={telegram} alt="Telegram" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>
                                        <Image src={home} alt="Главная" />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about_me">
                                    <a>
                                        <Image src={about} alt="Обо мне" />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#certificates">
                                    <a>
                                        <Image src={certificates} alt="Сертификаты" />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio">
                                    <a>
                                        <Image src={portfolio} alt="Портфолио" />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacts"><img src={contacts} alt="Контакты" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;