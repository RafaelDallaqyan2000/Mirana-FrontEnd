import { SET_TOKEN} from "../type";

export const setToken = ( value ) => {
    return {
        type : SET_TOKEN,
        payload : { value}
    }

}