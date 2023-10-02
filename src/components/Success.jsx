import './../styles/Success.css'
import PropTypes from 'prop-types';


const Success = ({setFormInputs,setUpdateCard}) => {

    const handleSubmit = () => {
        setFormInputs({
            holderName: "", 
            cardNumber: "", 
            expiryDate: {
                month: "", 
                year: ""
            }, 
            cvc: ""
        })
        setUpdateCard(false)
    }
    return (
        <div className='success-box'>
            <h3>THANK YOU!</h3>
            <p>We&#39;ve added your card details</p>
            <button onClick={handleSubmit}>Continue</button>
        </div>
    )
}

Success.propTypes = {
    setUpdateCard: PropTypes.func,
    setFormInputs: PropTypes.func
}

export default Success
