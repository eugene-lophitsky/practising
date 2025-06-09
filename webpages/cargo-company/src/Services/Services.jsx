import data from "./data.js";

function Services () {
  return (
    <div className="services --services-width">
        <div className="services__wrapper">
            <div className="services__title">услуги</div>
            <div className="services__divider"></div>
            <div className="services-list">
            {data.map(item => (
              <div key={item.title} className="services-list__item">
                <span className="services-list__item-bgwrapper">
                  <img src={item.img} alt="" className="services-list__item-bg" />
                </span>
                <div className="services-list-body">
                  <div className="services-list__item-title">{item.title}</div>
                  <div className="services-list__item-description">{item.description}</div>
                  <a href="#" className="services-list__item-button">Подробнее</a>
                </div>
              </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Services;