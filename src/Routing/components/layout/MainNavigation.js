import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}> React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
              <Link to="/Newmeetup"> New Meetup</Link>
              <Link to="/Favorites"> Favorites </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
