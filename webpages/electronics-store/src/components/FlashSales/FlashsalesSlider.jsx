import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import sliderImg1 from '/flashsales_slider_img1.webp';
import sliderImg2 from '/flashsales_slider_img2.webp';
import sliderImg3 from '/flashsales_slider_img3.webp';
import sliderImg4 from '/flashsales_slider_img4.webp';

function FlashsalesSlider() {

  return (
      <div className="swiper-wrapper">
        <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        loop={true}
        scrollbar={{ draggable: true }}>
        <SwiperSlide>
          <div className="flash-sales-slide"><img src={sliderImg1} alt="" /></div>
        </SwiperSlide>
        <SwiperSlide><img src={sliderImg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderImg3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderImg4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderImg3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderImg4} alt="" /></SwiperSlide>
        </Swiper>
 </div>
  );
}

export default FlashsalesSlider;