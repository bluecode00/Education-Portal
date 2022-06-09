import classes from "./ContactContent.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";


const ContactContent = (props) => {
  

  return (
    <section className={classes.contactContainer}>
      <div className={classes.content}>
        <h2>Contact Us</h2>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          sequi possimus, ipsum, deleniti doloribus iste necessitatibus minus
          quod quae veniam dolorem!
        </p>
      </div>
      <div className={classes.container}>
        <div className={classes.contactInfo}>
          <div className={classes.box}>
            <div className={classes.icon}>
              <FaMapMarkerAlt />
            </div>
            <div className={classes.text}>
              <h3>Address</h3>
              <p>{props.address}</p>
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.icon}>
              <BsFillTelephonePlusFill />
            </div>
            <div className={classes.text}>
              <h3>Phone</h3>
              <p>{props.phone}</p>
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.icon}>
              <AiOutlineMail />
            </div>
            <div className={classes.text}>
              <h3>Email</h3>
              <p>{props.email}</p>
            </div>
          </div>
        </div>
        <div className={classes.contactForm}>
          <form>
            <h2>Send Message</h2>
            <div className={classes.inputBox}>
              <input type="text" name="" required />
              <span>Full Name</span>
            </div>
            <div className={classes.inputBox}>
              <input type="text" name="" required />
              <span>Email</span>
            </div>
            <div className={classes.inputBox}>
              <textarea type="text" name="" required />
              <span>Write Your Message</span>
            </div>
            <div className={classes.inputBox}>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
