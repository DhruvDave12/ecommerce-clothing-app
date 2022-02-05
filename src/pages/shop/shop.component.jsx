import React from "react";
import SHOP_DATA from './shop.data';

import CollectionPreview from "../../components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className="shop-page">
            {
                // use this otherCollectionProps when the name of field and props are same 
                // saves time
                collections.map(({id, ...otherCollectionprops}) => (
                    <CollectionPreview key={id} {...otherCollectionprops}/>
                ))
            }
                
            </div>
        )
    }
}


export default ShopPage;