import React from "react";
import classes from "./FeaturesBox.module.css";

import FeaturesCard from "./FeaturesCard";
import { GiTeacher } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdMenuBook } from "react-icons/md";
import { AiFillAudio } from "react-icons/ai";

function FeaturesBox() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h2>our features</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
          laudantium ipsa? Consequatur provident dolor unde, earum praesentium
          veniam numquam nam quaerat impedit. Omnis dolorum velit assumenda ea
          voluptas minima explicabo.
        </p>
      </div>
      <div className={classes.cardsContainer}>
        <FeaturesCard title="Expert Teachers" icon={<GiTeacher />} />
        <FeaturesCard title="Online Learning" icon={<RiComputerLine />} />
        <FeaturesCard title="Video Lessons" icon={<MdOutlineOndemandVideo />} />
        <FeaturesCard
          title="Professional Certificate"
          icon={<AiOutlineSafetyCertificate />}
        />
        <FeaturesCard title="Professional Courses" icon={<MdMenuBook />} />
        <FeaturesCard title="Audio Lessons" icon={<AiFillAudio />} />
      </div>
    </div>
  );
}

export default FeaturesBox;
