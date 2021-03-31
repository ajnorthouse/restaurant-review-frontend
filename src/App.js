import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import HomePage from './components/home/HomePage';
import UpdateRestaurantPage from './components/admin/UpdateRestaurantPage';
import LeaveReviewPage from './components/user/LeaveReviewPage';
import LoginPage from './components/login-signup/LoginPage';
import LogoutPage from './components/login-signup/LogoutPage';
import SignUpPage from './components/login-signup/SignUpPage';
import RestaurantViewPage from './components/restaurant/RestaurantViewPage';
import SearchPage from './components/search/SearchPage';
import { ReactSession as Session } from 'react-client-session';
import React, { useState } from 'react';

function App() {
  Session.setStoreType("sessionStorage");
  if (Session.get("username") === undefined) Session.set("username", "");
  if (Session.get("name") === undefined) Session.set("name", "");
  if (Session.get("type") === undefined) Session.set("type", "");
  if (Session.get("password") === undefined) Session.set("password", "");
  if (Session.get("id") === undefined) Session.set("id", -1);


  return (
    <div>
      <Router>
          <NavBar/>
          <main>
            <Switch>
              <Route path="/search" component={SearchPage}><SearchPage/></Route>
              <Route path="/review" component={LeaveReviewPage}><LeaveReviewPage/></Route>
              <Route path="/update-restaurant" component={UpdateRestaurantPage}><UpdateRestaurantPage/></Route>

              <Route path="/login" component={LoginPage}><LoginPage/></Route>
              <Route path="/logout" component={LogoutPage}><LogoutPage/></Route>
              <Route path="/signup" component={SignUpPage}><SignUpPage/></Route>

              <Route path="/restaurant" component={RestaurantViewPage}><RestaurantViewPage/></Route>
              <Route path="/" component={HomePage}><HomePage/></Route>
            </Switch>
          </main>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
