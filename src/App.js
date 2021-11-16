import React from 'react';
import OrderPage from './pages/orderPage/OrderPage';

import Navbar from './components/Navbar';
import { OrderContextProvider } from './context/orderContext';
function App() {

  return (
    <div className="App">
      <Navbar />
      <OrderContextProvider>
        <OrderPage />
      </OrderContextProvider>
    </div>
  );
}
export default App;
