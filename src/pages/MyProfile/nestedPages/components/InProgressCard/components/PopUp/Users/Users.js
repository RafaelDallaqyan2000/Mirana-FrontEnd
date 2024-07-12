import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { RandomColor } from "../../../../../../../../shared";
import "./Users.css";

export function Users({ array, count, openDropdown, id, state }) {
  let newArr = new Array(count).fill();
  // const onMouseMove = (e) => {
  //   console.log(window.innerWidth - e.clientX > 595);
  //   return window.innerWidth - e.clientX > 595;
  // };
  // useEffect(() => {
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {};
  // }, []);

  return (
    <Box className="imagesDiv">
      {array.length <= count ? (
        array.map((e, i) => {
          return (
            <Box style={{ zIndex: array.length - i }}>
              {e.image !== null ? (
                <Avatar
                  style={{ width: "24px", height: "24px" }}
                  title={e.firstName}
                  src={e.image}
                />
              ) : (
                <RandomColor lastName={e.lastName} firstName={e.firstName} />
              )}
            </Box>
          );
        })
      ) : (
        <>
          {newArr.map((e, i) => {
            return (
              <Box style={{ zIndex: array.length - i }}>
                {array[i].image !== null ? (
                  <Avatar
                    style={{ width: "24px", height: "24px" }}
                    title={array[i].firstName}
                    src={array[i].image}
                  />
                ) : (
                  <RandomColor
                    lastName={array[i].lastName}
                    firstName={array[i].firstName}
                  />
                )}
              </Box>
            );
          })}
          <Box className="defaultBox" id={id} onClick={openDropdown}>
            +{array.length - count}{" "}
            {state == id ? (
              <>
                <img
                  style={{ position: "absolute", top: "18px", left: "41px" }}
                  src={require("../../../../../../../../images/InProgressCard/Rectangle 225.svg")}
                  alt="rectangle"
                />
                <Box
                  className="usersInProgress"
                  width="260px"
                  maxHeight="290px"
                  top="34px"
                  left={true ? "30px" : "-188px"}
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
                  {array.map((e, i) => {
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
                        <Box
                          style={{
                            zIndex: array.length - i,
                            margin: "7px 9px 7px 26px",
                          }}
                        >
                          {array[i].image !== null ? (
                            <Avatar
                              sx={{
                                width: "26px",
                                height: "26px",
                              }}
                              title={array[i].firstName}
                              src={array[i].image}
                            />
                          ) : (
                            <RandomColor
                              lastName={array[i].lastName}
                              firstName={array[i].firstName}
                            />
                          )}
                        </Box>
                        <Typography
                          fontFamely="Montserrat"
                          fontWeight="600"
                          fontSize="12px"
                          color="rgba(10, 12, 26, 0.89)"
                        >
                          {e.firstName + " " + e.lastName}
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
        </>
      )}
    </Box>
  );
}
