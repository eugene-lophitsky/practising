import data from "./data";

function ShippingMethods () {
  return (
    <div className="shipping-methods">
        <div className="shipping-methods__wrapper">
            <div className="shipping-methods__title">варианты доставки грузов из Китая</div>
            <div className="shipping-methods__divider"></div>
            <div className="shipping-methods__cards">
              {data.map(item => (
                <div key={item.title} className="shipping-methods__card">
                  <span className="shipping-methods__image-wrapper"><img className="shipping-methods__image" src={item.img} alt="" /></span>
                  <div className="shipping-methods__card-title">{item.title}</div>
                  <div className="shipping-methods__params">
                      <span className="shipping-methods__time">
                        <img src={item.datePicker} className="shipping-methods__time-icon"/>
                        <span className="shipping-methods__time-text">{item.time}</span>
                      </span>
                      <span className="shipping-methods__weight">
                        <img src={item.container} alt="" />
                        <span className="shipping-methods__weight-text">{item.initWeight}</span>
                      </span>
                      <div className="shipping-methods__price">
                        <span className="shipping-methods__price-initValue">{item.price.initValue}</span>
                        <span className="shipping-methods__price-amount">{item.price.amount}</span>
                        <span className="shipping-methods__price-currency">{item.price.currency}</span>
                        <span className="shipping-methods__price-weightUnit">{item.price.weightUnit}</span>
                      </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default ShippingMethods;