import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import LoginPage from "./Login/Login";
import HomePage from "./Home/Home";
import Root from "./Root/Root";
import LogoutPage from "./Logout/Logout";
import WeekView from "./WeekView/WeekView";
import PickPeriod from "./Onboarding/PickPeriod";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Root/>}/>
              <Route path={"/login"} element={<LoginPage />}/>
              <Route path={"/logout"} element={<LogoutPage/> }/>
              <Route path={"/home"} element={<HomePage />}/>
              <Route path={"/pick_period"} element={<PickPeriod />}/>
              <Route path={"/week_view"} element={<WeekView />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
