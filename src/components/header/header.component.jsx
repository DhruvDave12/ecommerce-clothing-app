import React from "react";
import { Link } from 'react-router-dom';

// this lets us modify items related to redux.
import { connect } from 'react-redux';
  
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => {
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

            </div>
        </div>
    )
}

// this is a function that goes as an argument in connect and helps to get data from the redux store
const mapStateToProps = state => ({
    // currentUser at the right is the prop name that will be passed to the above component and right side is the data we are getting from the store.
    currentUser: state.user.currentUser
})

// connect is method which simply connects the redux store to the react app.
export default connect(mapStateToProps)(Header);