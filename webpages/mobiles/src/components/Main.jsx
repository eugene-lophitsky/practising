import React from "react";
import "./Main.css";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Gallery from "../components/Gallery/Gallery";
import Colors from "../components/ColorButton/Colors";
import Configs from "../components/ConfigButton/Configs";
import WareProperties from "../components/WareProperties/WareProperties";
import Description from "../components/Description/Description";
import Comparison from "../components/Comparison/Comparison";
import Sidebar from "../components/Sidebar/Sidebar";
import Review from "../components/Reviews/Review";
import ReviewForm from "../components/ReviewForm/ReviewForm";

function Main() {
  return (
    <>
      <div className="main-wrap">
        <Header />
        <div className="wrapper" id="scroll-up">
          <div className="iphone-promo">
            <Breadcrumbs />
            <div className="iphone-promo__model wrapper_pos-acs">
              Смартфон Apple iPhone 13, синий
            </div>
            <Gallery />
          </div>
          <div className="main">
            <div className="main-misc wrapper_maxw-880">
              <div className="main-misc-params">
                <Colors />
                <Configs />
              </div>
              <WareProperties />
              <Description />
              <Comparison />
              <div className="main-misc-reviews wrapper_reviews-mtb">
                <div className="main-misc-reviews__header">
                  <div className="main-misc-reviews__counter">
                    <span className="main-misc-reviews__text">Отзывы</span>
                    <span
                      className="main-misc-reviews__counter-value main-misc-reviews__counter_с-grey">
                      425
                    </span>
                  </div>
                </div>
            
                <Review />
              </div>
              <ReviewForm />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
