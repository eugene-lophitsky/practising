import data from "./data.js";

function WhyChooseUs() {
    return (
        <div className="why-choose-us">
            <div className="why-choose-us__wrapper">
                <div className="why-choose-us__content">
                    <div className="why-choose-us__title">
                        ПОЧЕМУ СТОИТ ВЫБРАТЬ ИМЕННО НАС?
                    </div>
                    <div className="divider"></div>
                    <div className="why-choose-us__explanations">
                        {data.map((item) => (
                            <div key={item.title} className="why-choose-us__explanation">
                                <div className="why-choose-us__explanation-wrapper">
                                    <div className="why-choose-us__explanation-icon">
                                      <img src={item.img} alt="" />
                                    </div>
                                </div>
                                <div className="why-choose-us__explanation-title">{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;


