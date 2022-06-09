import React from "react";
import classes from "./OurTeachersBox.module.css";

import OurTeachersCard from "./OurTeachersCard";

function OurTeachersBox() {
  return (
    <div className={classes.bigContainer}>
      <div className={classes.titleBox}>
        <h2>Our Teachers</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est placeat
          doloremque officia magni inventore vel sequi vero, minus consequatur
          eligendi, obcaecati aspernatur fugit iusto accusamus esse, quasi ipsam
          sit animi.
        </p>
      </div>
      <div className={classes.container}>
        <OurTeachersCard
          image="images/avatar1.png"
          name="Ercan Erkalkan"
          title="Senior"
        />
        <OurTeachersCard
          image="images/avatar2.png"
          name="Rahman Coban"
          title="Junior"
        />
        <OurTeachersCard
          image="images/avatar3.png"
          name="Abdullah Seis"
          title="Junior"
        />
        <OurTeachersCard
          image="images/avatar4.png"
          name="Can Eksioglu"
          title="Junior"
        />
        <OurTeachersCard
          image="images/avatar4.png"
          name="Jerry Seinfeld"
          title="Junior"
        />
        <OurTeachersCard
          image="images/avatar4.png"
          name="George Costanz"
          title="Junior"
        />
      </div>
    </div>
  );
}

export default OurTeachersBox;
