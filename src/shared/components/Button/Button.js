import React from "react";
import MuiButton from "@mui/material/Button"
import {makeStyles} from "@mui/styles";
import "./Button.css";

    const useStyle = makeStyles({
        btn : {
            "&.MuiButton-outlined": {
                    textTransform: "none",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    color: "#2F80AC",
                    border: "1px solid rgba(56, 150, 201, 1)",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.13)",
                    boxSizing: "border-box",
                    background : "#fff",

                    "&:hover" : {
                        border: "border: 1px solid rgba(56, 150, 201, 1)",
                        color: "#2F80AC",
                        background: "rgba(56, 150, 201, 0.13)",
                    },

                    "&:active" : {
                        background: "rgba(56, 150, 201, 0.13)",
                        outline: "2px solid #3896C9",
                        boxSizing: "border-box",
                        borderRadius: "4px",
                        boxShadow: "none !important"
                    },
                "&:focus" : {
                    boxShadow :"5px 5px 12px rgba(56, 150, 201, 0.27)",
                },


                    "&.Mui-disabled": {
                        border: "1.5px solid rgba(56, 150, 201, 0.28)",
                        color: "rgba(47, 128, 172, 0.34)"
                    }

            },
            "&.MuiButton-outlinedPro" : {
                background : "rgba(56, 150, 201, 0.07)",
                fontFamily : "Montserrat",
                color: "#3896C9",
                "&:hover" : {
                    background: "rgba(56, 150, 201, 0.13)",
                },
                "&:active" : {
                    background: "rgba(56, 150, 200, 0.1)",
                },
                "&:focus" : {
                    boxShadow :"none",
                },
                "&.Mui-disabled": {
                    border: "1.5px solid rgba(56, 150, 201, 0.28)",
                    color: "rgba(47, 128, 172, 0.34)"
                }
            },
            "&.MuiButton-contained" : {
                // fontWeight: "700",

                textTransform: "none",
                    fontFamily: "Montserrat",
                    color: "#fff",
                    background: "linear-gradient(277.53deg, #3896C9 -1.69%, rgba(56, 150, 201, 0) 141.56%);",
                    boxShadow : "none",


                    "&:hover" : {
                        background: "linear-gradient(277.53deg, #117BB5 -1.69%, rgba(56, 150, 201, 0) 141.56%)",
                        boxShadow : "none",
                    },

                    "&:focus" : {
                        // background: "linear-gradient(277.53deg, #11638F -1.69%, rgba(56, 150, 201, 0) 141.56%)",
                        // border: "none",
                        // boxSizing: "border-box",
                        // boxShadow: "none",
                        // borderRadius: "3px"
                    },

                "&:active" : {
                    fontFamily: "Montserrat",
                    color: "#fff",
                    background: "linear-gradient(277.53deg, #11638F -1.69%, rgba(56, 150, 201, 0) 141.56%)",
                    boxShadow : "none",
                },

                    "&.Mui-disabled": {
                        color : '#fff',
                        opacity : "0.4",
                        background : "linear-gradient(277.53deg, #3896C9 -1.69%, rgba(56, 150, 201, 0) 141.56%)"
                    }


        },

        "&.MuiButton-text" : {
            border: "0.5px solid rgba(64, 80, 81, 0.4)",
            borderRadius: "4px",
            background: "#FFFFFF",
            // fontSize: "10px",
            color: "rgba(0, 0, 0, 0.8)",
            fontFamily : "Montserrat",
            textTransform : "none",
            transition : "none",
            lineHeight: "12px",

            "&:hover" : {
                border: "0.5px solid rgba(56, 150, 201, 0.8)",
                background: "#FFFFFF",
                fontStyle: "normal",
                // fontWeight: 600,
                // fontSize: "10px",
                lineHeight: "12px",
                color: "rgba(56, 150, 201, 0.8)",




            },
            "&:active" : {
                background : "rgba(56, 150, 201, 0.07)",
                border: "0.5px solid rgba(56, 150, 201, 0.8)",
                borderRadius: "4px",
                color: "rgba(56, 150, 201, 0.8)",
            }

        }


    }});

export function Button ({   boxShadow = "5px 5px 12px rgba(56, 150, 201, 0.27)",
                            children,
                            height= "49px",
                            width,
                            padding,
                            startIcon,
                            variant="contained",
                            fontSize="20px !important",
                            fontWeight= 700,
                            activeFontWeight,
                            ...prop

}){
        const button = useStyle()
    return (
            <MuiButton
                startIcon={startIcon}
                sx={{
                    height : height,
                    width : width,
                    fontWeight : fontWeight,
                    fontSize : fontSize,
                    padding : padding,

                    "&:active" : {
                        boxShadow : boxShadow,
                        fontWeight : activeFontWeight ? activeFontWeight : fontWeight
                    }
                }} disableRipple {...prop} variant={variant}  className={button.btn}
            >
                {children}
            </MuiButton>
    )
}