import { CHANGE_THEME } from "../Actions/Types";

const initialState = {
 counter: 0
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
}
export default reducers;