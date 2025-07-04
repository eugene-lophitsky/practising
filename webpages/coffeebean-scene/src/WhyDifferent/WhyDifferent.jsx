function WhyDifferent () {

    const advantages = [
        {
            image: "src/assets/img/supreme-beans.png",
            title: "Supreme Beans",
            description: "Beans that provides great taste",
        },
        {
            image: "src/assets/img/high-quality.png",
            title: "High Quality",
            description: "We provide the highest quality",
        },
        {
            image: "src/assets/img/extraordinary.png",
            title: "Extraordinary ",
            description: "Coffee like you have never tasted",
        },
        {
            image: "src/assets/img/affordable-price.png",
            title: "Affordable Price",
            description: "Our Coffee prices are easy to afford",
        }
    ];
    return (
        <div className="why-different">
            <div className="why-different__wrapper">
                <div className="why-different__title">Why are we different?</div>
                <div className="why-different__subtitle">We don’t just make your coffee, we make your day!</div>
                <div className="why-different-advantages">
                    {advantages.map((item) => (
                        <div key={item.title} className="why-different-advantage">
                            <div className="why-different-advantage__image">
                                <img src={item.image} alt="" />
                                </div>
                            <div className="why-different-advantage__title">{item.title}</div>
                            <div className="why-different-advantage__description">{item.description}</div>
                        </div>
                    ))}
                </div>
                <div className="why-different-afterwords">
                  <div className="why-different-afterwords__wrapper">
                  <div className="why-different-afterwords__slogan">
                        Great ideas start with great coffee, Lets help you achieve that
                    </div>
                    <div className="why-different-afterwords__appeal">Get started today.</div>
                    <a href="#" className="why-different-afterwords__button">Join Us</a>
                  </div>
                </div>    
            </div>
        </div>
    )
}

export default WhyDifferent;