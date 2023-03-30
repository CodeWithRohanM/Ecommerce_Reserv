import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LogInPage from "./Components/LogInPage";
import RegisterPage from "./Components/RegisterPage";
import ErrorPage from "./Components/ErrorPage";
import TicketPage from "./Components/TicketPage";
import ContactPage from "./Components/ContactPage";
import Header from "./Components/Header";


const App = () => {
  return <>




    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route exact path="/contact" element={<ContactPage />}></Route>
      <Route exact path="/ticket" element={<TicketPage />}></Route>
      <Route exact path="/logIn" element={<LogInPage />}></Route>
      <Route exact path="/register" element={<RegisterPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>



  </>
};

export default App;