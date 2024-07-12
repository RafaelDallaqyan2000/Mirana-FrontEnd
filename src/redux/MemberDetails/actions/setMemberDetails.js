import { SET_MEMBER_DETAILS } from "../type";

export const setMemberDetails = (value) => {
  return {
    type: SET_MEMBER_DETAILS,
    payload: value,
  };
};
