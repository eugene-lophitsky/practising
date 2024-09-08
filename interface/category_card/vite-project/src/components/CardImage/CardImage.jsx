import Door_lock from '../CardImage/images/door_lock.png';
import '../CardImage/cardimage.css';

const CardImage = () => {
    return (
        <div className='cardImage'>
           <img src= {Door_lock} alt="дверной замок" />
        </div>
    )
}

export default CardImage;