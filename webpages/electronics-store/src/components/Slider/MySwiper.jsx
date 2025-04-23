import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'swiper/modules';
import './styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import firstSlide from '/jumbotron_slider_img_1.webp'
import secondSlide from '/jumbotron_slider_img_2.webp'
import thirdSlide from '/jumbotron_slider_img_3.webp'

function MySwiper() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      >
      <SwiperSlide><img src={firstSlide} alt="" /></SwiperSlide>
      <SwiperSlide><img src={secondSlide} alt="" /></SwiperSlide>
      <SwiperSlide><img src={thirdSlide} alt="" /></SwiperSlide>
    </Swiper>
  );
}

export default MySwiper;