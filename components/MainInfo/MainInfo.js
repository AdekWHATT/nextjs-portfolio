import React from 'react';

import Image from 'next/image';
const MainInfo = () => {
  return (
    <div className='MainInfo'>
      <div className='container'>
        <div className='main-info__container'>
          <div className='main-info__description'>
            <div className='main-info__description-hello'>
              <h1><span className='unselectable'>&lt;head&gt;</span>Привет<span className='unselectable'>&lt;/head&gt;</span></h1>
            </div>
            <div className='main-info__description-name'>
              <h1>
                Я Слава!
              </h1>
            </div>
            <div className='main-info__description-text'>
              <span>
                Я занимаюсь front-end и back-end разработкой уже более двух лет.
                Если Вам нужен интернет-магазин, верстка сайта на популярных CMS или, может быть, сайт "под ключ"?<br />Тогда свяжитесь со мной.
              </span>
            </div>
            <div className='main-info__description-button'>
              <a href='tel:+79991699390' className='main-info__description-button__btn' type='button'>
                Позвонить
              </a>
            </div>
          </div>
          <div className='main-info__img'>
            <Image src="/images/my-2.png" className='main-info__img-one' alt="Мое Фото"></Image>
            <div className='main-info__img-two'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainInfo;