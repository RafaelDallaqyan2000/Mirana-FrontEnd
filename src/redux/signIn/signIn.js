import { SET_PASSWORD } from "./type";

const initialState = {
  password: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload.value,
      };
    default:
      return state;
  }
};
export default reducer;
