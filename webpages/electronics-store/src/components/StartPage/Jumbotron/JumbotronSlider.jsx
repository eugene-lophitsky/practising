import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import firstSlide from '/jumbotron_slider_img_1.webp';
import secondSlide from '/jumbotron_slider_img_2.webp';
import thirdSlide from '/jumbotron_slider_img_3.webp';
import appleLogo from '/slider-apple-logo.png';
import '../Jumbotron/Jumbotron.css';

function JumbotronSlider() {
  return (
   <div className="swiper-wrapper">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={true}
      >
      <SwiperSlide><img src={firstSlide} alt="" /></SwiperSlide>
      <SwiperSlide><img src={secondSlide} alt="" /></SwiperSlide>
      <SwiperSlide><img src={thirdSlide} alt="" /></SwiperSlide>
    </Swiper>
    <div className="swiper-advertising">
      <div className="swiper-advertising__logo">
        <img src={appleLogo} alt="" />
        <span className="swiper-advertising__model">iPhone 14 Series</span>
      </div>
      <div className="swiper-advertising__text">Up to 10% <div>off Voucher</div></div>
    </div>
   </div>
  );
}

export default JumbotronSlider;