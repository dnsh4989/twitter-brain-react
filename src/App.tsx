import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Profiles from "./components/profiles/Profiles";
import Navbar from "./components/navbar/Navbar";
import { store } from "./state";
import { fetchUsersAsync, updateUsersAsync } from "./state/action-creator";

function App() {
  useEffect(() => {
    console.log("component mounted..");
    store.dispatch(fetchUsersAsync());
  }, []);

  const profiles = useSelector((state: any) => state.profiles);

  const editProfile = (profile: any) => {
    console.log(profile);
    store.dispatch(updateUsersAsync(profile));
  };

  return (
    <div className="App">
      <Navbar />
      <Profiles profiles={profiles} />
    </div>
  );
}

export default App;
