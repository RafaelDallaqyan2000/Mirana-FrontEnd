import {SET_PASSWORD} from "../type";

export const setUpPasswordUpdate = (value) => {
    return {
        type : SET_PASSWORD,
        payload : { value }
    }
}