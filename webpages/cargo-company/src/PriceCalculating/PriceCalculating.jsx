import Stepper from './Stepper.jsx';
import man from '/man.webp';

function PriceCalculating () {
  return (
    <div className="price-calculating">
        <div className="price-calculating-wrapper">
            <div className="price-calculating-form">
              <Stepper/>
            </div>
            <div className="price-calculating-image">
              <img src={man} alt="" />
            </div>
        </div>
    </div>
  )
}

export default PriceCalculating;