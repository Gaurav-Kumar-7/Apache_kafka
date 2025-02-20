import axios from 'axios';

const API_URL = 'http://localhost:6000/api/orders';

export const getOrders = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders', error);
    return [];
  }
};

export const createOrder = async (order: string) => {
  try {
    const response = await axios.post(API_URL, { order });
    return response.data;
  } catch (error) {
    console.error('Error creating order', error);
    throw error;
  }
};
