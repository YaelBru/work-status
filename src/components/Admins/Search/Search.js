import React from "react";
import Input from "../../UI/Input/Input";

const Search = (props) => {
  return (
    <Input
      placeholder="Search by name..."
      name="searchValue"
      InputType="text"
      value={props.searchValue}
      changed={props.searched}
    />
  );
};

export default Search;
