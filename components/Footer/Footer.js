import styles from '../../styles/Footer.module.css';
import stylesNavbar from '../../styles/Header.module.css';
const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className='container'>
                <div className={styles.footer_container}>
                    <div className='footer__top-block'>
                        <ul className={`${stylesNavbar.navbar__list} ${styles.footer__center_block__list}`}>
                            <li><a href="mailto:vyacheslaw.kilin@mail.ru">vyacheslaw.kilin@mail.ru</a></li>
                            <li><a href="tel:+79991699390">+7 (999) 169-93-90</a></li>
                            <li><a href="https://wa.me/79991699390" target="_blank" rel="noreferrer">WhatsApp</a></li>
                            <li><a href="https://t.me/adekwhatt" target="_blank" rel="noreferrer">Telegram</a></li>
                            <li><a href="https://github.com/AdekWHATT" target="_blank" rel="noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;