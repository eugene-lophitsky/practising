import data from "./data.js";

function Services () {
  return (
    <div className="services">
        <div className="services__wrapper">
            <div className="services__title"></div>
            <div className="services-list">
            {data.map(item => (
              <div key={item.description} className="services-list__item">
                <img src={item.img} alt="" />
                <div className="services-list__item-title">{item.title}</div>
                <div className="services-list__item-description">{item.description}</div>
                <a className="services-list__item-button"></a>
              </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Services;