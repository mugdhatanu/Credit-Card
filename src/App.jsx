import { useState } from 'react'
import Success from './components/Success';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

function App() {
  const [formInputs,setFormInputs] = useState(
    {
      holderName: "", 
      cardNumber: "", 
      expiryDate: {
        month: "", 
        year: ""
      }, 
      cvc: ""
    }
    );
    const [updateCard,setUpdateCard] = useState(false);


    return (
      <main>
        <section className = "card-section">
          <Card formInputs = {formInputs} updateCard = {updateCard}/>
        </section>
        <section className = "form-section">
          {updateCard ? 
          <Success setFormInputs = {setFormInputs} setUpdateCard={setUpdateCard}/>
          : 
          <Form formInputs = {formInputs} setFormInputs = {setFormInputs} setUpdateCard = {setUpdateCard}/>}
        </section>
      </main>
    )
}

export default App
