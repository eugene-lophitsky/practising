import Slider from './JumbotronSlider.jsx';

function JumbotronSlider () {
    return (
        <div className="jumbotron">
            <div className="jumbotron__wrapper">
                <div className="jumbotron__menu">
                    <a className="jumbotron__menu-link" href="#">Woman’s Fashion</a>
                    <a className="jumbotron__menu-link" href="#">Men’s Fashion</a>
                    <a className="jumbotron__menu-link" href="#">Electronics</a>
                    <a className="jumbotron__menu-link" href="#">Home & Lifestyle</a>
                    <a className="jumbotron__menu-link" href="#">Medicine</a>
                    <a className="jumbotron__menu-link" href="#">Sports & Outdoor</a>
                    <a className="jumbotron__menu-link" href="#">Baby’s & Toys</a>
                    <a className="jumbotron__menu-link" href="#">Groceries & Pets</a>
                    <a className="jumbotron__menu-link" href="#">Health & Beauty</a>
                </div>
                <Slider/>
            </div>
        </div>
    )
}

export default JumbotronSlider;