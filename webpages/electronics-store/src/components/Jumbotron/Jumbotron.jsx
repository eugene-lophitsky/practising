import JumbotronSlider from './JumbotronSlider.jsx';
import '../Jumbotron/Jumbotron.css';
import { links } from './links.js';

function Jumbotron () {

    return (
        <div className="jumbotron">
            <div className="jumbotron__wrapper">
                <div className="jumbotron-menu">
                   {links.map(link => <a href="#" key={link} className="jumbotron-menu__link">{link}</a>)}
                </div>
                <JumbotronSlider/>
                
            </div>
        </div>
    )
}

export default Jumbotron;

