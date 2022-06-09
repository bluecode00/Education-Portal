import React, { useState } from "react";

import classes from "./FeaturesCard.module.css";

function FeaturesCard(props) {
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
      <div className={classes.icon}>{props.icon}</div>
      <div className={classes.info}>
        <h4>{props.title}</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
          voluptate maiores deserunt saepe quibusdam nemo dolores ipsum! Iusto
          beatae unde amet, velit incidunt autem
        </p>
      </div>
      <div className={classes.btn}>
        <a onClick={toggleModal}>Read More</a>
      </div>

      {modal && (
        <div className={classes.modal}>
          <div className={classes.overlay} onClick={toggleModal}></div>
          <div className={classes.modalContent}>
            <h2>{props.title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              recusandae, expedita illo accusamus ipsum iste ducimus porro unde
              dolores eaque necessitatibus, ea natus illum doloribus officia
              maxime sunt exercitationem explicabo eius voluptates quas. Ipsam
              accusamus ex vitae dolorum fugit excepturi iste, ullam sed magni
              sit omnis voluptate, eveniet repellat inventore! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Corrupti minus adipisci
              officia doloremque assumenda, tenetur optio facilis nesciunt quia
              blanditiis veritatis quidem ex.
            </p>
            <button className={classes.closeModel} onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturesCard;
