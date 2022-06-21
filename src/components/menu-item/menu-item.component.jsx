import React from "react";
import { useNavigate } from 'react-router-dom';
// We dont need a state here so we create a functional component
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size,linkUrl}) => {
    const navigate = useNavigate();
    return (
        <div className={`${size} menu-item`} onClick = {() => navigate(`/${linkUrl}`)}>
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