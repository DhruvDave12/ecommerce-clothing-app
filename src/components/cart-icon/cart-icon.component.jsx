import React from "react";
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { default as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { createStructuredSelector } from "reselect";
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <img src={ShoppingIcon} className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


// below is selector, now we should not re render everytime such components
// so we can use memoization i.e., caching the data and use that

// Reselect library helps us doing that.
const mapStateToProps =  createStructuredSelector({
    // it goes to first selectCartItems which furter goes to selectCart which uses this state
    // and then it comes down to selectCartItems and then to selectCartItemsCount and then returns the itemsCount.
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);