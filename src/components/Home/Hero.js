import classes from "./Hero.module.css";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";

const Hero = (props) => {
  return (
    <section className={classes.heroContainer}>
      <div className={classes.videoBack}>
        <video src="/videos/video04.mp4" muted loop autoPlay></video>
      </div>

      <div className={classes.overlay}></div>
      <div className={classes.text}>
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          labore minus quisquam expedita voluptas vel ipsa ex ab, eius debitis
          commodi.
        </p>
        <a href="/course">Explore Our Courses</a>
      </div>

      <ul className={classes.social}>
        <li>
          <a href="https://www.linkedin.com/school/marmara1883/?originalSubdomain=tr">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/topics/marmara-university">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.hackerrank.com/dashboard">
            <FaHackerrank />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
