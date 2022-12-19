//import UserItem from "./UserItem";
import Wrapper from "../../UI/Wrapper";
import { Link } from "react-router-dom";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Wrapper>
      <div className="col-md-12 mt-5">
        <h3>All Users</h3>
      </div>
      <div className="col-md-12 mt-3">
        <table id="customers" className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Number</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((user) => (
              <tr key={user.id} id={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.contact_no}</td>
                <td>{user.country}</td>
                <td>
                  <Link
                    to={`/users/${user.id}/`}
                    className={classes.btnPrimary}
                  >
                    View Detail
                  </Link>
                  <button
                    className={classes.btnDanger}
                    onClick={props.onRemoveItem.bind(this, user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default UserList;
