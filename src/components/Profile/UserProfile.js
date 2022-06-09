import react, { useState } from "react";
import ChangePassword from "./ChangePassword";
import classes from "./UserProfile.module.css";

import { IoMdArrowDropdown } from "react-icons/io";

const UserProfile = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [favoriteBlogs, setFavoriteBlogs] = useState(false);
  const [favoriteCourses, setFavoriteCourses] = useState(false);

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>

      <button type="button" onClick={() => setShowEdit(!showEdit)}>
        Edit Your Profile <IoMdArrowDropdown />
      </button>
      {showEdit && <p>Edit Your Profile </p>}

      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        Change Password <IoMdArrowDropdown />
      </button>
      {showPassword && <ChangePassword />}

      <button type="button" onClick={() => setFavoriteBlogs(!favoriteBlogs)}>
        Favorite Blogs <IoMdArrowDropdown />
      </button>
      {favoriteBlogs && <p>Your Favorite Blogs</p>}

      <button type="button" onClick={() => setFavoriteCourses(!favoriteCourses)}>
        Favorite Courses <IoMdArrowDropdown />
      </button>
      {favoriteCourses && <p>Your Favorite Courses</p>}
    </section>
  );
};

export default UserProfile;
