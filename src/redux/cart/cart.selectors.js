import { createSelector } from "reselect";

// this is input selector which gets us only cart from the whole state
const selectCart = state => state.cart;

// it is memoized selector
export const selectCartItems = createSelector(
    // first argument is collection of selectors
    [selectCart],
    
    // second argument is a function which has parameters in order of the above array
    // if length of array of collection of selectors is 2 where first is selectCart and second is
    // selectUser then we pass the argument in the second argument as (cart,user).
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

// it is also a memoized selector which uses the first one which gives us cartItems.
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => (
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
            0
        )
    ) 
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => (
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity*cartItem.price,
            0
        )
    )
)