import React from "react";
import { Outlet } from "react-router-dom";

import { connect } from 'react-redux';
// import { useLocation } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from "../../redux/shop/shop.actions";
class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections
            (collectionsMap);
        })
    }

    render() {
        var location = window.location;
        var collectionID;

        if (location.pathname !== "/shop") {
            var collectionIdd = location.pathname.split('/');
            collectionID = collectionIdd[2]
        }
        return (
            <div className="shop-page">
                {
                    location.pathname === "/shop" ? <CollectionsOverview /> : <Outlet context={{ collectionID }} />
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispath => ({
    updateCollections: collectionsMap => dispath(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);