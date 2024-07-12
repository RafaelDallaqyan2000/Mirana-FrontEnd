import {SET_EMAIL} from "../type";

export const setEmailUpdate = ( value ) => {
    return {
        type : SET_EMAIL,
        payload : { value }
    }
}