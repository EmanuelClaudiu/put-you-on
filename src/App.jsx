import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import LoginPage from "./Login/Login";
import HomePage from "./Home/Home";
import Root from "./Root/Root";
import LogoutPage from "./Logout/Logout";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Root/>}/>
              <Route path={"/login"} element={<LoginPage />}/>
              <Route path={"/logout"} element={<LogoutPage/> }/>
              <Route path={"/home"} element={<HomePage />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
