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
import {auth} from './firebase'
// import IndividualIntervalsExample from "./Components/Slider/IndividualIntervalsExample";

// import Order from "./Components/Order/Order";

function App() {
  const [{},dispatch] = useStateValue();
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
