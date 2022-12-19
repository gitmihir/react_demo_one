import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "../../UI/Wrapper";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";
import Loader from "../../UI/Loader";
const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6W-Cu8TWZNZ2fkOC7m-QivVvAC9g-GMU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6W-Cu8TWZNZ2fkOC7m-QivVvAC9g-GMU";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          const data = await res.json();
          let errorMessage = "Authentication failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/users");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Wrapper>
      <div className="col-md-4" />
      <div className="col-md-4">
        <div className={classes.wrapdiv}>
          <h1>{isLogin ? "Sign In" : "Sign Up"}</h1>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                ref={emailInputRef}
              />
            </div>
            <div className="form-group pt-2">
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
                className="form-control"
              />
            </div>
            <div className="form-group pt-3">
              {!isLoading && (
                <button className={classes.loginbtnLink}>
                  {isLogin ? "Login" : "Create Account"}
                </button>
              )}
              {isLoading && <Loader />}
              <button
                type="button"
                className={classes.btnLink}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-4" />
    </Wrapper>
  );
};

export default AuthForm;
