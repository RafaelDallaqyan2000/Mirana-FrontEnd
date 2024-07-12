import {SET_EMAIL} from "../type";

export const setEmail = ( value ) => {
    return {
        type : SET_EMAIL,
        payload : { value }
    }
}