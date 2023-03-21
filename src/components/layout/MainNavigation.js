import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/add-meetup">Add Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites Meetups</Link>
        </li>
      </ul>
    </header>
  );
}
export default MainNavigation;
