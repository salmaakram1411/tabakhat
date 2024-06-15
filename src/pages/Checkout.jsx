import React, { useState } from 'react';
import './Checkout.css'; // Ensure this path is correct

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [receipt, setReceipt] = useState(null);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleReceiptUpload = (event) => {
    setReceipt(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', event.target.name.value);
    formData.append('address', event.target.address.value);
    formData.append('city', event.target.city.value);
    formData.append('state', event.target.state.value);
    formData.append('zip', event.target.zip.value);
    formData.append('payment', paymentMethod);
    if (paymentMethod === 'fawry' && receipt) {
      formData.append('receipt', receipt);
    }

    console.log('Form data:', Object.fromEntries(formData.entries()));
    alert('Form submitted!');
  };

  return (
    <div className="checkout-body">
      <div className="checkout-container">
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" className="checkout-input" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Delivery Address:</label>
            <input type="text" className="checkout-input" id="address" name="address" required />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" className="checkout-input" id="city" name="city" required />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input type="text" className="checkout-input" id="state" name="state" required />
          </div>
          <div className="form-group">
            <label htmlFor="zip">ZIP Code:</label>
            <input type="text" className="checkout-input" id="zip" name="zip" required />
          </div>
          <div className="form-group payment-options">
            <label>Payment Method:</label>
            <div>
              <input 
                type="radio" 
                id="cash" 
                name="payment" 
                value="cash" 
                checked={paymentMethod === 'cash'} 
                onChange={handlePaymentChange} 
              />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="fawry" 
                name="payment" 
                value="fawry" 
                checked={paymentMethod === 'fawry'} 
                onChange={handlePaymentChange} 
              />
              <label htmlFor="fawry">Fawry</label>
            </div>
          </div>
          {paymentMethod === 'fawry' && (
            <div className="form-group">
              <label htmlFor="receipt">Upload Fawry Receipt:</label>
              <input 
                type="file" 
                id="receipt" 
                name="receipt" 
                className="checkout-input" 
                accept="image/*" 
                onChange={handleReceiptUpload} 
                required 
              />
            </div>
          )}
          <button type="submit" className="small-button">Submit Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
