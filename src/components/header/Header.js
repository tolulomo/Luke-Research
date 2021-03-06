import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="navigation">
        <div className="wrapper">
            <div className="navigation--logo">
                <Link to="/"><h1>Luke Research</h1></Link>
            </div>
            <nav className="navigation--list">
                <ul>
                    <li>
                        <Link to="/new">Create New Project</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Header;
