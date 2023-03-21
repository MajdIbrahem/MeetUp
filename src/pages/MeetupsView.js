import { useEffect, useState } from "react";
import MeetupList from "../components/meetups_components/Meetuplist";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function MeetupsView() {
  const [loading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("https://tishreen-62882-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => res.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const m = { id: key, ...data[key] };
          meetups.push(m);
        }
        setMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-bold text-2xl">Loading ....</div>;
  }
  return (
    <div>
      <h1 className="text-2xl my-5">All Meetups</h1>
      <MeetupList items={meetups} />
    </div>
  );
}

export default MeetupsView;
