import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Profiles from "./components/profiles/Profiles";
import Navbar from "./components/navbar/Navbar";
import { store } from "./state";
import {
  fetchUsersAsync,
  fetchWellnessUsersAsync,
  setBotName,
  updateUsersAsync,
} from "./state/action-creator";

function App() {
  const botName = useSelector((state: any) => state.botName);
  const techProfiles = useSelector((state: any) => state.profiles);
  const wellnessProfiles = useSelector((state: any) => state.wellnessProfiles);
  let currentProfile = botName === "tech" ? techProfiles : wellnessProfiles;

  useEffect(() => {
    console.log("component mounted..");
    store.dispatch(fetchUsersAsync());
    store.dispatch(fetchWellnessUsersAsync());
  }, []);

  const editProfile = (profile: any) => {
    console.log(profile);
    store.dispatch(updateUsersAsync(profile));
  };

  return (
    <div className="App">
      <Navbar />
      <Profiles profiles={currentProfile} />
    </div>
  );
}

export default App;
