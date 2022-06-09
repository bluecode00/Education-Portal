import React from "react";
import classes from "./CourseCard.module.css";

function CourseCard(props) {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={classes.content}>
        <div className={classes.info}>
          <h6>{props.chap}</h6>
          <h6>{props.duration}</h6>
        </div>
        <div className={classes.title}>
          <h4>{props.title}</h4>
          <h5>{props.writer}</h5>
        </div>
        <a href="#">Continue</a>
      </div>
    </div>
  );
}

export default CourseCard;
