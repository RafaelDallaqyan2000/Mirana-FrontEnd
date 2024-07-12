import {SET_CONFIRM_PASSWORD} from "../type";

export const setConfirmPasswordUpdate = (value) => {
    return {
        type : SET_CONFIRM_PASSWORD,
        payload : { value }
    }
}