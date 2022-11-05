import { combineReducers } from "redux";
import botNameReducer from "./botNameReducer";
import nextScheduleReducer from "./nextScheduleReducer";
import profileReducer from "./profileReducer";
import wellnessProfileReducer from "./wellnessProfileReducer";

const reducers = combineReducers({
  profiles: profileReducer,
  wellnessProfiles: wellnessProfileReducer,
  nextSchedule: nextScheduleReducer,
  botName: botNameReducer,
});

export default reducers;
