import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import sliderImg1 from '/flashsales_slider_img1.webp';
import sliderImg2 from '/flashsales_slider_img2.webp';
import sliderImg3 from '/flashsales_slider_img3.webp';
import sliderImg4 from '/flashsales_slider_img4.webp';
import fourStar from '../../icons/four-star.svg';
import fourHalfStar from '../../icons/four-half-star.svg';
import fiveStar from '../../icons/five_star.svg';
import '../FlashSales/FlashSales.css';

function SalesSlider() {
  return (
    <div className="swiperWrapper" style={{ position: 'relative' }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={4}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        loop={true}
      >
        <SwiperSlide className="swiper-slide"> 
          <div className="swiper-slide__image"><img src={sliderImg1} alt="" /></div>
          <div className="swiper-slide__title">HAVIT HV-G92 Gamepad</div>
          <div className="swiper-slide__price">
              <div className="swiper-slide__price-new">$120</div>
              <div className="swiper-slide__price-old">$160</div>
          </div>
          <div className="swiper-slide__rating">
            <img src={fiveStar} alt="" />
            <span className="swiper-slide__rating-count"></span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">  
        <div className="swiper-slide__image"><img src={sliderImg2} alt="" /></div>
          <div className="swiper-slide__title">AK-900 Wired Keyboard</div>
          <div className="swiper-slide__price">
              <div className="swiper-slide__price-new">$960</div>
              <div className="swiper-slide__price-old">$1160</div>
          </div>
          <div className="swiper-slide__rating">
            <img src={fourStar} alt="" />
            <span className="swiper-slide__rating-count"></span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">  
        <div className="swiper-slide__image"><img src={sliderImg3} alt="" /></div>
          <div className="swiper-slide__title">IPS LCD Gaming Monitor</div>
          <div className="swiper-slide__price">
              <div className="swiper-slide__price-new">$370</div>
              <div className="swiper-slide__price-old">$400</div>
          </div>
          <div className="swiper-slide__rating">
            <img src={fiveStar} alt="" />
            <span className="swiper-slide__rating-count"></span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">  
        <div className="swiper-slide__image"><img src={sliderImg4} alt="" /></div>
          <div className="swiper-slide__title">S-Series Comfort Chair</div>
          <div className="swiper-slide__price">
              <div className="swiper-slide__price-new">$375</div>
              <div className="swiper-slide__price-old">$400</div>
          </div>
          <div className="swiper-slide__rating">
            <img src={fourHalfStar} alt="" />
            <span className="swiper-slide__rating-count"></span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">  
        <div className="swiper-slide__image"><img src={sliderImg3} alt="" /></div>
          <div className="swiper-slide__title">IPS LCD Gaming Monitor</div>
          <div className="swiper-slide__price">
              <div className="swiper-slide__price-new">$370</div>
              <div className="swiper-slide__price-old">$400</div>
          </div>
          <div className="swiper-slide__rating">
            <img src={fiveStar} alt="" />
            <span className="swiper-slide__rating-count"></span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-navigation">
        <div className="custom-prev swiper-button-prev"></div>
        <div className="custom-next swiper-button-next"></div>
      </div>
    </div>
  );
}

export default SalesSlider;

