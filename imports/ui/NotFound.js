import React from 'react';
import {Link} from "react-router-dom";
const NotFound = () => {

    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1> Page Not Found </h1>
          <p> We are unable to find the page </p>
          <Link className="button button--link" to="/"> Home </Link>
        </div>
      </div>
    );
}

export default NotFound;
