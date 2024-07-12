import {SET_CONFIRM_PASSWORD} from "../type";

export const setConfirmPassword = (value) => {
    return {
        type : SET_CONFIRM_PASSWORD,
        payload : { value }
    }
}