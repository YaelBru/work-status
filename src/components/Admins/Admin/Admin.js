import React from "react";
import StatusUpdate from "./StatusUpdate/StatusUpdate";

const Admin = (props) => {

  let showStatus = !props.admin.status ? "Please update your status." : `you are ${props.admin.status}`;

  return (
    <>
      <div>
        <h2>
          Hello {props.admin.name}, {showStatus}
        </h2>
        <p>Update Current Status:</p>
      </div>
      <StatusUpdate
        statusList={props.statusList}
        updateStatus={props.updated}
        adminId={props.admin._id}
      />
    </>
  );
};

export default Admin;


