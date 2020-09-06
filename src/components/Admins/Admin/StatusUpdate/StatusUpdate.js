import React, { useState } from "react";
import styles from "./StatusUpdate.module.css";

const StatusUpdate = (props) => {
  const [status, setStatus] = useState();

  const changeStatusHandler = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
  };

  const statusList = props.statusList.map((status) => (
    <option key={status._id} value={status.statusName}>{status.statusName}</option>
  ));

  return (
    <>
      <select onChange={changeStatusHandler}>{statusList}</select>
      <button
        className={styles.btnUpdate}
        onClick={() => props.updateStatus(props.adminId, status)}
      >
        Update
      </button>
    </>
  );
};

export default StatusUpdate;
