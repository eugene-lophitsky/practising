import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../pages/page-index.css";

export default function PageIndex () {
  return (
        <div className="default-page">
        <Header />
        <div className="default-page-wrapper">
        <div className="default-page__content">
          <p className="default-page__text">
            Здесь должно быть содержимое главной&nbsp;страницы.
            Но&nbsp;в&nbsp;рамках курса главная страница используется&nbsp;лишь
            в&nbsp;демонстрационных целях
          </p>
          <Link className="default-page__ref" to="/product">
            <p>Перейти на страницу товара</p>
          </Link>
        </div>
        </div>
        <Footer />
        </div>
  );
}


