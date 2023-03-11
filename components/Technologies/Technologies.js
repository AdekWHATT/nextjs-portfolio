import Image from 'next/image';
import styles from '../../styles/Technologies.module.css';

const Technologies = () => {
    return (
        <div className={styles.Technologies}>
            <div className='container'>
                <h1 className={styles.technologies_title}>Мои инструменты</h1>
                <div className={styles.techno_container}>
                    <div className={styles.techno_item}>
                        <div className={styles.techno_item__img_container}>
                            <Image src="/images/techno/html1.svg" width={200} height={150} alt="HTML5" />
                        </div>
                    </div>

                    <div className={styles.techno_item}>
                        <div className={styles.techno_item__img_container}>
                            <Image src="/images/techno/css1.svg" width={200} height={150} alt="CSS3" />
                        </div>
                    </div>

                    <div className={styles.techno_item}>
                        <div className={styles.techno_item__img_container}>
                            <Image src="/images/techno/bs1.svg" width={200} height={150} alt="Bootstrap5" />

                        </div>
                    </div>

                    <div className={styles.techno_item}>
                        <div className={styles.techno_item__img_container}>
                            <Image src="/images/techno/js1.svg" width={200} height={150} alt="JavaScript" />

                        </div>
                    </div>

                    <div className={styles.techno_item}>
                        <div className={styles.techno_item__img_container}>
                            <Image src="/images/techno/php.svg" width={200} height={150} alt="PHP" />

                        </div>
                    </div>

                    <div className={styles.techno_item}>
                        <div className={styles.techno_item__img_container}>
                            <Image src="/images/techno/react.svg" width={200} height={150} alt="React" />
                        </div>
                    </div>

                    <div className={styles.techno_item}>
                        <div className={styles.techno_item__img_container}>
                            <Image src="/images/techno/fg1.svg" width={200} height={150} alt="Figma" />
                        </div>
                    </div>

                    <div className={styles.techno_item}>
                        <div className={styles.techno_item__img_container}>
                            <Image src="/images/techno/wp2.svg" width={200} height={150} alt="WordPress" />

                        </div>
                    </div>

                    <div className={styles.techno_item}>
                        <div className={styles.techno_item__img_container}>
                            <Image src="/images/techno/ps1.svg" width={200} height={150} alt="PhotoShop" />

                        </div>
                    </div>
                    <div className={styles.techno_item}>
                        <div className={styles.techno_item__img_container}>
                            <Image src="/images/techno/sass1.svg" width={200} height={150} alt="SASS" />

                        </div>
                    </div>

                    <div className={styles.techno_item}>
                        <div className={styles.techno_item__img_container}>
                            <Image src="/images/techno/bitrix.png" width={200} height={150} alt="Bitrix" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;