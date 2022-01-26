import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH_FAVLIST, PATH_ROOT, PATH_USER_SIGNIN } from "./constants/paths";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { OrderContextProvider } from "./context/orderContext";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // for toast msgs

import OrderPage from "./pages/orderPage/OrderPage";
import Navbar from "./components/Navbar";
import Counter from "./components/counter/Counter";
import Login from "./pages/login/index";
import Basket from "./components/Basket/index";
import Header from "./components/Header/index";

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
        <Header />
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
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
        {/* <h3>React-testing world 👩‍🏫</h3> */}
      </div>
      {/* </ToastContainer> */}
    </BrowserRouter>
  );
}
export default App;
