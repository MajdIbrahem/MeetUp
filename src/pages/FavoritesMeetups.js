import { useContext } from "react";
import FavoriteContext from "../store/favorites_context";
import MeetupList from "../components/meetups_components/Meetuplist";

function FavoritesMeetupsView() {
  const favContext = useContext(FavoriteContext);
  let content;
  if (favContext.total === 0) {
    content = <p>You dont have any favorites, add some</p>;
  } else {
    content = <MeetupList items={favContext.favorites} />;
  }
  return (
    <div>
      <h1 className="text-2xl my-5">My Favorite Meetups</h1>
      {content}
    </div>
  );
}

export default FavoritesMeetupsView;
