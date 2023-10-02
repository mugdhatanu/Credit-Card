import { useState } from 'react';
import '../styles/Form.css'
import  PropTypes  from 'prop-types';

const Form = ({formInputs,setFormInputs,setUpdateCard}) => {
    const [errorMessage,setErrorMessage] = useState(
      {
        name: "", 
        number: "", 
        expiry: { 
          month: "",
          year: ""
        },
        cvc: ""
      }
      );
    
    const validateHolderName = () => {
      const holderName = formInputs.holderName;
      if(holderName.length < 5) {
        setErrorMessage(prevMessage => ({...prevMessage, name: "Invalid cardholder name"}));
        return false;
      }
      setErrorMessage(prevMessage => ({...prevMessage,name: ""}));
      return true;
    }
  
    const validateCardNumber = () => {
      const cardNumber = formInputs.cardNumber.replace(/\s/g, '');
      setFormInputs(prevInputs => ({...prevInputs, cardNumber}));
      if(cardNumber.length !== 16 || isNaN(cardNumber)) {
        setErrorMessage(prevMessage => ({...prevMessage, number: "Invalid card number"}));
        return false;
      }
      setErrorMessage(prevMessage => ({...prevMessage,number: ""}));
      return true;
    }
  
    const validateExpiryDate = () => {
      const checkMonth = validateMonth();
      const checkYear = validateYear();
      if(checkMonth && checkYear) {
        return true;
      }
      return false;
    }
  
  
    const validateMonth = () => {
      const expiryDate = formInputs.expiryDate;
      const month = expiryDate.month;
      if(month.length !== 2 || isNaN(month)) {
        setErrorMessage(prevMessage => ({...prevMessage, expiry: {...prevMessage.expiry,month: "Invalid month"}}));
        return false;
      }
      const monthRange = [1,2,3,4,5,6,7,8,9,10,11,12];
      // const monthRange = range(1,12);
      if(!monthRange.includes(parseInt(month))) {
        setErrorMessage(prevMessage => ({...prevMessage, expiry: {...prevMessage.expiry,month: "Invalid month"}}));
        return false;
      }
      setErrorMessage(prevMessage => ({...prevMessage,expiry: {...prevMessage.expiry,month: ""}}));
      return true;
    }
  
    const validateYear = () => {
      const expiryDate = formInputs.expiryDate;
      const year = expiryDate.year;
      const digits = [2,4];
      if(isNaN(year) || digits.includes(parseInt(year))) {
        setErrorMessage(prevMessage => ({...prevMessage, expiry: {...prevMessage.expiry,year: "Invalid year"}}));
        return false;
      }
      setErrorMessage(prevMessage => ({...prevMessage,expiry: {...prevMessage.expiry,year: ""}}));
      return true;
    }
  
    // const range = (startIndex,endIndex) => {
    //   if(endIndex) {
    //     const rangeArr = [...Array(endIndex+1).keys()].filter((_,i) => i>= startIndex);
    //     return rangeArr;
    //   }
    //   const range = startIndex;
    //   return [...Array(range+1).keys()].filter((_,i) => i!==0);
    // }
  
    const validateCvc = () => {
      const cvc = formInputs.cvc;
      if(!isNaN(cvc) && cvc.length !== 3) {
        setErrorMessage(prevMessage => ({...prevMessage, cvc: "Invalid cvc"}));
        return false;
      }
      setErrorMessage(prevMessage => ({...prevMessage,cvc: ""}));
      return true;
    }
  
    const validation = () => {
      const isvalidName = validateHolderName();
      const isValidNumber = validateCardNumber();
      const isValdDate = validateExpiryDate();
      const isValidCvc = validateCvc();
      if(isvalidName && isValidNumber && isValdDate && isValidCvc) {
        return true;
      }
      return false;
    }
  
    const confirm = (e) => {
      e.preventDefault();
      const validate = validation();
      if(validate) {
        setUpdateCard(true);
      }
    }
    

    return (
        <form className='card-form'>
          <div>
              <label htmlFor='holderName'>CARDHOLDER NAME:</label>
              <input 
                type="text" 
                placeholder = "e.g. Jane Appleseed" 
                name="holder-name" 
                id="holder-name" 
                value = {formInputs.holderName} 
                onChange={(e) => setFormInputs(prevValues => ({...prevValues,holderName: e.target.value}))}
              />
              {errorMessage.name && <p className='error-msg'>{errorMessage.name}</p>}
          </div>
           <div>
              <label htmlFor='card-number'>CARD NUMBER</label>
              <input 
                type="text" 
                placeholder = "e.g. 1234 5678 9123 0000" 
                name="cardNumber" 
                id="card-number" 
                value = {formInputs.cardNumber} 
                onChange={(e) => setFormInputs(prevValues => ({...prevValues,cardNumber: e.target.value}))}
              />
              {errorMessage.number && <p className='error-msg'>{errorMessage.number}</p>}
           </div>
           <div className='date-cvc'>
              <div className='exp'>
                  <label htmlFor='expiry-date-month'>EXP DATE (MM/YY)</label>
                  <div className='exp-date'>
                      <div>
                          <input 
                            type="text" 
                            placeholder = "MM" 
                            name="expiry-date" 
                            id="expiry-date-month" 
                            value = {formInputs.expiryDate.month} 
                            onChange={(e) => setFormInputs(prevValues => ({...prevValues, expiryDate: {...prevValues.expiryDate, month: e.target.value}}))}
                          />
                          {errorMessage.expiry.month && <p className='error-msg'>{errorMessage.expiry.month}</p>}
                      </div>
                      <div>
                          <input 
                            type="text" 
                            placeholder = "YY" 
                            name="expiry-date" 
                            id="expiry-date-year" 
                            value = {formInputs.expiryDate.year} 
                            onChange={(e) => setFormInputs(prevValues => ({...prevValues, expiryDate: {...prevValues.expiryDate, year: e.target.value}}))}
                          />
                          {errorMessage.expiry.year && <p className='error-msg error-year'>{errorMessage.expiry.year}</p>}
                      </div>
                  </div>
              </div>
              <div className='cvc'>
                <label htmlFor='cvc'>CVC</label>
                <input 
                  type="password" 
                  placeholder = "e.g. 123" 
                  name="cvc" 
                  id="cvc" 
                  value = {formInputs.cvc} 
                  onChange={(e) => setFormInputs(prevValues => ({...prevValues,cvc: e.target.value}))}
                />
                {errorMessage.cvc && <p className='error-msg'>{errorMessage.cvc}</p>}
            </div>
           </div>  
            <button type="submit" onClick={(e) => confirm(e)}>Confirm</button>
            </form>
    )
}

Form.propTypes = {
  // formInputs: PropTypes.exact({
  //   holderName: PropTypes.string,
  //   cardNumber: PropTypes.string,
  //   expiryDate: PropTypes.exact({
  //     month: PropTypes.string,
  //     year: PropTypes.string
  //   }),
  //   cvc: PropTypes.string
  // }),
  formInputs: PropTypes.object,
  setFormInputs: PropTypes.func,
  setUpdateCard: PropTypes.func
}

export default Form
