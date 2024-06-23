import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Checkout.css';

const axiosConf = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    authorization: localStorage.getItem("token")
  }
})

const Checkout = () => {
  const navigate = useNavigate();
  const notify = (msg) => toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const errorNotify = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const location = useLocation();
  const { cartData, totalPrice } = location.state || { cartData: [], totalPrice: 0 };

  const [paymentMethod, setPaymentMethod] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [comment, setComment] = useState("");

  const userData = JSON.parse(localStorage.getItem("user"))?.user;

  // Mock user data
  const userAddress = {
    name: userData?.name,
    address: userData?.address
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
    if (paymentMethod === 'vod' && receipt) {
      formSubmissionData.append('receipt', receipt);
    }
    axiosConf.post("orders", {
      dishes: cartData.map(item => +item.id),
      deliveryTime: (new Date(deliveryTime).toISOString()).split("T")[0],
      address: formData.address
    }).then(
      res => {
        if (res?.data?.orderId) {
          const orderId = res.data.orderId;
          axiosConf.post("customer-pay", {
            orderId,
            method: paymentMethod,
            amountPaid: totalPrice,
            totalCost: totalPrice
          }).then(
            res => {
              if (res?.data?.msg) {
                if (paymentMethod === "VODAFONE_CASH") {
                  const formData = new FormData();
                  formData.append("image", receipt);
                  axiosConf.post(`wallet-proof/${res.data?.paymentId}`, formData)
                    .then(res => {
                      if (comment) submitComment(orderId);
                      notify("Order has been submitted successfully");
                      navigate("/")
                    });
                } else {
                  if (comment) submitComment(orderId);
                  notify("Order has been submitted successfully");
                  navigate("/")
                }
              }
            }
          ).catch(err => errorNotify("Something went wrong"))
        }
      }
    ).catch(err => errorNotify("Something went wrong"))
  };

  function submitComment(orderId) {
    axiosConf.post(`comment`, {
      orderId,
      comment
    })
      .then()
  }

  function updateComment(event) {
    setComment(event.target.value)
  }

  return (
    <div className="checkout-body">
      <div className="checkout-container">
        <h1>Checkout</h1>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          {cartData.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
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
       
            </form>
          ) : (
            <div>
              <p><strong>Name:</strong> {userAddress.name}</p>
              <p><strong>Address:</strong> {userAddress.address}</p>
              {/* <p><strong>City:</strong> {userAddress.city}</p> */}
            
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
          <div className="form-group">
                <label htmlFor="city">Comment:</label>
                <input
                  type="text"
                  className="checkout-input"
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={updateComment}
                />
              </div>

          <div className="form-group payment-options">
            <label>Payment Method:</label>
            <div>
              <input 
                type="radio" 
                id="cash" 
                name="payment" 
                value="CASH" 
                checked={paymentMethod === 'CASH'} 
                onChange={handlePaymentChange} 
                required
              />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="vod" 
                name="payment" 
                value="VODAFONE_CASH" 
                checked={paymentMethod === 'VODAFONE_CASH'} 
                onChange={handlePaymentChange} 
                required
              />
              <label htmlFor="vod">Vodafone Cash</label>
            </div>
          </div>
          {paymentMethod === 'VODAFONE_CASH' && (
            <div className="form-group">
              <label htmlFor="receipt">Upload Vodafone cash Receipt:</label>
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
          <button type="submit" disabled={!paymentMethod} className={`small-button ${(!paymentMethod || (paymentMethod === "VODAFONE_CASH" && !receipt)) ? 'disabled' : ''}`}>Submit Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
