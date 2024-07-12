import {SET_PASSWORD} from "../type";

export const setUpPassword = (value) => {
    return {
        type : SET_PASSWORD,
        payload : { value }
    }
}