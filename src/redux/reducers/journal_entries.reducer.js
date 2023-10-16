import { combineReducers } from "redux";

const journal_entry = (state = [], action) => {
  switch (action.type) {
    case "SET_JOURNAL_ENTRY":
      return action.payload;
    default:
      return state;
  }
};

export default journal_entry;
