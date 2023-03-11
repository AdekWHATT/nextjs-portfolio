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
import styles from "../../styles/Header.module.css";
const Header = () => {
    const router = useRouter();
    const { pathname } = router;
    return (
        <div className={styles.Header}>
            <div className="container">
                <div className={styles.navbar_row}>
                    <div className={styles.navbar__logo}>
                        <Link href="/">
                            <Image
                                src={logotext}
                                alt="Адекват"
                                width="100%"
                                height="100%"
                            />
                        </Link>
                    </div>
                    <div className={styles.navbar__links}>
                        <ul className={styles.navbar__list}>
                            <li className={pathname === '/' ? 'active' : ''}>
                                <Link href="/">Главная</Link>
                            </li>
                            <li>
                                <Link href="/#about_me">Обо мне</Link>
                            </li>
                            <li>
                                <Link href="/#certificates">Сертификаты</Link>
                            </li>
                            <li className={pathname === '/portfolio' ? 'active' : ''}>
                                <Link href="/portfolio">Портфолио</Link>
                            </li>
                            <li
                                className={`${styles.navbar__list_contacts}${pathname === '/contacts' ? 'active' : ''}`}
                            >
                                <Link href="/contacts">Контакты</Link>
                                <ul className={styles.navbar__list_sub_social}>
                                    <li>
                                        <a
                                            href="https://wa.me/79991699390"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Image src={whatsapp} width="100%"
                                                height="100%" alt="WhatsApp" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://t.me/adekwhatt"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Image src={telegram} width="100%"
                                                height="100%" alt="Telegram" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.mobile_navbar}>
                        <ul className={styles.mobile_navbar__list}>
                            <li>
                                <Link href="/">

                                    <Image src={home} width="100%"
                                        height="100%" alt="Главная" />

                                </Link>
                            </li>
                            <li>
                                <Link href="/#about_me">

                                    <Image src={about} width="100%"
                                        height="100%" alt="Обо мне" />

                                </Link>
                            </li>
                            <li>
                                <Link href="/#certificates">

                                    <Image src={certificates} width="100%"
                                        height="100%" alt="Сертификаты" />

                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio">

                                    <Image src={portfolio} width="100%"
                                        height="100%" alt="Портфолио" />

                                </Link>
                            </li>
                            <li>
                                <Link href="/contacts"><img src={contacts} width="100%"
                                    height="100%" alt="Контакты" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;