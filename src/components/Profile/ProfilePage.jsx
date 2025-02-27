import React from 'react';
import { Formik } from 'formik';

const ProfilePage = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{fname:"",lname:"",email:"", password:"",conformPassword:"",phoneNum:""}}
      validate={values => {
        const errors = {};
 
        // checl first name
        if(!values.fname || values.fname.trim() === ""){
            errors.fname = "First name Required"
        }else if(values.fname.length <= 2){
            errors.fname = "First name must be at least 4 characters"
        }

        // check last name
        if(!values.lname || values.fname.trim() === ""){
            errors.fname = "Last name Required"
        }


        // check email
        if (!values.email || values.email.trim() === "") {
          errors.email = 'Email Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        
        // check phone number
        if(!values.phoneNum || values.phoneNum.trim() === ""){
            errors.phoneNum = "Phone number Required"
        }else if(!/^\d{10}$/.test(values.phoneNum)){
            // checking phone number contains exactly 10 digits
            errors.phoneNum = 'Invalid phone number'
        }
        
        // check password
        if(!values.password || values.password.trim() === ""){
            errors.password="password Required"
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
            type="text" 
            name="fname"
            placeholder='Input Your First Name'
            onChange={handleChange} 
            onBlur={handleBlur}
            value={values.fname}
        />
        <p>{errors.fname && touched.fname && errors.fname}</p>

        <input
            type="text"
            name="lname"
            placeholder="Input Your Last Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lname}/>
        <p>{errors.lname && touched.lname && errors.lname}</p>

          <input
            type="email"
            name="email"
            placeholder="Input Your Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <p>{errors.email && touched.email && errors.email}</p>
          
          <input
           type="text"
           name="phoneNum"
           placeholder="Input Your Phone Number"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.phoneNum}
            />

           <p>{errors.phoneNum && touched.phoneNum && errors.phoneNum}</p>

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <p>{errors.password && touched.password && errors.password}</p>

          <input 
          type="password"
          name="conformpassword"
          placeholder="Conform Your Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.conformPassword} />
         <p>{errors.conformPasswordf && touched.conformPassword && errors.conformPassword}</p>


          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default ProfilePage;