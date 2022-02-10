import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import LoginPage from "./Login/Login";
import HomePage from "./Home/Home";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<LoginPage/>}/>
              <Route path={"/login"} element={<LoginPage />}/>
              <Route path={"/home"} element={<HomePage />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
