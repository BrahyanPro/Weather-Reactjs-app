import React from "react";
import "./Search.css";

export const Search = ({
  placeHolder,
  value,
  onFocus,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeHolder}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
