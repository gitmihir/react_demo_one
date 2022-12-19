import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function UserItem(props) {
  function deletehandler() {
    const userid = props.id;
    props.onRemoveItem(userid);
  }

  return (
    <Fragment>
      <tr>
        <td>{props.first_name}</td>
        <td>{props.last_name}</td>
        <td>{props.contact_no}</td>
        <td>{props.country}</td>
        <td>
          <Link to={`/users/${props.id}/`} className="btn btn-success">
            View Detail
          </Link>
          <button onClick={deletehandler} type="button">
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
}
export default UserItem;
