import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export function UsersImages({ arr, openDropdown, state, id }) {
  return (
    <>
      <Box
        width="21px"
        height="21px"
        borderRadius="50%"
        backgroundColor="blue"
        position="absolute"
        right="44px"
        bottom="18px"
        zIndex="2"
      ></Box>
      <Box
        width="21px"
        height="21px"
        borderRadius="50%"
        backgroundColor="red"
        position="absolute"
        right="26px"
        bottom="18px"
        zIndex="1"
      ></Box>
      {arr.length > 2 ? (
        <Box
          width="19px"
          height="19px"
          borderRadius="50%"
          border="1px dashed #C4C4C4"
          position="absolute"
          right="8px"
          bottom="18px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            fontFamily="Montserrat"
            fontStyle="normal"
            fontWeight="500"
            fontSize="8px"
            lineHeight="10px"
            sx={{ cursor: "pointer", padding: "3px 0" }}
            id={id}
            onClick={openDropdown}
          >
            + {arr.length - 2}
          </Typography>
          {state == id ? (
            <>
              <img
                style={{ position: "absolute", top: "14px", left: "-13px" }}
                src={require("../../../../../../../images/InProgressCard/Rectangle 225.svg")}
                alt="rectangle"
              />
              <Box
                width="260px"
                maxHeight="290px"
                top="30px"
                left="-22px"
                borderRadius="10px"
                position="absolute"
                backgroundColor="#fff"
                boxShadow="0px 4px 8px rgba(11, 42, 58, 0.16)"
                zIndex="5"
                display="flex"
                flexDirection="column"
                alignItems="center"
                pt="21px"
                id={id}
                sx={{ overflowY: "auto" }}
              >
                {arr.map(() => {
                  return (
                    <Box
                      width="100%"
                      display="flex"
                      alignItems="center"
                      sx={{
                        ":hover": {
                          backgroundColor: "rgba(56, 150, 201, 0.07)",
                        },
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Avatar
                        sx={{
                          m: "7px 9px 7px 26px",
                          width: "26px",
                          height: "26px",
                        }}
                        width="26px"
                        height="26px"
                      />
                      <Typography
                        fontFamely="Montserrat"
                        fontWeight="600"
                        fontSize="12px"
                        color="rgba(10, 12, 26, 0.89)"
                      >
                        Firstname Lastname
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </>
          ) : (
            ""
          )}
        </Box>
      ) : (
        ""
      )}
    </>
  );
}
