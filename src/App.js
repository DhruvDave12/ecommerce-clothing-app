import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {auth} from './firebase/firebase.utils';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }
 
  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    });  
  }
  render(){
    return (
      // Routes allow to render any first match.
      // Gives more performance and more control over the code.
      <>
        <Header  currentUser = {this.state.currentUser}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
