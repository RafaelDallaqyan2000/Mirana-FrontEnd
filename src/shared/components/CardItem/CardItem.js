import React from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import { Button } from "../Button";
import { CardStars } from "../CardStars";

const useStyles = makeStyles({
  gridContainer: {
    // margin : "25px",
    background: "#FFFFFF",
    maxHeight: "250px",
    borderRadius: "6px",
    fontFamily: "Montserrat",
    boxShadow: "0px 4px 8px rgba(11, 42, 58, 0.16)",
  },
  image: {
    width: "71px",
    height: "72px",
    borderRadius: "50%",
  },
  NameLastName: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
    color: "rgba(0, 0, 0, 0.8)",
  },
  profes: {
    fontWeight: "600",
    // lineHeight : "17px",
    fontSize: "14px",
  },
  cardInfo: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "17px",
  },
  buttonX: {
    fontFamily: "Montserrat",
    fontWeight: 800,
    fontSize: "5px",
    color: "rgba(0, 0, 0, 0.8)",
  },
});

export function CardItem({
  src,
  star,
  name = "Mark",
  lastName = "Zuckerberg",
  onClick,
  professia = "Full stack Developer",
}) {
  const style = useStyles();
  return (
    <Grid container width="231px" className={style.gridContainer}>
      <Grid
        item
        sx={{ margin: "22px 26px 10px 0" }}
        md={12}
        container
        alignItems="flex-start"
        justifyContent="flex-end"
      >
        <img
          style={{ cursor: "pointer", padding: "1px" }}
          src={require("../../../images/optionsInCard.svg")}
        />
      </Grid>

      <Grid item container flexDirection="column" alignItems="center" md={12}>
        <Avatar sx={{ width: "71px", height: "72px" }} src={src} />

        <Typography
          variant="h6"
          sx={{ color: "black", margin: "8px 0 5px" }}
          className={style.NameLastName}
        >
          {name} {lastName}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "17px",
            color: "rgba(0, 0, 0, 0.4)",
            marginBottom: "10px",
          }}
          className={style.profes}
        >
          {professia}
        </Typography>

        <Grid
          item
          container
          justifyContent="center"
          sx={{ width: "100%", marginBottom: "11px" }}
          onClick={onClick}
        >
          <Button
            className={style.buttonX}
            variant="text"
            sx={{ width: "177px", fontWeight: "600", height: "28px" }}
          >
            View Profile
          </Button>
        </Grid>
        <Grid
          py={1}
          item
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <Grid item marginLeft="14px">
            <CardStars num={star} />
          </Grid>
          <Grid item>
            <Button
              sx={{
                minWidth: 20,
                padding: 0,
                borderRadius: "50%",
                height: 20,
                marginRight: "14px",
              }}
            >
              <img
                src={require("../../../images/whiteStrow.svg")}
                alt="strow"
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
