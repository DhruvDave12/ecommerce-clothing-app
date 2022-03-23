import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../preview-collection/preview-collection.component";
import './collections-overview.styles.scss';

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {
                // use this otherCollectionProps when the name of field and props are same 
                // saves time
                collections.map(({ id, ...otherCollectionprops }) => (
                    <CollectionPreview key={id} {...otherCollectionprops} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)