import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { OrderContextProvider } from "./context/orderContext";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // for toast msgs

import OrderPage from "./pages/orderPage/OrderPage";
import Counter from "./components/counter/Counter";
import Login from "./pages/login/index";
import Basket from "./components/Basket/index";
import Header from "./components/Header/index";
import FavCard from './components/FavCard/FavCard';

function App() {
  const [isShowSideNav, setIsShowSideNav] = useState(false);
  const showSideNav = () => setIsShowSideNav(true);
  const hideSideNav = () => setIsShowSideNav(false);

  const [isShowFavList, setIsShowFavList] = useState(false);
  const showFavList = () => setIsShowFavList(true);
  const hideFavList = () => setIsShowFavList(false);

  return (
    <BrowserRouter>
      {/* <ToastContainer> */}
      <div className="App">
        <Header isShowSideNav={isShowSideNav} hideSideNav={hideSideNav} />
        <Routes>
        <Route path="/" element={<Counter />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favs" element={<FavCard />} />
          <Route
            path="/mytrip"
            element={() => {
              <OrderContextProvider>
                <OrderPage />
              </OrderContextProvider>;
            }}
          />
          <Route path="/cart" element={<Basket />} />
        </Routes>
      </div>
      {/* </ToastContainer> */}
    </BrowserRouter>
  );
}
export default App;
