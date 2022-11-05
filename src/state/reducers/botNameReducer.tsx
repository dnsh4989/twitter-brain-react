import { act } from "react-dom/test-utils";

const initialState: any = [];

const botNameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_BOT":
      return action.payload;
    case "add":
      return [...state, action.payload];
    case "remove":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default botNameReducer;
