import React from "react";
import "../Gallery/Gallery.css";

export default function Gallery (props) {
    return (
        <>
<div className="iphone-promo-angles">
              <img
                className="iphone-promo-angles__stage"
                src={'./images/image-1.webp'}
                alt="тыльная и лицевая сторона"
              />
              <img
                className="iphone-promo-angles__stage"
                src={'./images/image-2.webp'}
                alt="лицевая сторона"
              />
              <img
                className="iphone-promo-angles__stage"
                src={'./images/image-3.webp'}
                alt="экран и тыльная сторона под углом"
              />
              <img
                className="iphone-promo-angles__stage"
                src={'./images/image-4.webp'}
                alt="блок основных камер крупным планом"
              />
              <img
                className="iphone-promo-angles__stage"
                src={'./images/image-5.webp'}
                alt="тыльная и лицевая сторона"
              />
            </div>
        </>
    )
}
  