import { SET_PHONE} from "../type";

export const setPhone = ( value ) => {
    return {
        type : SET_PHONE,
        payload : { value}
    }

}