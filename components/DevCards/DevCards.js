import Image from 'next/image';
import styles from '../../styles/DevCards.module.css';
const DevCards = () => {
    return (
        <div className={styles.DevCards}>
            <div className='container'>
                <div className={styles.dev_cards_container}>
                    <div className={styles.dev_cards__item}>
                        <div className={styles.dev_cards__img_wrapper}>
                            <Image src="/images/icons/pans.svg" width="100" height="100"
                                alt="Индивидуальный подход"></Image>
                        </div>
                        <span>Индивидуальный подход</span>
                    </div>
                    <div className={styles.dev_cards__item}>
                        <div className={styles.dev_cards__img_wrapper}>
                            <Image src="/images/icons/ui.svg" width="100" height="100" alt="Отзывчивая разработка"></Image>
                        </div>
                        <span>Отзывчивая разработка</span>
                    </div>
                    <div className={styles.dev_cards__item}>
                        <div className={styles.dev_cards__img_wrapper}>
                            <Image src="/images/icons/menu.svg" width="100" height="100" alt="Адаптивность" ></Image>
                        </div>
                        <span>Адаптивность</span>
                    </div>
                    <div className={styles.dev_cards__item}>
                        <div className={styles.dev_cards__img_wrapper}>
                            <Image src="/images/icons/logo.svg" width="100" height="100" alt="Популярные CMS" ></Image>
                        </div>
                        <span>Популярные<br />CMS</span>
                    </div>

                    <div className={styles.dev_cards__item}>
                        <div className={styles.dev_cards__img_wrapper}>
                            <Image src="/images/icons/backend.svg" width="100" height="100" alt="Back-End" ></Image>
                        </div>
                        <span>Back-End</span>
                    </div>

                    <div className={styles.dev_cards__item}>
                        <div className={styles.dev_cards__img_wrapper}>
                            <Image src="/images/icons/frontend.svg" width="100" height="100" alt="Front-End" ></Image>
                        </div>
                        <span>Front-End</span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default DevCards;