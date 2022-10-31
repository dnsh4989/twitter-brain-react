import axios from "axios";
import { Observable } from "rxjs";

export const addUser = (user: any) => {
  console.log(user, "Lol");
  return {
    type: "add",
    payload: user,
  };
};

export const fetchUsersAsync = (): any => {
  return (dispatch: any, getState: any) => {
    axios.get("http://localhost:9000/profile/all").then((response: any) => {
      dispatch({
        type: "FETCH_USERS",
        payload: response.data.profiles,
      });
    });
  };
};

export const smartReTweetAsync = (): any => {
  return (dispatch: any, getState: any) => {
    axios.get("http://localhost:9000/retweet/smart").then((response: any) => {
      console.log(response);
      alert("Retweeted");
    });
  };
};

export const addUsersAsync = (username: any): any => {
  return (dispatch: any, getState: any) => {
    console.log(username);
    axios
      .post("http://localhost:9000/profile/add", { username })
      .then((response: any) => {
        if (response.data === "Profile added.") {
          dispatch(fetchUsersAsync());
        }
      });
  };
};

export const updateUsersAsync = (user: any): any => {
  return (dispatch: any, getState: any) => {
    console.log(user);
    axios
      .put("http://localhost:9000/profile/update/" + user._id, user)
      .then((response: any) => {
        dispatch(fetchUsersAsync());
      });
  };
};

export const deleteUsersAsync = (user: any): any => {
  return (dispatch: any, getState: any) => {
    console.log(user);
    axios
      .delete("http://localhost:9000/profile/delete/" + user._id)
      .then((response: any) => {
        dispatch(fetchUsersAsync());
      });
  };
};
