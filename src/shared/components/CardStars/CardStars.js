import React from "react";

export function CardStars({ num = 2 }) {
  let arr = [];
  for (let x = 0; x < 5; x++) {
    arr.push(x < num);
  }
  return arr.map((e, i) => (
    <img
      key={i}
      src={
        e
          ? require("../../../images/star.svg")
          : require("../../../images/starDisabled.svg")
      }
      alt=""
    />
  ));
}
