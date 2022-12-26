import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Login from "./Components/LogInPage/Login";
import Checkout from "./Components/CheckoutPage/Checkout";
// import IndividualIntervalsExample from "./Components/Slider/IndividualIntervalsExample";

// import Order from "./Components/Order/Order";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <IndividualIntervalsExample/> */}

      {/* <CheckoutProduct />
      <Order/> */}
    </div>
  );
}

export default App;
