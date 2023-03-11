import { React, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/AboutMe.module.css'
import Image from 'next/image';

const AboutMe = () => {
    const router = useRouter();
    const abouMeRef = useRef(null);
    useEffect(() => {
        const blockId = location.hash.substring(1);
        const blockElement = document.getElementById(blockId);
        if (blockElement) {
            blockElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, [router.hash]);
    return (
        <div ref={abouMeRef} id="about_me">
            <div className='container'>
                <div className={styles.about_me_title}>
                    <h1>Обо мне</h1>
                </div>
                <div className={styles.about_me__container}>
                    <div className={`${styles.about_me_item} ${styles.about_me1}`}><Image src="/images/about/about1.png"
                        width={645}
                        height={350}
                        responsive
                    /></div>
                    <div className={`${styles.about_me_item} ${styles.about_me2}`}><span style={{
                        display: 'block',
                        textTransform: 'uppercase'
                    }}>Доброго времени суток!</span><span>Рад видеть Вас на моей странице. Меня зовут Слава
                        и я работаю разработчиком уже более 2 лет. В настоящее время я работаю в веб-студии и специализируюсь на
                        разработке frontend и backend сайтов. Мне 30 лет, у меня семья - супруга и двое детей.
                        В свободное время я увлекаюсь изучением новых технологий и библиотек, чтобы всегда быть в курсе событий в мире IT.
                        В моем текущем стеке технологий: HTML5, CSS3, JavaScript, PHP, SASS, Gulp, NodeJS, NextJS/ReactJS, 1C Bitrix, WordPress, Joomla, Tilda, Flexbe.<br />Я умею работать с различными фреймворками и библиотеками, а также имею опыт работы с CMS. Благодаря своей специализации я умею создавать сайты с нуля,
                            а также вносить изменения в уже существующие проекты.
                            Отличаюсь точностью и внимательностью к деталям,что позволяет мне выполнять свою работу качественно.
                            Я также умею работать с версткой, адаптируя ее под различные устройства.
                            Для меня очень важно создавать привлекательный и удобный интерфейс для пользователей,
                            поэтому я стараюсь всегда следить за современными тенденциями в дизайне.
                            В моей работе я также уделяю внимание SEO-оптимизации сайтов, чтобы они могли легко находиться в поисковых системах.
                            Мне нравится работать с большими и сложными проектами, потому что это позволяет мне развивать свои навыки и знания.
                            Я считаю, что для успешной разработки сайта нужно не только хорошо знать технологии, но и уметь работать в команде.
                            Я Умею слушать и учитывать мнение коллег и заказчиков, чтобы вместе добиться наилучшего результата.
                            В своей работе я уделяю большое внимание качеству кода, чтобы он был читабельным и легко поддавался поддержке.
                            Я также умею работать с версиями кода и системами контроля версий, чтобы мы могли легко отслеживать изменения в проекте.
                            Я уверен, что с моими навыками и опытом я смогу успешно реализовать любой веб-проект, который Вы мне доверите.
                            уверен, что с моими навыками и опытом я смогу стать ценным членом любой команды и помочь ей достичь успеха.
                            <br />
                            На моей веб-странице Вы можете поcетить страницу "Портфолио"
                            чтобы ознакомиться с момими коммерческими проектами и стеком технологий которые я использую.<br />
                            Буду рад ответить на любые вопросы и обсудить детали сотрудничества с Вами.</span>
                    </div>
                    <div className={`${styles.about_me_item} ${styles.about_me3}`}><Image src="/images/about/about2.png" width={645}
                        height={350} responsive/></div>
                </div>

            </div>

        </div>
    )
}

export default AboutMe;