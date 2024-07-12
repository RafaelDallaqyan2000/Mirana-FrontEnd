import React from "react";

export function Thead({ items }) {
  return (
    <thead>
      {items.map((e) => (
        <th key={e} style={{ color: "#405051" }}>
          {e}
        </th>
      ))}
    </thead>
  );
}
