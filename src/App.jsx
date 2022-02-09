import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import LoginPage from "./Login/Login";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<LoginPage />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
