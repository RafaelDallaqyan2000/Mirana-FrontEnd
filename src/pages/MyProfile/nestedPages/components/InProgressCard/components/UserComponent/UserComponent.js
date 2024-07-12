import { Box } from "@mui/material";
import React, {useEffect} from "react";
import "./UserComponent.css"

export function UserComponent({arr, firstName, lastName, setState}){
    useEffect(e => {
        window.addEventListener("click", (e) => {
            setState(false)
        })
    }, [])
    return (
        <Box className="menueBox">
            {
                arr.map((e, i) => {
                    return (
                        <Box className="menueBoxDiv">
                            <img src={e.image} />
                            <span className="textMenueBox">{firstName + " " + lastName}</span>
                        </Box>
                    )
                })
            }
        </Box>
    )
}