import {SET_DATE} from "../type";

export const setDateUpdate = ( value ) => {
    return {
        type : SET_DATE,
        payload : { value }
    }
}
