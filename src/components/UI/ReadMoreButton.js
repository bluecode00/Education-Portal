
import classes from './ReadMoreButton.module.css';


import React, { useContext, useEffect, useState } from "react";

import CartContext from "./CartContext";

function ReadMoreButton(props) {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

 

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);



  return (
    <button className={btnClasses} onClick={props.onClick}>
    <span>Read More</span>
  </button>
  )
}

export default ReadMoreButton