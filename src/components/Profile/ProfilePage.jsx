import React from "react";
import { Formik } from "formik";
import { Form, Button, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfilePage.css"

const ProfilePage = () => (
  <Container className="d-flex justify-content-center align-items-center parent">
    <Card className="p-4 w-100 card">
      <h3 className="text-center mb-4">Your Profile</h3>
      <Formik
        initialValues={{ fname: "", lname: "", email: "", password: "", conformPassword: "", phoneNum: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.fname || values.fname.trim() === "") {
            errors.fname = "First name Required";
          } else if (values.fname.length <= 2) {
            errors.fname = "First name must be at least 4 characters";
          }
          if (!values.lname || values.lname.trim() === "") {
            errors.lname = "Last name Required";
          }
          if (!values.email || values.email.trim() === "") {
            errors.email = "Email Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          if (!values.phoneNum || values.phoneNum.trim() === "") {
            errors.phoneNum = "Phone number Required";
          } else if (!/^\d{10}$/.test(values.phoneNum)) {
            errors.phoneNum = "Invalid phone number";
          }
          if (!values.password || values.password.trim() === "") {
            errors.password = "Password Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
          }
          if (!values.conformPassword || values.conformPassword.trim() === "") {
            errors.conformPassword = "Required";
          } else if (values.conformPassword !== values.password) {
            errors.conformPassword = "Passwords do not match";
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
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group>

              <Form.Control
                type="text"
                name="fname"
                placeholder="Input Your First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fname}
                isInvalid={touched.fname && errors.fname}
              />
              <Form.Control.Feedback type="invalid">{errors.fname}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Control
                type="text"
                name="lname"
                placeholder="Input Your Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lname}
                isInvalid={touched.lname && errors.lname}
              />
              <Form.Control.Feedback type="invalid">{errors.lname}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Input Your Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Control
                type="text"
                name="phoneNum"
                placeholder="Input Your Phone Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNum}
                isInvalid={touched.phoneNum && errors.phoneNum}
              />
              <Form.Control.Feedback type="invalid">{errors.phoneNum}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="Create Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                isInvalid={touched.password && errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Control
                type="password"
                name="conformPassword"
                placeholder="Confirm Your Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.conformPassword}
                isInvalid={touched.conformPassword && errors.conformPassword}
              />
              <Form.Control.Feedback type="invalid">{errors.conformPassword}</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="w-100 mt-4" variant="primary" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  </Container>
);

export default ProfilePage;
