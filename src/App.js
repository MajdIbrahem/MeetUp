import { Route, Routes } from "react-router-dom";
import MeetupsView from "./pages/MeetupsView";
import FavoritesMeetupsView from "./pages/FavoritesMeetups";
import AddMeetup from "./pages/AddMeetup";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MeetupsView />} />
        <Route path="/add-meetup" element={<AddMeetup />} />
        <Route path="/favorites" element={<FavoritesMeetupsView />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
