import { SET_FIRST_NAME } from "../type"

export const setFirstNameUpdate = (value) => {
    return {
        type : SET_FIRST_NAME,
        payload : { value }
    }
}