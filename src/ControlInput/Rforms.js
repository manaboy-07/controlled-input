/** @format */

import React from "react";
import { useState } from "react";

function Rforms() {
  const InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    comments: "",
    isFriendly: false,
    employment: "",
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const [formData, setFormData] = useState(InitialValues);

  return (
    <div>
      <form action=''>
        <h1 className='text-center'>MBC REGISTRATION</h1>
        <small>please fill in the form with valid inputs</small>
        <div className='main-form'>
          <div className='formInput'>
            <label htmlFor='firstName'>First Name: </label>
            <input
              type='text'
              value={formData.firstName}
              name='firstName'
              onChange={handleChange}
            />
          </div>

          <div className='formInput'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              value={formData.lastName}
              name='lastName'
              onChange={handleChange}
            />
          </div>

          <div className='formInput'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              value={formData.email}
              name='email'
              onChange={handleChange}
            />
          </div>

          <div className='formInput'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              value={formData.password}
              name=' password'
              onChange={handleChange}
            />
          </div>

          <div className='formInput'>
            <label htmlFor='password'>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>

          <div className='formInput'>
            <textarea
              name='comments'
              value={formData.comments}
              onChange={handleChange}
              id=''
              cols='30'
              rows='10'></textarea>
          </div>

          <div className='formInput'>
            <input
              type='checkbox'
              name='isFriendly'
              id='isFriendly'
              checked={formData.isFriendly}
              onChange={handleChange}
            />
            <label htmlFor='isFriendly'>Are you a Robot ?</label>
          </div>

          <div className='formInput'>
            <fieldset>
              <legend>Current employment Status</legend>

              <div className='set-radio'>
                <input
                  type='radio'
                  name='employment'
                  id='unemployed'
                  value='unemployed'
                  checked={formData.employment === "unemployed"}
                  onChange={handleChange}
                />
                <label htmlFor='unemployed'>Unemployed</label>
              </div>

              <div className='set-radio'>
                <input
                  type='radio'
                  name='employment'
                  id='employed'
                  value='employed'
                  checked={formData.employment === "employed"}
                  onChange={handleChange}
                />
                <label htmlFor='employed'>Employed</label>
              </div>

              <div className='set-radio'>
                <input
                  type='radio'
                  name='employment'
                  id='part-time'
                  value='part-time'
                  onChange={handleChange}
                  checked={formData.employment === "part-time"}
                />
                <label htmlFor='part-time'>Part-time</label>
              </div>
            </fieldset>
          </div>
        </div>

        <div className='favColor'>
          <select name='' id='favColor'>
            <option value='red'>Red</option>
            <option value='orange'>Orange</option>
            <option value='yellow'>Yellow</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
            <option value='indigo'>Indigo</option>
            <option value='violet'>Violet</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Rforms;
