import {SET_COMPANY_NAME} from "../type";

export const setNameUpdate = (value) => {
    return {
        type : SET_COMPANY_NAME,
        payload : { value }
    }
}
