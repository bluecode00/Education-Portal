import react, { useState } from "react";
import classes from "./CourseBox.module.css";

import CourseCategories from "./CourseCategories";

const CourseBox = () => {
  const [data, setData] = useState(CourseCategories);
  const filterResult = (catItem) => {
    const result = CourseCategories.filter((currentData) => {
      return currentData.category === catItem;
    });
    setData(result);
  };
  return (
    <section className={classes.courseContainer}>
      <div className={classes.title}>
        <h3>Categories</h3>
        <div className={classes.links}>
          <button onClick={() => setData(CourseCategories)}>All</button>
          <button
            onClick={() => {
              filterResult("algorithm");
            }}
          >
            Algorithm
          </button>
          <button
            onClick={() => {
              filterResult("math");
            }}
          >
            Math
          </button>
          <button
            onClick={() => {
              filterResult("programming");
            }}
          >
            Programming
          </button>
          <button
            onClick={() => {
              filterResult("web design");
            }}
          >
            Web Design
          </button>
          <button
            onClick={() => {
              filterResult("frontend");
            }}
          >
            Frontend
          </button>
          <button
            onClick={() => {
              filterResult("backend");
            }}
          >
            Backend
          </button>
          <button
            onClick={() => {
              filterResult("network");
            }}
          >
            Network
          </button>
          <button
            onClick={() => {
              filterResult("api");
            }}
          >
            API's
          </button>
        </div>
      </div>
      <div className={classes.cardsContainer}>
        {data.map((values) => {
          const { id, category, image, chap, duration, title, writer } = values;
          return (
            <>
              <div className={classes.cardContainer} key={id}>
                <div className={classes.image}>
                  <img src={image} alt="" />
                </div>
                <div className={classes.content}>
                  <div className={classes.info}>
                    <h6>{chap}</h6>
                    <h6>{duration}</h6>
                  </div>
                  <div className={classes.title}>
                    <h4>{title}</h4>
                    <h5>{writer}</h5>
                  </div>
                  <a href="/a-course">Continue</a>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className={classes.seeMoreCourse}>
        <a href="#">See More</a>
      </div>
    </section>
  );
};

export default CourseBox;
