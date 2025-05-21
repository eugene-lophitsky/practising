import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
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
        autoplay={true}
        >
        <SwiperSlide><img src={slide1} alt="" />
         <div className="swiper-advertising">
            <div className="swiper-advertising__logo">
            
            </div>
        <div className="swiper-advertising__text">Up to 10% <div>off Voucher</div></div>
        </div></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        </Swiper>
       
    </div>
  )
}

export default Jumbotron;