import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import CollectionPage from './pages/collection/collection.component';
// import { selectCollectionsForPreview } from './redux/shop/shop.selector';
class App extends React.Component {

  unsubscibeFromAuth = null;

  componentDidMount() {
    // we are getting this setCurrentUser from the props.
    const { setCurrentUser } = this.props;
    this.unsubscibeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // Getting the userData 
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // Through this onSnapShot method we get a snapshot on which through the 
          // .data() method we can get the data stored
          // Now we will store the data and the id in our state so that we can access the data inside our app
          
          // set current user expects a user object so we are providing it
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      // when user logs out we will set currentUser to null
      // this.setState({ currentUser: userAuth });
      setCurrentUser(userAuth);
      // we only need titles anditems
     
    });
  }
  render() {
    return (
      // Routes allow to render any first match.
      // Gives more performance and more control over the code.
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/shop" element={<ShopPage />}>
              <Route path=":id" element={<CollectionPage />}/> 
          </Route>

          <Route path="/signin" element={this.props.currentUser ? <HomePage /> : <SignInAndSignUpPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </>
    );
  }
}

// destructuring the user prop from the state from redux store
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
// this function just helps in updating the redux store with the new firebase snapshot.
const mapDispathToProps = dispatch => ({
  // we are setting the setCurrentUser prop as the function which expects a user and then dispatches that user to the action payload.
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispathToProps)(App);
