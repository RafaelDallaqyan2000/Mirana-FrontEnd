import React, {useState} from "react";
import {
    Box,
    Grid,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Add, KeyboardArrowDown} from "@mui/icons-material";
import "./SelectPro.css";

const useStyle = makeStyles({
    styleSelect: {
        transition: "none",
        boxShadow: " 0px 4px 8px rgba(11, 42, 58, 0.12)",
        border: "none",

        "&:hover": {
            boxShadow: "0px 4px 12px rgba(56, 150, 201, 0.19)",
        },
        "& fieldset": {
            border: "none",
            boxShadow: "none",
        },
        "&.MuiSelect-root": {
            padding: 0,
        },
        "&.Mui-disabled": {
            background: "rgba(64, 80, 81, 0.04)",
            boxShadow: "0px 4px 8px rgba(64, 80, 81, 0.04)",
            "&:hover": {
                boxShadow: "0px 4px 8px rgba(64, 80, 81, 0.04)",
            },
        },
    },
});

export function SelectPro({
                              select,
                              projects,
                              type,
                              label,
                              variant,
                              disabled,
                              width = "150px",
                              height,
                              fontSizeLabel,
                              placeholder,
                              onChange,
                              marginLabel,
                              fontSize,
                              placeholderColor,
                              fontWeight = "600",
                              all = "All",
                              marginTopMenu = "-2px",
                              ...prop
                          }) {
    const style = useStyle();
    return (
        <Box sx={{display: "flex", alignItems: "center"}} className="selectPro">
            <InputLabel
                // lg={1} md={1} sm={1} sx={1} xs={7}
                style={{
                    fontFamily: "MontserratMedium",
                    margin: marginLabel,
                    fontSize: fontSizeLabel,
                    color: "rgba(64,80, 81, 0.8)",
                }}
            >
                {label}
            </InputLabel>

            <MuiSelect
                onChange={onChange}
                disabled={disabled}
                variant={variant}
                labelId="label-id"
                IconComponent={({...rest}) => (
                    <KeyboardArrowDown
                        // aria-checked={false}
                        sx={{
                            "&.MuiSelect-icon": {
                                boxShadow: "none",
                                color: "rgba(0, 0, 0, 0.6)",
                                background: "#fff",
                                // padding: "5px",
                                position: "absolute",
                                right: "2px",
                            },
                        }}
                        fontSize="small"
                        {...rest}
                    />
                )}
                className={style.styleSelect}
                sx={{width: width, height: height}}
                required
                defaultValue={placeholder}
                SelectDisplayProps={{
                    style: {
                        padding: "10px 0 10px 10px",
                        color: "#000000",
                        opacity: "0.5",
                        // boxShadow: " 0px 4px 8px rgba(11, 42, 58, 0.12)",
                        fontWeight: fontWeight,
                        fontSize: fontSize,
                        overflow: "hidden",
                        ...prop,
                    },
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            ".MuiList-root": {
                                width: width,
                                padding: 0,
                                maxHeight: "270px"
                            },
                            ".MuiMenuItem-root": {
                                whiteSpace: "break-spaces",
                                fontWeight: "500",
                                fontSize: fontSize,
                                "&:hover": {
                                    backgroundColor: "#fff",
                                },
                            },
                            ".Mui-selected": {
                                backgroundColor: "rgba(56, 150, 201, 0.07)",
                                ":hover": {
                                    backgroundColor: "rgba(56, 150, 200, 0.07)",
                                },
                            },
                        },

                        style: {
                            boxShadow: "0px 4px 8px  rgba(56, 150, 201, 0.14)",
                            marginTop: marginTopMenu,
                            borderRadius: "4px",
                            background: "#FFFFFF",
                            transition: "none",
                            padding: "0",
                            // border : "1px solid red"
                        },
                    },
                }}
            >
                <MenuItem value={placeholder} sx={{display: "none",}}>
                    {placeholder}
                </MenuItem>
                {all ? (
                    <MenuItem
                        className="All"
                        disableRipple
                        value={0}
                        sx={{
                            padding: "10px",
                            margin: "0",
                            color: "rgba(0, 0, 0, 0.9)",
                            opacity: "0.48",
                        }}
                    >
                        {all}
                    </MenuItem>
                ) : ""
                }

                            <MenuItem sx={{
                                padding: "10px", margin: "0", color: "rgba(0, 0, 0, 0.9)", opacity: "0.48",
                            }} value={type[0]} disableRipple>
                                {type[0]}
                            </MenuItem>
                            <MenuItem sx={{
                                marginBottom: "5px",
                                borderBottom: "1px solid #E9E9E9",
                                padding: "10px 10px 10px 12px",
                                margin: "0",
                                color: "rgba(0, 0, 0, 0.9)",
                                opacity: "0.48",
                            }} value={type[1]} disableRipple>
                                {type[1]}
                            </MenuItem>
                <Box
                    sx={{
                        padding: "10px 10px 10px 12px",
                        fontWeight: "700 !important", fontSize: "12px",
                        fontFamily: "Montserrat", color: "rgba(0, 0, 0, 0.5)"
                    }}
                >
                    Projects
                </Box>
                {projects ? projects.map((i) => {
                    return (
                        <MenuItem
                            disableRipple
                            sx={{
                                padding: "10px 10px 10px 12px",
                                margin: "0",
                                color: "rgba(0, 0, 0, 0.9)",
                                opacity: "0.48",
                            }}
                            value={i.name}
                        >
                            {i.name}
                        </MenuItem>
                    );
                }) : ""}
            </MuiSelect>
        </Box>
    );
}
