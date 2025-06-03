import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import shippingImg from '/shipping-methods_img1.webp';

function ShippingSlider() {
  return (
    <div className="swiperWrapper" style={{ position: 'relative' }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        loop={true}
      >

        <SwiperSlide className="swiper-slide"> 
          <div className="swiper-slide__image"><img src={shippingImg} alt="" /></div>
          <div className="swiper-slide__title">HAVIT HV-G92 Gamepad</div>
          <div className="swiper-slide__price">
              <div className="swiper-slide__price-new">¥120</div>
              <div className="swiper-slide__price-old">¥160</div>
          </div>
          <div className="swiper-slide__rating">
            <img src alt="" />
            <span className="swiper-slide__rating-count">(88)</span>
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

export default ShippingSlider;

