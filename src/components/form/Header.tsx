import React from 'react';

// Project Import
import './header.css';

// ==============================|| HEADER FORM - LOGO + SEARCHING  ||============================== //

const Header = () => {
    return (
        <div className="header-form">
            <a href="https://jubic.fi" target="_blank">
                <img
                    src="https://jubic.fi/static/ec9f946436a687308d782ac45d5798ea/bef1f/dog-house.png"
                    alt="Jubic Logo"
                    width="100%"
                    height="100%"
                />
            </a>
            <h2 className="header-heading">Jubic Blog</h2>
        </div>
    );
};

export default Header;
