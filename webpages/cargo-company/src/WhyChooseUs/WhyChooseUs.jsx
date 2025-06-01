import data from './data.js';

function WhyChooseUs () {
  return (
    <div className="why-choose-us">
        <div className="why-choose-us__wrapper">
            <div className="why-choose-us__title">ПОЧЕМУ СТОИТ ВЫБРАТЬ ИМЕННО НАС?</div>
            <div className="why-choose-us__explanations">
                {data.map(item => (
                  <div key={item.title}>{item.title}</div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs;