import React from "react";

export function TheadTable({ items }) {
  return (
    <thead >
      {items.map((e) =>
        <th className="TheadTh" style={{color:"#405051", fontSize:"14px",
          fontWeight:"500", fontFamily:"Montserrat"
        }}>{e}</th>
      )}
    </thead>
  );
}
