import React from "react";
import classes from "./OurTeachersCard.module.css";

import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function OurTeachersCard(props) {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.content}>
          <div className={classes.imgBox}>
            <img src={props.image} alt="teacher" />
          </div>
          <div className={classes.contentBox}>
            <h4>{props.name}</h4>
            <h5>{props.title}</h5>
          </div>
          <div className={classes.social}>
            <a href="">
              <FiFacebook />
            </a>
            <a href="">
              <AiOutlineTwitter />
            </a>
            <a href="">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeachersCard;
