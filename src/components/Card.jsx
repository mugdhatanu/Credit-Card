import '../styles/card.css';
import PropTypes from 'prop-types';



const Card = ({formInputs, updateCard}) => {
  return (
    <div className="card">
      <div className='card-front'>
        <div className='circles'>
          <div className='circle-filled'></div>
          <div className='circle-empty'></div>
        </div>
        <div className='ellipses'>
          <div className='ellipse-one'></div>
          <div className='ellipse-two'></div>
          <div className='ellipse-three'></div>
          <div className='ellipse-four'></div>
          <div className='ellipse-five'></div>
          <div className='ellipse-six'></div>
        </div>
        {updateCard && formInputs.cardNumber  ? 
        <>
          <div className='card-number'>
            <p>{formInputs.cardNumber.substring(0,4)}</p>
            <p>{formInputs.cardNumber.substring(4,8)}</p>
            <p>{formInputs.cardNumber.substring(8,12)}</p>
            <p>{formInputs.cardNumber.substring(12,16)}</p>
          </div>
        </>
        :
        <>
          <div className='card-number'>
            <p>0000</p>
            <p>0000</p>
            <p>0000</p>
            <p>0000</p>
          </div>
        </>}
        <div className='name-expiry'>
          {updateCard && formInputs.holderName ?
          <p>{formInputs.holderName.toUpperCase()}</p> 
          :
          <p></p>}
          {updateCard && formInputs.holderName ?
          <p>
            <span>{formInputs.expiryDate.month}</span>
            <span>/</span>
            <span>{formInputs.expiryDate.year}</span>
          </p>
          : 
          <p>
            <span>00</span>
            <span>/</span>
            <span>00</span>
          </p>}
        </div>
      </div>
      <div className='card-back'>
        <div className='strap'></div>
        <div className='cvc-area'>
          {updateCard && formInputs.holderName ? 
          <p>{formInputs.cvc}</p>
          :
          <p>000</p>}
        </div>
        <div className = "skeleton">
            <div className= "upper-section">
                <div className='line-one'></div>
                <div className='line-two'></div>
                <div className='line-three'></div>
                <div className='line-four'></div>
            </div>
            <div className= "middle-section">
                <div className='line-one'></div>
                <div className='line-two'></div>
                <div className='line-three'></div>
                <div className='line-four'></div>
            </div>
            <div className= "lower-section">
                <div className='line-one'></div>
                <div className='line-two'></div>
                <div className='line-three'></div>
                <div className='line-four'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  formInputs: PropTypes.exact({
    holderName: PropTypes.string,
    cardNumber: PropTypes.string,
    expiryDate: PropTypes.exact({
      month: PropTypes.string,
      year: PropTypes.string
    }) ,
    cvc: PropTypes.string
  }),
  updateCard: PropTypes.bool
}

export default Card


