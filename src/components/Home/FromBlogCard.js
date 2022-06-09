import React from "react";
import classes from "./FromBlogCard.module.css";

function BlogCard(props) {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={classes.text}>
        <h4>{props.sphere}</h4>
        <h3>{props.title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          expedita iusto. Reiciendis id delectus minus? Vel quae iste soluta
          nemo rem corporis perferendis quo unde, iusto sint necessitatibus
          aperiam ipsa?
        </p>
        <a href="/a-blog">continue to read...</a>
      </div>
      <div className={classes.bottomInfo}>
        <div className={classes.writer}>
          <img src={props.writerImage} alt="writer" />
          <p>{props.writer}</p>
        </div>
        <div className={classes.date}>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
