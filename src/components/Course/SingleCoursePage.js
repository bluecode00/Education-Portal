import React from "react";
import classes from "./SingleCoursePage.module.css";
import CourseCategories from "./CourseCategories";

function SingleCoursePage() {
  return (
    <div className={classes.container}>
      <div className={classes.videoBack}>
        <video src="/videos/videoClass.mp4" muted loop autoPlay></video>
        <div className={classes.titleInfo}>
          <h3>Course Title</h3>
          <h6>5 March 2019</h6>
        </div>
      </div>
      <div className={classes.buttonsInfo}>
        <a>Overview</a>
        <a>Notes</a>
        <a>Learning Tools</a>
        <a>Discussions</a>
        <a>FAQ</a>
      </div>
    </div>
  );
}

export default SingleCoursePage;
