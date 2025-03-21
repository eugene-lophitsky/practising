import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import first from "/public/jumbotron_slider_img_1.jpg";
import second from "/public/jumbotron_slider_img_2.jpg";
import third from "/public/jumbotron_slider_img_3.jpg";
import fourth from "/public/jumbotron_slider_img_4.jpg";

function App() {
  return (
    <>
    <div className="header">
      <div className="header-logo"></div>
      <nav className="header__links"></nav>
      <a href="" className="header__button"></a>
    </div>
  <div className="swiper">
        <Swiper modules={[ Navigation, Pagination, Scrollbar]} slidesPerView={1} navigation pagination={{clickable:true}} loop={true} centeredSlidesBounds={true} centeredSlides={true}>
        <SwiperSlide>
        <img src={first} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={second} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={third} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={fourth} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default App;
