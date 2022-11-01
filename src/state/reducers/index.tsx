import { combineReducers } from "redux";
import nextScheduleReducer from "./nextScheduleReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
  profiles: profileReducer,
  nextSchedule: nextScheduleReducer,
});

export default reducers;
