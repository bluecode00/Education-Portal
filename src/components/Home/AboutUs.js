import React, { useState } from "react";

import classes from "./AboutUs.module.css";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function AboutUs() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add(classes.activeModal);
  } else {
    document.body.classList.remove(classes.activeModal);
  }

  return (
    <div className={classes.container}>
      <div className={classes.contentSection}>
        <div className={classes.title}>
          <h1>About Us</h1>
        </div>
        <div className={classes.content}>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis commodi odit dolore omnis minima quo aliquid natus
            dolorum aperiam suscipit. Commodi laboriosam qui doloribus
            dignissimos earum quaerat consequatur molestiae assumenda?
          </p>
          <div className={classes.button}>
            <a onClick={toggleModal}>Read More</a>
          </div>
        </div>
        <div className={classes.social}>
          <a href="">
            <FiFacebook />
          </a>
          <a href="">
            <AiOutlineTwitter />
          </a>
          <a href="">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
      <div className={classes.imageSection}>
        <img src="/images/about.png" alt="about" />
      </div>

      {modal && (
        <div className={classes.modal}>
          <div className={classes.overlay} onClick={toggleModal}></div>
          <div className={classes.modalContent}>
            <img className={classes.taksim1} src="images/taksim.png" alt="" />
            <img className={classes.taksim2} src="images/taksim2.png" alt="" />
            <div>

              <h2>Our Story</h2>
              <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quibusdam saepe minima.</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                recusandae, expedita illo accusamus ipsum iste ducimus porro
                unde dolores eaque necessitatibus, ea natus illum doloribus
                officia maxime sunt exercitationem explicabo eius voluptates
                quas. Ipsam accusamus ex vitae dolorum fugit excepturi iste,
                ullam sed magni sit omnis voluptate, eveniet repellat inventore!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti minus adipisci officia doloremque assumenda, tenetur
                optio facilis nesciunt quia blanditiis veritatis quidem ex,
                dignissimos debitis cupiditate fuga laborum! Adipisci molestias
                in perspiciatis quo similique.
              </p>
            </div>

            <button className={classes.closeModel} onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUs;
