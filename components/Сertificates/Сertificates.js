import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import styles from './Certificates.module.css';
import Image from 'next/image';


const Certificates = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const router = useRouter();
    const myBlockRef = useRef(null);

    useEffect(() => {
        const blockId = router.asPath.substring(router.asPath.indexOf('#')+1);
        const blockElement = document.getElementById(blockId);
        if (blockElement) {
            blockElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, [router.asPath]);
    return (
        <div ref={myBlockRef} id="certificates" className={styles.Certificates}>
            <div className='container'>
                <div className='cert-title'>
                    <h1>сертификаты</h1>
                </div>
                <Slider {...settings}>
                    <div className='certificates__item'>
                        <Image src="/images/certificates/content-m.png" width={100}
                    height={100} alt="Сертификат Битрикс"></Image>
                    </div>
                    <div className='certificates__item'>
                        <Image src="/images/certificates/webmimo.png" width={100}
                    height={100} alt="Сертификат Мимо"></Image>
                    </div>
                    <div className='certificates__item'>
                    <Image src="/images/certificates/admin.png" width={100}
                    height={100} alt="Сертификат Битрикс"></Image>
                    </div>
                </Slider>

            </div>
        </div>
    )
}

export default Certificates;
