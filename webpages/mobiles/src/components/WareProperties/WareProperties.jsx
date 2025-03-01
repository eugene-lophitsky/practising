import React from "react";
import "../WareProperties/wareProperties.css";

const WareProperties = () => {
    return (
        <>
                <div className="main-misc-article-props">
                <div className="main-misc-article-props__header">
                  Характеристики товара
                </div>
                <ul className="main-misc-article-props-list">
                  <li className="main-misc-article-props__name">
                    Экран:&nbsp;
                    <span className="main-misc-article-props__name-value">
                       6.1
                    </span>
                  </li>
                  <li className="main-misc-article-props__name">
                    Встроенная память:&nbsp;
                    <span className="main-misc-article-props__name-value">
                      128 ГБ
                    </span>
                  </li>
                  <li className="main-misc-article-props__name">
                    Операционная система:&nbsp;
                    <span className="main-misc-article-props__name-value">
                      iOS 15
                    </span>
                  </li>
                  <li className="main-misc-article-props__name">
                    Беспроводные интерфейсы:&nbsp;
                    <span className="main-misc-article-props__name-value">
                      NFC, Bluetooth, Wi-Fi
                    </span>
                  </li>
                  <li className="main-misc-article-props__name">
                    Процессор:&nbsp;
                    <span className="main-misc-article-props__name-value">
                      <a
                        href="https://ru.wikipedia.org/wiki/Apple_A15"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Apple A15 Bionic
                      </a>
                    </span>
                  </li>
                  <li className="main-misc-article-props__name main-misc-article-props__list_padbottom-0">
                    Вес:&nbsp;
                    <span className="main-misc-article-props__name-value">
                      173 г
                    </span>
                  </li>
                </ul>
              </div>
        </>
    )
}


export default WareProperties;