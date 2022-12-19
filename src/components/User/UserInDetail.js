import Wrapper from "../../UI/Wrapper";
import { Link } from "react-router-dom";

function UserInDetail(props) {
  return (
    <Wrapper>
      <div className="col-md-12 mt-5">
        <h1>User Detail</h1>
        <table className="table">
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{props.first_name}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{props.last_name}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{props.DOB}</td>
            </tr>
            <tr>
              <th>Contact Number</th>
              <td>{props.contact_no}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{props.emailaddress}</td>
            </tr>
            <tr>
              <th>Street Address 1</th>
              <td>{props.streetaddress_one}</td>
            </tr>
            <tr>
              <th>Street Address 2</th>
              <td>{props.streetaddress_two}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{props.city}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{props.state}</td>
            </tr>
            <tr>
              <th>Zip</th>
              <td>{props.zip}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{props.country}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-12 mt-5">
        <Link className="btn btn-success" to="/users">
          Back
        </Link>
      </div>
    </Wrapper>
  );
}
export default UserInDetail;
