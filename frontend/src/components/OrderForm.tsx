import React, { useState } from 'react';
import axios from 'axios';

const OrderForm: React.FC = () => {
  // Order state now includes product and quantity
  const [product, setProduct] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1); // Default quantity to 1
  const [message, setMessage] = useState<string>('');

  // Handle product change
  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct(e.target.value);
  };

  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  // Submit order to the backend
  const submitOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/orders', {
        product,    // Send product as string
        quantity,   // Send quantity as number
      });
      setMessage(`Order Submitted: ${response.data._id}`); // Show order ID or relevant data
    } catch (error) {
      setMessage('Error submitting order');
    }
  };

  return (
    <div>
      <h1>Place Order</h1>
      <div>
        <label>Product:</label>
        <input
          type="text"
          value={product}
          onChange={handleProductChange}
          placeholder="Enter product name"
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          placeholder="Enter quantity"
        />
      </div>
      <button onClick={submitOrder}>Submit</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OrderForm;
