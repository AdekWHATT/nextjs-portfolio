import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import './Certificates.css';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div ref={myBlockRef} id="certificates" className='Certificates'>
            <div className='container'>
                <div className='cert-title'>
                    <h1>сертификаты</h1>
                </div>
                <Slider {...settings}>
                    <div className='certificates__item'>
                        <Image src="/images/certificates/content-m.png" alt="Сертификат Битрикс"></Image>
                    </div>
                    <div className='certificates__item'>
                        <Image src="/images/certificates/webmimo.png" alt="Сертификат Мимо"></Image>
                    </div>
                    <div className='certificates__item'>
                    <Image src="/images/certificates/admin.png" alt="Сертификат Битрикс"></Image>
                    </div>
                </Slider>

            </div>
        </div>
    )
}

export default Certificates;
