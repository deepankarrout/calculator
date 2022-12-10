import React from "react";

export default function Buttons({ value, onClick, className }) {
  return (
    <input
      type="button"
      value={value}
      className={className}
      onClick={onClick}
    />
  );
}
