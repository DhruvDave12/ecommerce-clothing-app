import React from "react";
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <Link className = "logo-container" to = "/">
                {/* Here comes our Logo */}
                <Logo className = 'logo' />

            </Link>

            <div className="options">
                <Link className="option" to = "/shop">
                    SHOP
                </Link>
                <Link className="option" to = "/shop">
                    CONTACT
                </Link>
                <Link className="option" to = "/shop">
                    SIGN IN
                </Link>
            </div>
        </div>
    )
}

export default Header;