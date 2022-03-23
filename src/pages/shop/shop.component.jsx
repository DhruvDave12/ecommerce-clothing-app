import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => {
    var location = useLocation();
    var collectionID;

    if(location.pathname !== "/shop"){
        var collectionIdd = location.pathname.split('/');
        collectionID = collectionIdd[2]
    }

    // console.log(collectionID);
    return (
        <div className="shop-page">
           {
               location.pathname === "/shop" ? <CollectionsOverview /> : <Outlet context={{collectionID}}/>
           }
        </div>
    )
}


export default ShopPage;