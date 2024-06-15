import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  const [paymentMethod, setPaymentMethod] = useState('');
  const [receipt, setReceipt] = useState(null);

  // Mock user data
  const userAddress = {
    name: 'John Doe',
    address: '1234 Main St',
    city: 'Springfield',
    state: 'IL',
    zip: '62704'
  };

  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [formData, setFormData] = useState(userAddress);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [minDeliveryTime, setMinDeliveryTime] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1); // Set to one day in the future
    const minTime = currentDate.toISOString().slice(0, 16); // Format as "YYYY-MM-DDTHH:mm"
    setMinDeliveryTime(minTime);
  }, []);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleReceiptUpload = (event) => {
    setReceipt(event.target.files[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeliveryTimeChange = (event) => {
    setDeliveryTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formSubmissionData = new FormData();
    formSubmissionData.append('name', formData.name);
    formSubmissionData.append('address', formData.address);
    formSubmissionData.append('city', formData.city);
 
    formSubmissionData.append('payment', paymentMethod);
    formSubmissionData.append('deliveryTime', deliveryTime);
    if (paymentMethod === 'fawry' && receipt) {
      formSubmissionData.append('receipt', receipt);
    }

    console.log('Form data:', Object.fromEntries(formSubmissionData.entries()));
    alert('Form submitted!');
  };

  return (
    <div className="checkout-body">
      <div className="checkout-container">
        <h1>Checkout</h1>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imgSrc} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: EGP{item.price}</p>
              </div>
            </div>
          ))}
          <h3>Total Price: EGP{totalPrice}</h3>
        </div>

        <div className="address-section">
          <h2>Delivery Address</h2>
          {isEditingAddress ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  className="checkout-input"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  className="checkout-input"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  className="checkout-input"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
       
            </form>
          ) : (
            <div>
              <p><strong>Name:</strong> {userAddress.name}</p>
              <p><strong>Address:</strong> {userAddress.address}</p>
              <p><strong>City:</strong> {userAddress.city}</p>
            
              <button className='changeaddress' onClick={() => setIsEditingAddress(true)}>Change Address</button>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="deliveryTime">Preferred Delivery Time:</label>
            <input
              type="datetime-local"
              className="checkout-input"
              id="deliveryTime"
              name="deliveryTime"
              value={deliveryTime}
              onChange={handleDeliveryTimeChange}
              required
              min={minDeliveryTime}
            />
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
