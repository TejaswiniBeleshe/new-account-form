import React from 'react';
import { Formik } from 'formik';

const ProfilePage = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{fname:"",lname:"",email:"", password:"",conformPassword:"",phoneNum:""}}
      validate={values => {
        const errors = {};


        // check email
        if (!values.email || values.email.trim() === "") {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        
        // check phone number
        if(!values.phoneNum || values.phoneNum.trim() === ""){
            errors.phoneNum = "Required"
        }else if(!/^\d{10}$/.test(values.phoneNum)){
            // checking phone number contains exactly 10 digits
            errors.phoneNum = 'Invalid phone number'
        }
        
        // check password
        if(!values.password || values.password.trim() === ""){
            errors.password="Required"
        }else if(values.password.length<8){
            errors.password = "Password must be at least 8 characters"
        }

        // check conform password
        if(!values.conformPassword || values.conformPassword.trim() === ""){
            errors.conformPassword = "Required"
        }else if(values.conformPassword !== values.password){
            errors.conformPassword = "errors do not match"

        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default ProfilePage;