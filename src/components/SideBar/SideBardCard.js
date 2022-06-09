import React from "react";
import classes from "./SideBarCard.module.css";

import { FiChevronsRight } from "react-icons/fi";

function SideBardCard(props) {
  return (
    <div className={classes.container}>
      <h4>Categories</h4>
      <a href="#">
        <FiChevronsRight />
        Web Design
      </a>
      <a href="#">
        <FiChevronsRight />
        Figma
      </a>
      <a href="#">
        <FiChevronsRight />
        Network
      </a>
      <a href="#">
        <FiChevronsRight />
        Mathematics
      </a>
      <a href="#">
        <FiChevronsRight />
        Algorithm
      </a>
      <a href="#">
        <FiChevronsRight />
        Programming
      </a>
   
   
    </div>
  );
}

export default SideBardCard;
