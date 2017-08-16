import { ActionTypes } from "../actions/about";
import { Map } from "immutable";

const initialState = Map({
  day: "2017/01/01"
});

const actionType = {
  [ActionTypes.SET_DAY]: (state, action) => {
    return state.set("day", action.day);
  }
};

const IndexReducers = (state = initialState, action) => {
  return action.type in actionType
    ? actionType[action.type](state, action)
    : state;
};

export default IndexReducers;
