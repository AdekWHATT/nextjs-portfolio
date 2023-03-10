import Image from 'next/image';

const DevCards = () => {
    return (
        <div className='DevCards'>
            <div className='container'>
                <div className='dev-cards_container'>
                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <Image src="/images/icons/pans.svg" alt="Индивидуальный подход"></Image>
                        </div>
                        <span>Индивидуальный подход</span>
                    </div>
                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <Image src="/images/icons/ui.svg" alt="Отзывчивая разработка"></Image>
                        </div>
                        <span>Отзывчивая разработка</span>
                    </div>
                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <Image src="/images/icons/menu.svg" alt="Адаптивность" ></Image>
                        </div>
                        <span>Адаптивность</span>
                    </div>
                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <Image src="/images/icons/logo.svg" alt="Популярные CMS" ></Image>
                        </div>
                        <span>Популярные<br />CMS</span>
                    </div>

                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <Image src="/images/icons/backend.svg" alt="Back-End" ></Image>
                        </div>
                        <span>Back-End</span>
                    </div>

                    <div className='dev-cards__item'>
                        <div className='dev-cards__img-wrapper'>
                            <Image src="/images/icons/frontend.svg" alt="Front-End" ></Image>
                        </div>
                        <span>Front-End</span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default DevCards;