import React from "react";

import { connect } from 'react-redux';
import { addItem } from "../../redux/cart/cart.actions";

import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItem }) => {
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${item.imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">${item.price}</span>
            </div>
            <CustomButton className = "custom" onClick={() => addItem(item)}> ADD TO CART </CustomButton>
        </div>
    )
}


const mapDispathToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null, 
    mapDispathToProps
)(CollectionItem);