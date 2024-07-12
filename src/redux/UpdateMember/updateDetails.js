import {
  SET_COMPANY_NAME,
  SET_CONFIRM_PASSWORD,
  SET_DATE,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PHONE,
  SET_PASSWORD,
  SET_TOKEN,
} from "./type";

const initialState = {
  companyName: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  date: "",
  password: "",
  confirmPassword: "",
  token:""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANY_NAME:
      return {
        ...state,
        companyName: action.payload.value,
      };
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload.value,
      };
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload.value,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload.value,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload.value,
      };
    case SET_DATE:
      return {
        ...state,
        date: action.payload.value,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload.value,
      };
    case SET_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload.value,
      };
      case SET_TOKEN:
      return {
        ...state,
        token: action.payload.value,
      };
    default:
      return state;
  }
};
export default reducer;
