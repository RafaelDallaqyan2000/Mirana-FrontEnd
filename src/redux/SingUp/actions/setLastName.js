import {SET_LAST_NAME} from "../type";

export const setLastName = ( value ) => {
    return {
        type : SET_LAST_NAME,
        payload : { value }
    }
}
