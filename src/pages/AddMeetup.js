import { useNavigate } from "react-router-dom";
import AddMeetupForm from "../components/meetups_components/AddMeetupForm";
function AddMeetupView() {
  const navigate = useNavigate();
  function addMeetup(submitData) {
    // TODO: listen to result and show alert with it
    fetch("https://tishreen-62882-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(submitData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <div>
      <AddMeetupForm addMeetup={addMeetup} />
    </div>
  );
}

export default AddMeetupView;
