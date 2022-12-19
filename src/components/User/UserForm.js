import React from "react";
import Wrapper from "../../UI/Wrapper";
import useInput from "../../hooks/use-input";
import "./UserForm.css";

function UserForm(props) {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstnameInputHasError,
    valueChangeHandler: firstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastnameInputHasError,
    valueChangeHandler: lastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: entereddob,
    isValid: enteredDobIsValid,
    hasError: dobInputHasError,
    valueChangeHandler: dobHandler,
    inputBlurHandler: dobBlurHandler,
    reset: resetDobInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredcontactno,
    isValid: enteredContactIsValid,
    hasError: contactInputHasError,
    valueChangeHandler: contactNumberHandler,
    inputBlurHandler: contactBlurHandler,
    reset: resetContactInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredemail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredStreetAddressOne,
    isValid: enteredstaddressoneIsValid,
    hasError: staddressoneInputHasError,
    valueChangeHandler: staddressoneHandler,
    inputBlurHandler: staddressoneBlurHandler,
    reset: resetstoneInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredStreetAddressTwo,
    isValid: enteredstaddresstwoIsValid,
    hasError: staddresstwoInputHasError,
    valueChangeHandler: staddresstwoHandler,
    inputBlurHandler: staddresstwoBlurHandler,
    reset: resetsttwoInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredState,
    isValid: enteredStateIsValid,
    hasError: stateInputHasError,
    valueChangeHandler: stateHandler,
    inputBlurHandler: stateBlurHandler,
    reset: resetStateInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredZip,
    isValid: enteredZipIsValid,
    hasError: zipInputHasError,
    valueChangeHandler: zipHandler,
    inputBlurHandler: zipBlurHandler,
    reset: resetZipInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCountry,
    isValid: enteredCountryIsValid,
    hasError: countryInputHasError,
    valueChangeHandler: countryHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountryInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredDobIsValid &&
    enteredContactIsValid &&
    enteredEmailIsValid &&
    enteredstaddressoneIsValid &&
    enteredstaddresstwoIsValid &&
    enteredCityIsValid &&
    enteredStateIsValid &&
    enteredZipIsValid &&
    enteredCountryIsValid
  ) {
    formIsValid = true;
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    props.onSubmitData({
      first_name: enteredFirstName,
      last_name: enteredLastName,
      DOB: entereddob,
      contact_no: enteredcontactno,
      emailaddress: enteredemail,
      streetaddress_one: enteredStreetAddressOne,
      streetaddress_two: enteredStreetAddressTwo,
      city: enteredCity,
      state: enteredState,
      zip: enteredZip,
      country: enteredCountry,
    });

    resetFirstNameInput();
    resetLastNameInput();
    resetDobInput();
    resetContactInput();
    resetEmailInput();
    resetstoneInput();
    resetsttwoInput();
    resetCityInput();
    resetStateInput();
    resetZipInput();
    resetCountryInput();
  }
  const firstnameInputClass = firstnameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastnameInputClass = lastnameInputHasError
    ? "form-control invalid"
    : "form-control";
  const dobInputClass = dobInputHasError
    ? "form-control invalid"
    : "form-control";
  const contactnoInputClass = contactInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  const streetaddressoneInputClass = staddressoneInputHasError
    ? "form-control invalid"
    : "form-control";
  const streetaddresstwoInputClass = staddresstwoInputHasError
    ? "form-control invalid"
    : "form-control";
  const cityInputClass = cityInputHasError
    ? "form-control invalid"
    : "form-control";
  const stateInputClass = stateInputHasError
    ? "form-control invalid"
    : "form-control";
  const zipInputClass = zipInputHasError
    ? "form-control invalid"
    : "form-control";
  const countryInputClass = countryInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Wrapper>
      <div className="col-md-12 pt-3">
        <h3>Add New User</h3>
      </div>
      <form onSubmit={formSubmitHandler}>
        <div className="card">
          <div className="card-header">Personal Detail</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    onChange={firstNameHandler}
                    onBlur={firstNameBlurHandler}
                    className={firstnameInputClass}
                    value={enteredFirstName}
                  />
                  {firstnameInputHasError && (
                    <p className="error-text">Please Enter First Name</p>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    onChange={lastNameHandler}
                    onBlur={lastNameBlurHandler}
                    className={lastnameInputClass}
                    value={enteredLastName}
                  />
                  {lastnameInputHasError && (
                    <p className="error-text">Please Enter Last Name</p>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Dob</label>
                  <input
                    type="date"
                    onChange={dobHandler}
                    onBlur={dobBlurHandler}
                    className={dobInputClass}
                    value={entereddob}
                  />

                  {dobInputHasError && (
                    <p className="error-text">Please Select Date of Birth</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card-header">Contact Detail</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Contact Number</label>
                  <input
                    type="number"
                    onChange={contactNumberHandler}
                    onBlur={contactBlurHandler}
                    className={contactnoInputClass}
                    value={enteredcontactno}
                  />

                  {contactInputHasError && (
                    <p className="error-text">Please Enter Contact Number</p>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    onChange={emailHandler}
                    onBlur={emailBlurHandler}
                    className={emailInputClass}
                    value={enteredemail}
                  />

                  {emailInputHasError && (
                    <p className="error-text">Please Enter Valid Email</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Street Address 1</label>
                  <input
                    type="text"
                    onChange={staddressoneHandler}
                    onBlur={staddressoneBlurHandler}
                    className={streetaddressoneInputClass}
                    value={enteredStreetAddressOne}
                  />

                  {staddressoneInputHasError && (
                    <p className="error-text">Please Enter Street Address</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Street Address 2</label>
                  <input
                    type="text"
                    onChange={staddresstwoHandler}
                    onBlur={staddresstwoBlurHandler}
                    className={streetaddresstwoInputClass}
                    value={enteredStreetAddressTwo}
                  />

                  {staddresstwoInputHasError && (
                    <p className="error-text">Please Enter Street Address</p>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    onChange={cityHandler}
                    onBlur={cityBlurHandler}
                    className={cityInputClass}
                    value={enteredCity}
                  />

                  {cityInputHasError && (
                    <p className="error-text">Please Enter City</p>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    onChange={stateHandler}
                    onBlur={stateBlurHandler}
                    className={stateInputClass}
                    value={enteredState}
                  />

                  {stateInputHasError && (
                    <p className="error-text">Please Enter State</p>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Zip</label>
                  <input
                    type="text"
                    onChange={zipHandler}
                    onBlur={zipBlurHandler}
                    className={zipInputClass}
                    value={enteredZip}
                  />

                  {zipInputHasError && (
                    <p className="error-text">Please Enter Zip</p>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    onChange={countryHandler}
                    onBlur={countryBlurHandler}
                    className={countryInputClass}
                    value={enteredCountry}
                  />

                  {countryInputHasError && (
                    <p className="error-text">Please Enter Country</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              disabled={!formIsValid}
              className="btn btn-primary btnu"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
export default UserForm;
