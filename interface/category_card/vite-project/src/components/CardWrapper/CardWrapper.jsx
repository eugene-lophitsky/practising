import '../CardWrapper/cardwrapper.css';
import Interact from '../Interact/Interact.jsx';
import CardImage from '../CardImage/CardImage.jsx';

const CardWrapper = () => {
    return (
        <div className="cardwrapper">
            <Interact/>
            <CardImage/>
        </div>
    )
}

export default CardWrapper;