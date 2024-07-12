import { SET_MEMBER_DETAILS } from "./type";

const initialState = {
  memberDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEMBER_DETAILS:
      return {
        ...state,
        memberDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
