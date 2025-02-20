import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrderForm />} />
        <Route path="/orders" element={<OrderList />} />
      </Routes>
    </Router>
  );
};

export default App;
