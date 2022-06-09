import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

import { FiLogIn } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { GiGreekTemple } from "react-icons/gi";

const MainNavigation = (props) => {
  const [active, setActive] = useState(classes.navMenu);
  const [toggleIcon, setToggleIcon] = useState(classes.toggler);

  const navToggle = () => {
    active === classes.navMenu
      ? setActive(classes.navActive)
      : setActive(classes.navMenu);

    //Toggler
    toggleIcon === classes.toggler
      ? setToggleIcon(`${classes.toggler} ${classes.toggle}`)
      : setToggleIcon(classes.toggler);
  };

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link to="/">
          <div className={classes.logo}>
            <GiGreekTemple />
            {props.title}
          </div>
        </Link>
        <ul className={active}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/course">Course</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {!isLoggedIn && (
            <li>
              <Link to="/auth" className={classes.navLoginOut}>
                Login <FiLogIn className={classes.iconLog} />
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler} className={classes.navLoginOut}>
                Logout <CgLogOut className={classes.iconLog} />
              </button>
            </li>
          )}
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
