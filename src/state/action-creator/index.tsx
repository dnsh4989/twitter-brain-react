import axios from "axios";

const techBotURL = "https://twitter-brain-nodejs.vercel.app";
const wellnessBotURL = "https://fitness-bot.vercel.app";

export const addUser = (user: any) => {
  console.log(user, "Lol");
  return {
    type: "add",
    payload: user,
  };
};

export const fetchUsersAsync = (): any => {
  return (dispatch: any, getState: any) => {
    axios.get(`${techBotURL}/profile/all`).then((response: any) => {
      dispatch({
        type: "FETCH_USERS",
        payload: response.data.profiles,
      });
    });
  };
};

export const smartReTweetAsync = (): any => {
  return (dispatch: any, getState: any) => {
    axios.get(`${techBotURL}/retweet/smart/tech`).then((response: any) => {
      console.log(response);
      alert("Retweeted");
    });
  };
};

export const addUsersAsync = (username: any): any => {
  return (dispatch: any, getState: any) => {
    console.log(username);
    axios
      .post(`${techBotURL}/profile/tech/add`, { username })
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
      .put(`${techBotURL}/profile/update/${user._id}`, user)
      .then((response: any) => {
        dispatch(fetchUsersAsync());
      });
  };
};

export const deleteUsersAsync = (user: any): any => {
  return (dispatch: any, getState: any) => {
    console.log(user);
    axios
      .delete(`${techBotURL}/profile/tech/delete/${user._id}`)
      .then((response: any) => {
        dispatch(fetchUsersAsync());
      });
  };
};

export const getNextScheduleAsync = (): any => {
  return (dispatch: any, getState: any) => {
    axios
      .get("https://fitness-bot.vercel.app/retweet/nextSchedule")
      .then((response: any) => {
        dispatch({
          type: "FETCH_NEXT_TASK",
          payload: response,
        });
      });
  };
};

export const setBotName = (botName: any): any => {
  return (dispatch: any, getState: any) => {
    dispatch({
      type: "SET_BOT",
      payload: botName,
    });
  };
};

export const fetchWellnessUsersAsync = (): any => {
  return (dispatch: any, getState: any) => {
    axios
      .get(`${wellnessBotURL}/profile/wellness/all`)
      .then((response: any) => {
        dispatch({
          type: "FETCH_WELLNESS_USERS",
          payload: response.data.profiles,
        });
      });
  };
};

export const smartReTweetWellnessAsync = (): any => {
  return (dispatch: any, getState: any) => {
    axios
      .get(`${wellnessBotURL}/retweet/smart/wellness`)
      .then((response: any) => {
        console.log(response);
        alert("Retweeted");
      });
  };
};

export const addWellnessUsersAsync = (username: any): any => {
  return (dispatch: any, getState: any) => {
    console.log(username);
    axios
      .post(`${wellnessBotURL}/profile/wellness/add`, { username })
      .then((response: any) => {
        if (response.data === "Wellness Profile added.") {
          dispatch(fetchWellnessUsersAsync());
        }
      });
  };
};

export const deleteWellnessUsersAsync = (user: any): any => {
  return (dispatch: any, getState: any) => {
    console.log(user);
    axios
      .delete(`${wellnessBotURL}/profile/wellness/delete/${user._id}`)
      .then((response: any) => {
        dispatch(fetchWellnessUsersAsync());
      });
  };
};
