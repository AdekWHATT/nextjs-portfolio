import Image from 'next/image';
import styles from '../../styles/Contacts.module.css';
const Contacts = () => {
    return (
        <div>
            <div className='container'>
                <div className={styles.contacts_title}>
                    <h1>Контакты</h1>
                </div>
                <div className={styles.contacts_container}>
                    <div className={styles.contacts_left_block}>
                        <div className={styles.contacts_left_block__title}>
                            <span>Вы можете связаться со мной любым удобным для Вас способом 24/7</span>
                            <table className={styles.contacts_table}>
                                <tbody>
                                    <tr>
                                        <td>Телефон</td>
                                        <td><a href='tel:+79991699390'>+7 (999) 169-93-90</a></td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td><a href='mailto:vyacheslaw.kilin@mail.ru'>vyacheslaw.kilin@mail.ru</a></td>
                                    </tr>
                                    <tr>
                                        <td>WhatsApp</td>
                                        <td><a href='https://wa.me/79991699390' target="_blank" rel="noreferrer">+7 (999) 169-93-90</a></td>
                                    </tr>
                                    <tr>
                                        <td>Telegram</td>
                                        <td><a href='https://t.me/adekwhatt' target="_blank" rel="noreferrer">@adekwhatt</a></td>
                                    </tr>
                                    <tr>
                                        <td>Мой GitHub</td>
                                        <td><a href='https://github.com/AdekWHATT' target="_blank" rel="noreferrer">https://github.com/AdekWHATT</a></td>
                                    </tr>
                                    <tr>
                                        <td>портфолио</td>
                                        <td><a href='#!'>Портфолио HH.ru</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.contacts_right_block}>
                        <div className={styles.contacts_right_block_img}>
                            <Image src='/images/contacts.png'
                            width={650}
                            height={450}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;