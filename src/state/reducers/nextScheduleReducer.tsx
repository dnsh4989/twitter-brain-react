import { act } from "react-dom/test-utils";

const initialState: any = null;

const nextScheduleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_NEXT_TASK":
      return action.payload.data;
    default:
      return state;
  }
};

export default nextScheduleReducer;
