import React from "react";

// We dont need a state here so we create a functional component
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            {/* made background image independent of content */}
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtite">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;