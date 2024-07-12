import {SET_DATE} from "../type";

export const setDate = ( value ) => {
    return {
        type : SET_DATE,
        payload : { value }
    }
}
