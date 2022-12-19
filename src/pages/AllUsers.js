import React, { Fragment, useEffect, useState } from "react";
import UserList from "../components/User/UserList";
import Loader from "../UI/Loader";
import useHttp from "../hooks/use-http";
import Wrapper from "../UI/Wrapper";
const FIREBASE_DOMAIN =
  "https://reactpostrequestproject-default-rtdb.firebaseio.com";
function AllUser() {
  const [users, setUsers] = useState([]);

  const { isLoading, error, sendRequest: fetchUsers } = useHttp();

  useEffect(() => {
    const transformUsers = (usersObj) => {
      const loadedUsers = [];

      for (const key in usersObj) {
        loadedUsers.push({
          id: key,
          first_name: usersObj[key].first_name,
          last_name: usersObj[key].last_name,
          DOB: usersObj[key].DOB,
          contact_no: usersObj[key].contact_no,
          emailaddress: usersObj[key].emailaddress,
          streetaddress_one: usersObj[key].streetaddress_one,
          streetaddress_two: usersObj[key].streetaddress_two,
          city: usersObj[key].city,
          state: usersObj[key].state,
          zip: usersObj[key].zip,
          country: usersObj[key].country,
        });
      }

      setUsers(loadedUsers);
    };

    fetchUsers(
      {
        url: "https://reactpostrequestproject-default-rtdb.firebaseio.com/users.json",
      },
      transformUsers
    );
  }, [fetchUsers]);

  async function DeleteitemHandler(deleteid) {
    console.log("Delete Handler");
    try {
      const response = await fetch(
        `${FIREBASE_DOMAIN}/users/${deleteid}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("No users found!");
      } else {
        setUsers((prevUsers) => {
          const updatedUsers = prevUsers.filter(
            (usersDataItems) => usersDataItems.id !== deleteid
          );
          return updatedUsers;
        });
      }
    } catch (error) {}
  }
  return (
    <Fragment>
      {!isLoading && users.length > 0 && (
        <UserList items={users} onRemoveItem={DeleteitemHandler} />
      )}
      <Wrapper>
        {!isLoading && users.length === 0 && !error && (
          <div className="col-md-12 pt-5">
            <h2>No Users Found</h2>
          </div>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <Loader />}
      </Wrapper>
    </Fragment>
  );
}

export default AllUser;
