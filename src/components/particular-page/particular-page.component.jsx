import React from "react";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../collection-item/collection-item.component";
import './particular-page.styles.scss';

const ParticularPage = ({collection}) => {
    const {title, items} = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key = {item.id} item = {item}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return (
        {
            collection: selectCollection(ownProps.collectionID)(state)
        }
    )
}

export default connect(mapStateToProps)(ParticularPage);