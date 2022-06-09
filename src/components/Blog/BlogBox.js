import react, { useState } from "react";
import classes from "./BlogBox.module.css";

import BlogCard from "./BlogCard";
import BlogCategories from "./BlogCategories";

const BlogBoxBig = () => {
  const [data, setData] = useState(BlogCategories);
  const filterResult = (catItem) => {
    const result = BlogCategories.filter((currentData) => {
      return currentData.category === catItem;
    });
    setData(result);
  };
  return (
    <section className={classes.bigContainer}>
      <div className={classes.title}>
        <h3>Categories</h3>
        <div className={classes.links}>
          <button onClick={() => setData(BlogCategories)}>All</button>
          <button onClick={() => filterResult("algorithm")}>Algorithm</button>
          <button onClick={() => filterResult("math")}>Math</button>
          <button onClick={() => filterResult("programming")}>Programming</button>
          <button onClick={() => filterResult("web design")}>Web Design</button>
          <button onClick={() => filterResult("frontend")}>Frontend</button>
          <button onClick={() => filterResult("backend")}>Backend</button>
          <button onClick={() => filterResult("network")}>Network</button>
          <button onClick={() => filterResult("api")}>API's</button>
        </div>
      </div>
      <div className={classes.blogContainer}>
        {data.map((values) => {
          const {
            id,
            category,
            writer,
            sphere,
            title,
            image,
            writerImage,
            date,
          } = values;
          return (
            <>
              <div className={classes.container} key={id}>
                <div className={classes.image}>
                  <img src={image} alt="" />
                </div>
                <div className={classes.text}>
                  <h4>{sphere}</h4>
                  <h3>{title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, expedita iusto. Reiciendis id delectus minus? Vel
                    quae iste soluta nemo rem corporis perferendis quo unde,
                    iusto sint necessitatibus aperiam ipsa?
                  </p>
                  <a href="/a-blog">continue to read...</a>
                </div>
                <div className={classes.bottomInfo}>
                  <div className={classes.writer}>
                    <img src={writerImage} alt="writer" />
                    <p>{writer}</p>
                  </div>
                  <div className={classes.date}>
                    <p>{date}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className={classes.seeMoreBlog}>
        <a href="/a-blog">See More</a>
      </div>
    </section>
  );
};

export default BlogBoxBig;
