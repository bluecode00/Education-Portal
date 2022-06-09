import React from "react";
import './Notfound.css';
import BreadCrump from '..//BreadCrump/BreadCrump';
const NotFound = () => {
  return (
    <div>
      <BreadCrump title="404"/>
      <section className="notFound">
        <h1>There's Nothing Here</h1>
        <p>Don't worry, it's almost certainly our fault</p>
        <a href="./">Go back to homepage</a>
      </section>
    </div>

  );
};

export default NotFound;