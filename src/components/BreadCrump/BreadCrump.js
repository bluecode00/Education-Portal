import react from "react";

import classes from './BreadCrump.module.css';

const BreadCrump = (props) => {
  return(
    <div className={classes.crumpContainer}>
      <h1>{props.title}</h1>
      <h4>Marmara / <span>{props.title}</span></h4>
    </div>
  );
}

export default BreadCrump;