import React from "react";
import classes from "./TestimonialsBox.module.css";

import TestimonialsCard from "./TestimonialsCard";

function TestimonialsBox() {
  return (
    <div className={classes.bigContainer}>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <h2>Testimonials</h2>
          <h4>We are the best! Ignore the rest!</h4>
        </div>
        <div className={classes.cardsContainer}>
          <TestimonialsCard name="Dakota Johnson" image="/images/dakota.png"/>
          <TestimonialsCard name="Johnny Depp" image="/images/john.png"/>
          <TestimonialsCard name="Natalie Portman" image="/images/natalia.png"/>
          <TestimonialsCard name="Kramer" image="/images/kramer.png"/>
         
        </div>
      </div>
      <div className={classes.btn}>
        <a href="#">Read More</a>
      </div>
    </div>
  );
}

export default TestimonialsBox;
