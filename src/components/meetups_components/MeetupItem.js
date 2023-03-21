import { useContext } from "react";
import FavoriteContext from "../../store/favorites_context";
import classes from "./MeetupItem.module.css";
import Card from "../ui_element/Card";

function MeetupItem(props) {
  const favContext = useContext(FavoriteContext);

  const itemIsFav = favContext.itemIsFavorite(props.id);

  function toggle() {
    if (itemIsFav) {
      favContext.removeFavorite(props.id);
    } else {
      favContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address,
      });
    }
  }
  return (
    <Card>
      <li>
        <div className={classes.image}>
          <img
            className="rounded-lg object-fill h-48 w-full"
            src={props.image}
            alt="Loading..."
          ></img>
        </div>
        <div className={classes.content}>
          <h3 className="text-xl font-bold">{props.title}</h3>
          <address className="py-1 text-green-700">{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.action}>
          <button onClick={toggle}>
            {itemIsFav ? "Remove from your favorite" : " Add Favorite"}
          </button>
        </div>
      </li>
    </Card>
  );
}
export default MeetupItem;
