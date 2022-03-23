import React from "react";
// import { connect } from "react-redux";

import { useOutletContext } from "react-router-dom";

// import collectionItem from "../../components/collection-item/collection-item.component";
// import { selectCollection } from "../../redux/shop/shop.selector";
import ParticularPage from "../../components/particular-page/particular-page.component";
import './collection.styles.scss';


const CollectionPage = () => {
    const {collectionID} = useOutletContext();

    return (
        <ParticularPage collectionID = {collectionID}/>
    )
}



export default CollectionPage;