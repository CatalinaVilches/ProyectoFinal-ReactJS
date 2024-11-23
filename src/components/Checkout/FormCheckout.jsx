import React, { useState } from 'react';
import "./Checkout.css";

const FormCheckout = ({ handleSubmitForm }) => {
  const [dataForm, setDataForm] = useState({
    fullname: '',
    phone: '',
    email: '',
    mailConfirmation: ''
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value
    });
  };

  return (
    <form className='formBuyer' onSubmit={handleSubmitForm}>
      <div className='data'>
        <label htmlFor="fullname">Nombre completo</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          value={dataForm.fullname || ''} 
          onChange={handleChangeInput}
        />
      </div>

      <div className='data'>
        <label htmlFor="phone">Telefono</label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={dataForm.phone || ''}  
          onChange={handleChangeInput}
        />
      </div>

      <div className='data'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={dataForm.email || ''}  
          onChange={handleChangeInput}
        />
      </div>

      <div className='data'>
        <label htmlFor="mailConfirmation">Confirmar Email</label>
        <input
          type="email"
          name="mailConfirmation"
          id="mailConfirmation"
          value={dataForm.mailConfirmation || ''} 
          onChange={handleChangeInput}
        />
      </div>

      <button type="submit">Enviar mi pedido</button>
    </form>
  );
}

export default FormCheckout;
