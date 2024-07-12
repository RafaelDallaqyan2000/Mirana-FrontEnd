import { SET_FIRST_NAME } from "../type"

export const setFirstName = (value) => {
    return {
        type : SET_FIRST_NAME,
        payload : { value }
    }
}