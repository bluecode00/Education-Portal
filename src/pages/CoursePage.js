import react from "react";

import CourseBox from "../components/Course/CourseBox";
import BreadCrump from '../components/BreadCrump/BreadCrump';

const CoursePage = () => {
  return(
    <div>
      <BreadCrump title="Course"/>
      <CourseBox />
    </div>
  );
}

export default CoursePage;