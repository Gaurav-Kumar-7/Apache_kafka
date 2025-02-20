import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Order {
  _id: string;
  product: string;
}

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order List</h1>
      <ul>
      {orders.map((order) => (
          <li key={order._id}>{order.product}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
