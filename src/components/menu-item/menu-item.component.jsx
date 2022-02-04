import React from "react";

// We dont need a state here so we create a functional component
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => {
    return (
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className={`${size} menu-item`}>
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtite">SHOP NOW</span>
                </div>
        </div>
    )
}

export default MenuItem;