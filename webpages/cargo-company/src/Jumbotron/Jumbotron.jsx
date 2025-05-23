import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import SliderAdvertisingButton from './SliderAdvertisingButton.jsx';
import slide1 from '/swiper-slide1.webp';
import slide2 from '/swiper-slide2.webp';
import slide3 from '/swiper-slide3.webp';
import slide4 from '/swiper-slide4.webp';

function Jumbotron () {
  return (
    <div className="swiper-wrapper">
        <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // autoplay={true}
        >
        <SwiperSlide><img src={slide1} alt="" />
              <div className="swiper-advertising">
                <div className="swiper-advertising__title">Прямое Карго из Китая</div>   
                <div className="swiper-advertising__subtitle">Доставляем любые грузы из Китая <br />по честной цене</div>
                  <SliderAdvertisingButton/>
              </div>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
              <div className="swiper-advertising">
                <div className="swiper-advertising__title">Гарантируем сроки!</div>   
                <div className="swiper-advertising__subtitle">Если мы не уложимся в обозначенные сроки, <br />доставка груза со скидкой до 90%</div>
                  <SliderAdvertisingButton/>   
              </div>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
              <div className="swiper-advertising">
                <div className="swiper-advertising__title">Выкуп товара с Таобао</div>   
                <div className="swiper-advertising__subtitle">Выкуп и доставка товаров <br />с китайских торговых площадок</div>
                   <SliderAdvertisingButton/>   
              </div>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
              <div className="swiper-advertising">
                <div className="swiper-advertising__title">Широчайший выбор продукции</div>   
                <div className="swiper-advertising__subtitle">Товар от самого простого до класса &quot;люкс&quot;</div>
                    <SliderAdvertisingButton/>   
              </div>
        </SwiperSlide>
        </Swiper>
       
    </div>
  )
}

export default Jumbotron;