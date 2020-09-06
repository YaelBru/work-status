import React from "react";

const Filter = (props) => {
  const statusList = props.statusList.map((status) => (<option key={status._id} value={status.statusName}>{status.statusName}</option>));

  return (
    <select onChange={(event) => props.filterChange(event)}>
      <option value="" disabled>Filter by status</option>
      <option value="all">All</option>
      {statusList}
    </select>
  );
};

export default Filter;
