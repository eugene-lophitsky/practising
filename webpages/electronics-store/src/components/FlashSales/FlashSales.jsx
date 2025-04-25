import FlashsalesSlider from "./FlashsalesSlider.jsx";

function FlashSales () {
  return (
    <div className="flash-sales">
        <div className="flash-sales__wrapper">
          <div className="flash-sales__caption">
            <div className="flash-sales__caption-tab"></div>
            <div className="flash-sales__caption-text">Today&apos;s</div>
          </div>
          <div className="flash-sales__title">Flash Sales</div>
          <FlashsalesSlider/>
        </div>
    </div>
  )
}

export default FlashSales;