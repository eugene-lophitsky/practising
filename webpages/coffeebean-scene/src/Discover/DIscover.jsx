import coffeeCup from "../assets/img/сup-of-coffee.webp"

function Discover () {
    return (
        <div className="discover">
            <div className="discover__wrapper">
            <div className="discover-detailed">
                <div className="discover-detailed__title">Discover the best coffee</div>
                <div className="discover-detailed__description">
                    Bean Scene is a coffee shop that provides 
                    you with quality coffee that helps boost 
                    your productivity and helps build your mood. 
                    Having a cup of coffee is good, but having a
                     cup of real coffee is greater. There is no 
                     doubt that you will enjoy this coffee more 
                     than others you have ever tasted.
                </div>
                <a href="#" className="discover-detailed__button">Learn More</a>
            </div>
            <div className="discover__image">
                <img src={coffeeCup} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Discover;