import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import "./Profiles.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  addUsersAsync,
  deleteUsersAsync,
  smartReTweetAsync,
} from "../../state/action-creator";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { store } from "../../state";

function Profiles(props: any) {
  const userProfiles = props.profiles;
  const [username, setUsername] = useState("");
  const addNewUser = () => {
    console.log(username);
    store.dispatch(addUsersAsync(username));
    setUsername("");
  };
  const deleteUser = (user: any) => {
    console.log(user);
    store.dispatch(deleteUsersAsync(user));
  };
  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const smartReTweet = () => {
    store.dispatch(smartReTweetAsync());
  };
  const profilesList = userProfiles.map((user: any) => {
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
