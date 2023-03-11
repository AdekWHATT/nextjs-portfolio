import styles from '../../styles/MainInfo.module.css';
import Image from 'next/image';
const MainInfo = () => {
  return (
    <div className={styles.MainInfo}>
      <div className='container'>
        <div className={styles.main_info__container}>
          <div className={styles.main_info__description}>
            <div className={styles.main_info__description_hello}>
              <h1><span className='unselectable'>&lt;head&gt;</span>Привет<span className='unselectable'>&lt;/head&gt;</span></h1>
            </div>
            <div className={styles.main_info__description_name}>
              <h1>
                Я Слава!
              </h1>
            </div>
            <div className={styles.main_info__description_text}>
              <span>
                Я занимаюсь front-end и back-end разработкой уже более двух лет.
                Если Вам нужен интернет-магазин, верстка сайта на популярных CMS или, может быть, сайт "под ключ"?<br />Тогда свяжитесь со мной.
              </span>
            </div>
            <div className={styles.main_info__description_button}>
              <a href='tel:+79991699390' className={styles.main_info__description_button__btn} type='button'>
                Позвонить
              </a>
            </div>
          </div>
          <div className={styles.main_info__img}>
            <Image src="/images/my-2.png" width={449} height={616} className={styles.main_info__img_one} alt="Мое Фото"></Image>
            <div className={styles.main_info__img_two}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainInfo;