import {SET_COMPANY_NAME} from "../type";

export const setName = (value) => {
    return {
        type : SET_COMPANY_NAME,
        payload : { value }
    }
}
