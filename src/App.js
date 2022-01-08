import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OrderContextProvider } from "./context/orderContext";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // for toast msgs

import OrderPage from "./pages/orderPage/OrderPage";
import Navbar from "./components/Navbar";
import Counter from './components/counter/Counter';
import Login from './pages/login/index';
import Basket2 from './components/Basket2/index';

function App() {
  return (
    <BrowserRouter>
    {/* <ToastContainer> */}
    <div className="App">
        <Navbar />
        <Routes>
    <Route path="/counter" element={<Counter />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/mytrip" element={()=>{
        <OrderContextProvider>
        <OrderPage />
      </OrderContextProvider>
      }} />
            <Route path="/cart" element={<Basket2/>} />
    </Routes>
        {/* <h3>React-testing world 👩‍🏫</h3> */}
    </div>
    {/* </ToastContainer> */}
    </BrowserRouter>
  );
}
export default App;
