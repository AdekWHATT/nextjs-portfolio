import Image from 'next/image';
import styles from '../../styles/Sites.module.css';
const Sites = () => {
    return (
        <div className={styles.Sites}>
            <div className='container'>
                <h1 className={styles.sites_title}>Несколько коммерческих проектов</h1>
                <div className={styles.site_grid}>
                    <div className={styles.site_grid_item}>
                        <Image src='/images/portfolio/avtoelectrika.jpg' width={500} height={400} alt='АвтоЭлектрика' />
                        <a href='#!'>Автоэлектрика</a>
                    </div>
                    <div className={styles.site_grid_item}>
                        <Image src="/images/portfolio/bavly-muka.jpg" width={500} height={250} alt='Бавлы Мука' />
                        <a href='#!'>Бавлы Мука</a>
                    </div>
                    <div className={styles.site_grid_item}>
                        <Image src="/images/portfolio/frbtlt.jpg" width={500} height={250} alt='Школа Карате' />
                        <a href='#!'>Школа Карате</a>
                    </div>
                    <div className={styles.site_grid_item}>
                        <Image src="/images/portfolio/gippokrat16.jpg" width={500} height={250} alt='Медицинский центр Гиппократ' />
                        <a href='#!'>Медицинский центр Гиппократ</a>
                    </div>
                    <div className={styles.site_grid_item}>
                        <Image src="/images/portfolio/kafolat.jpg" width={500} height={250} alt='Кафолат Центр' />
                        <a href='#!'>Кафолат Центр</a>
                    </div>
                    <div className={styles.site_grid_item}>
                        <Image src="/images/portfolio/ngta.jpg" width={500} height={250} alt='НГТА' />
                        <a href='#!'>НГТА</a>
                    </div>
                    <div className={styles.site_grid_item}>
                        <Image src="/images/portfolio/prodservis.jpg" width={500} height={250} alt='ПродСервис' />
                        <a href='#!'>ПродСервис</a>
                    </div>
                    <div className={styles.site_grid_item}>
                        <Image src="/images/portfolio/upakovka.jpg" width={500} height={250} alt='Упаковка32' />
                        <a href='#!'>Упаковка32</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sites;