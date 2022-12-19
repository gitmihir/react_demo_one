import React, { Fragment } from "react";
import UserForm from "../components/User/UserForm";
import { useHistory } from "react-router-dom";

function AddUser() {
  const history = useHistory();
  async function onSubmitDataHandler(submittedData) {
    try {
      const response = await fetch(
        "https://reactpostrequestproject-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(submittedData),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      } else {
        history.push("/users");
      }
    } catch (error) {}
  }

  return (
    <Fragment>
      <UserForm onSubmitData={onSubmitDataHandler} />
    </Fragment>
  );
}

export default AddUser;
