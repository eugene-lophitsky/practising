import Stepper from './Stepper.jsx';
import man from '/man.webp';

function PriceCalculating () {
  return (
    <div className="price-calculating">
        <div className="price-calculating__wrapper">
            <Stepper/>
            <div className="price-calculating-image">
              <img src={man} alt="" />
            </div>
        </div>
    </div>
  )
}

export default PriceCalculating;