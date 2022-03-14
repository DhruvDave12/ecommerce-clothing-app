import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import './preview-collection.styles.scss';

const CollectionPreview = ({title, items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {
                // Only displaying 4 items thats why first filter the first four and then map over them
                items.filter((item, idx) => idx < 4).map(item => (
                    <CollectionItem key = {item.id} item={item} />
                ))
            }

            </div>
        </div>
    )
}

export default CollectionPreview;