import "./App.css";
import React, { Suspense, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import AuthContext from "./store/auth-context";
import HomePage from "./pages/HomePage";
import Loader from "./UI/Loader";
const AddUser = React.lazy(() => import("./pages/AddUser"));
const NotFound = React.lazy(() => import("./pages/404"));
const UserDetail = React.lazy(() => import("./pages/UserDetail"));
const AllUser = React.lazy(() => import("./pages/AllUsers"));
const AuthPage = React.lazy(() => import("./pages/AuthPage"));

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/users" exact>
              <AllUser />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/users/:usersid">
              <UserDetail />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/new-user">
              <AddUser />
            </Route>
          )}

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
