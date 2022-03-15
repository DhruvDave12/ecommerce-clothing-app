import React from "react";
import { Link } from 'react-router-dom';

// this lets us modify items related to redux.
import { connect } from 'react-redux';

import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                {/* Here comes our Logo */}
                <Logo className='logo' />

            </Link>

            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" style={{cursor:"pointer"}} onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/signin">
                            SIGN IN
                        </Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropDown />
            }
        </div>
    )
}

// this is a function that goes as an argument in connect and helps to get data from the redux store

// createStructuredSelector instead of taking state and passing it we can simply jsut use createStructureSelector
// and it will automatically pass the state.
// just decreases the time for writing code.

const mapStateToProps = createStructuredSelector({
    // currentUser at the right is the prop name that will be passed to the above component and right side is the data we are getting from the store.
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// connect is method which simply connects the redux store to the react app.
export default connect(mapStateToProps)(Header);