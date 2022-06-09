import React from "react";
import classes from "./FromBlogBox.module.css";

import FromBlogCard from "./FromBlogCard";

function BlogBox() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>From Blogs</h2>
        <p>
          Our blogs are evaluated by readers weekly and top three are visible
          here on the home page.!
        </p>
      </div>
      <div className={classes.cardsContainer}>
        <FromBlogCard
          writer="Ercan Erkalkan"
          sphere="Computer Science"
          title="Typescript is Not New"
          image="/images/typescript.png"
          writerImage="/images/ercan.png"
          date="02 June 2022"
        />
        <FromBlogCard
          writer="Vedat Topuz"
          sphere="Artificial Intelligence"
          title="We Can Handle Difficulties"
          image="/images/artificial.png"
          writerImage="/images/vedat.png"
          date="14 February 2023"
        />
        <FromBlogCard
          writer="Rahman Coban"
          sphere="FrontEnd"
          title="React Has Been Evolved"
          image="/images/react2.png"
          writerImage="/images/rahim.png"
          date="21 March 2021"
        />
        
      </div>
      <div className={classes.btn}>
        <a href="/blog">Read Other Blogs</a>
      </div>
    </div>
  );
}

export default BlogBox;
