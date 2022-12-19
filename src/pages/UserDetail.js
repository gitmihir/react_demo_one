import React, { Fragment, useRef } from "react";
import { useParams } from "react-router-dom";
import UserInDetail from "../components/User/UserInDetail";
import { useFetch } from "../hooks/use-fetch";
import Loader from "../UI/Loader";
const FIREBASE_DOMAIN =
  "https://reactpostrequestproject-default-rtdb.firebaseio.com";
function UserDetail() {
  const params = useParams();
  const getuserid = params.usersid;

  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    `${FIREBASE_DOMAIN}/users/${getuserid}.json`,
    isComponentMounted,
    []
  );
  const userdetail = {
    id: getuserid,
    ...data,
  };

  return (
    <Fragment>
      {!loading && (
        <UserInDetail
          first_name={userdetail.first_name}
          last_name={userdetail.last_name}
          DOB={userdetail.DOB}
          contact_no={userdetail.contact_no}
          emailaddress={userdetail.emailaddress}
          streetaddress_one={userdetail.streetaddress_one}
          streetaddress_two={userdetail.streetaddress_two}
          city={userdetail.city}
          state={userdetail.state}
          zip={userdetail.zip}
          country={userdetail.country}
        />
      )}
      {!loading && userdetail.length === 0 && !error && (
        <p>No User detail Found.</p>
      )}
      {!loading && error && <p>{error}</p>}
      {loading && <Loader />}
    </Fragment>
  );
}

export default UserDetail;
