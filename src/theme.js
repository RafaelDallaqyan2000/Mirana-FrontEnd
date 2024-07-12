import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        h1: {
            color:"rgba(64, 80, 81, 0.77)",
            fontFamily: "Montserrat",
            fontWeight: "700",
            fontSize: 30,
        },
        h6:{
            color:"rgba(64, 80, 81, 0.44)",
            fontFamily: "Montserrat",
            fontWeight: "500 , Medium",
            fontSize: 17,
        },
        span:{
            fontFamily: "Montserrat",
            fontWeight: "700 Medium",
            fontSize: 20,
        },
        body1:{
            color:"rgba(64, 80, 81, 0.44)",
            fontFamily: "Montserrat",
            fontWeight: "700 Bold",
            fontSize: 17,
        },
        body2:{
            fontFamily: "Montserrat",
            fontWeight:"Bold",
            fontSize:17,
            color:"rgba(47, 128, 172, 1)",
        },
        p:{
            fontFamily: "Montserrat",
            background: "-webkit-linear-gradient(#000, #fff)",
            '-webkit-background-clip': "text",
            '-webkit-text-fill-color': "transparent",
        }
    },
})
export default theme