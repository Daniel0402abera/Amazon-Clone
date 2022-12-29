import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Login from "./Components/LogInPage/Login";
import Checkout from "./Components/CheckoutPage/Checkout";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Payment from "./Components/Payment/Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
// import IndividualIntervalsExample from "./Components/Slider/IndividualIntervalsExample";

// import Order from "./Components/Order/Order";

const promise = loadStripe(
  "pk_test_51MJGzlJlBWZUtzNxZ0VhUkGcTIz8RUyuDMuWOmNLwIeV5JL1AbMZOsi6YupWLOUaK4No0yKJOB24OdO6588aVqnc00AuGYBkBe"
);

// const promise = loadStripe(
//   "pk_test_51MJGzlJlBWZUtzNxZ0VhUkGcTIz8RUyuDMuWOmNLwIeV5JL1AbMZOsi6YupWLOUaK4No0yKJOB24OdO6588aVqnc00AuGYBkBe"
// );

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />

        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders/>
            </>
          }
        />
      </Routes>
      {/* <IndividualIntervalsExample/> */}

      {/* <CheckoutProduct />
      <Order/> */}
    </div>
  );
}

export default App;
