import React from "react";

import classes from "./TestimonialsCard.module.css";

function TestimonialsCard(props) {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={props.image} alt="member" />
      </div>

      <blockquote className={classes.text}>
        Inexpensive, productive and great-experience lessons, without even having to
        buy manually!
      </blockquote>
      <p className={classes.name}>&mdash; {props.name}</p>
    </div>
  );
}

export default TestimonialsCard;
