import React from 'react';
// import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="navigation">
        <div className="wrapper">
            <div className="navigation--logo">
                <h1>Duke Research</h1>
            </div>
            <nav className="navigation--list">
                <ul>
                    <li>
                        Create New Project
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Header;
