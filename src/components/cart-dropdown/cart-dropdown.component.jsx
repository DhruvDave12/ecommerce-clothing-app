import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, dispatch }) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        :
                        <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <Link to="/checkout"><CustomButton onClick={() => {
                dispatch(toggleCartHidden());
            }} >GO TO CHECKOUT</CustomButton></Link>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})



// withRouter will take the returned compoenent as its component.
export default connect(mapStateToProps)(CartDropDown);