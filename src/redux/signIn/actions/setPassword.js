import { SET_PASSWORD } from "../type"

export const setPassword = (value) =>{
    return{
        type: SET_PASSWORD,
        payload:{
            value,
        },
    };
};