import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import "./Profiles.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  addUsersAsync,
  addWellnessUsersAsync,
  deleteUsersAsync,
  deleteWellnessUsersAsync,
  fetchUsersAsync,
  fetchWellnessUsersAsync,
  setBotName,
  smartReTweetAsync,
  smartReTweetWellnessAsync,
} from "../../state/action-creator";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { store } from "../../state";

function Profiles(props: any) {
  const userProfiles = props.profiles;
  const [username, setUsername] = useState("");
  const [botName, setBotNameLocal] = useState("tech");

  useEffect(() => {
    console.log("component mounted..");
    store.dispatch(setBotName(botName));
  }, []);

  const addNewUser = () => {
    console.log(username);
    if (botName === "tech") {
      store.dispatch(addUsersAsync(username));
    } else if (botName === "wellness") {
      store.dispatch(addWellnessUsersAsync(username));
    }
    setUsername("");
  };

  const deleteUser = (user: any) => {
    console.log(user);
    if (botName === "tech") {
      store.dispatch(deleteUsersAsync(user));
    } else if (botName === "wellness") {
      store.dispatch(deleteWellnessUsersAsync(user));
    }
  };

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handleBotChange = (event: any) => {
    setBotNameLocal(event.target.value);
    store.dispatch(setBotName(event.target.value));
  };

  const smartReTweet = () => {
    if (botName === "tech") {
      store.dispatch(smartReTweetAsync());
    } else if (botName === "wellness") {
      store.dispatch(smartReTweetWellnessAsync());
    }
  };
  const profilesList = userProfiles?.map((user: any) => {
    return (
      <Card className="profile-card">
        <Box sx={{ p: 2, display: "flex" }}>
          <Avatar variant="rounded" src="avatar1.jpg" />
          <Stack spacing={0.5}>
            <Typography fontWeight={700}>{user.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {user.username}
            </Typography>
            <DeleteForeverIcon
              onClick={(event) => deleteUser(user)}
              className="delete-icon"
            />
          </Stack>
        </Box>
      </Card>
    );
  });
  const addButton = (
    <AddCircleIcon className="add-icon" onClick={(event) => addNewUser()} />
  );
  return (
    <div className="Profile">
      <Card className="users-heading-card">
        <Box sx={{ p: 2, display: "flex" }}>
          <TwitterIcon className="users-heading-icon" />
          <h2 className="users-heading">USERS</h2>
          <Button
            variant="outlined"
            className="tweet-button"
            onClick={(event) => smartReTweet()}
          >
            retweet
          </Button>
        </Box>
      </Card>
      <FormControl fullWidth className="bot-name">
        <InputLabel id="demo-simple-select-label">Bot</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={botName}
          label="Age"
          onChange={handleBotChange}
        >
          <MenuItem value={"tech"}>Tech BOT</MenuItem>
          <MenuItem value={"wellness"}>Wellness BOT</MenuItem>
        </Select>
      </FormControl>
      <div className="add-user-container">
        <TextField
          id="twitter-username"
          label="Twitter Username"
          variant="standard"
          className="add-input"
          value={username}
          onChange={handleUsernameChange}
        />
        {username ? addButton : null}
      </div>
      {profilesList}
    </div>
  );
}

export default Profiles;
