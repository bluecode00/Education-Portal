import React from "react";
import classes from "./Footer.module.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";

function Footer() {
  return (
    <footer className={classes.footer}>
      <dir className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col}>
            <h4>company</h4>
            <ul>
              <li>
                <a href="">about us</a>
              </li>
              <li>
                <a href="">our services</a>
              </li>
              <li>
                <a href="">privacy & policy</a>
              </li>
              <li>
                <a href="">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className={classes.col}>
            <h4>get help</h4>
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">shipping</a>
              </li>
              <li>
                <a href="">returns</a>
              </li>
              <li>
                <a href="">order status</a>
              </li>
            </ul>
          </div>
          <div className={classes.col}>
            <h4>online</h4>
            <ul>
              <li>
                <a href="">watch online</a>
              </li>
              <li>
                <a href="">help online</a>
              </li>
              <li>
                <a href="">codding solving</a>
              </li>
              <li>
                <a href="">bootcamps</a>
              </li>
            </ul>
          </div>
          <div className={classes.col}>
            <h4>follow us</h4>
            <div className={classes.social}>
              <a href="">
                {" "}
                <AiFillLinkedin />
              </a>
              <a href="">
                {" "}
                <AiFillGithub />
              </a>
              <a href="">
                {" "}
                <AiOutlineTwitter />
              </a>
              <a href="">
                {" "}
                <AiOutlineInstagram />
              </a>
              <div className={classes.subscribe}>
                <a href="#"><span>Subscribe</span><i></i></a>
              </div>
            </div>
          </div>
        </div>
      </dir>
    </footer>
  );
}

export default Footer;
