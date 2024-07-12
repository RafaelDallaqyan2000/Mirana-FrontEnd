import { SET_PHONE} from "../type";

export const setPhoneUpdate = ( value ) => {
    return {
        type : SET_PHONE,
        payload : { value}
    }

}