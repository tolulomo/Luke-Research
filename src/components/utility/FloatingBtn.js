import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const FloatingBtn = (props) => {
  return (
    <div className="floating-btn">
        <Link to="#" className="floating-btn--link floating-btn--rotate"><span>&#9740;</span></Link>
        <Link to="#" className="floating-btn--link"><span>-</span></Link>
        <Link to={props.link1} className="floating-btn--link"><span>+</span></Link>
    </div>
  );
};

export default withRouter(FloatingBtn);
