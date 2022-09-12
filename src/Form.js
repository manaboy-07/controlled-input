/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Form() {
  // First set the initial state ensure it is the same as the name
  // then assign the forms to their actual values
  // then set up an onCHange event
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a Valid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password must not be more than 10 characters";
    }
    return errors;
  };
  return (
    <div className='container'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signed in successfully </div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form action='' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='ui-divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label
              htmlFor='
            '>
              User name
            </label>
            <input
              type='text'
              value={formValues.username}
              name='username'
              placeholder='Username'
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className='field'>
            <label
              htmlFor='
            '>
              Email
            </label>
            <input
              type='email'
              value={formValues.email}
              name='email'
              placeholder='Email'
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className='field'>
            <label
              htmlFor='
            '>
              Password
            </label>
            <input
              type='password'
              value={formValues.password}
              name='password'
              placeholder='Password'
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div>
            <button className='btn-blue'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
