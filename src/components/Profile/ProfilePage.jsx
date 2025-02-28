import React, { useState } from "react";
import { Formik } from "formik";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = ({nextStep,profileData,setProfileData}) => {

  return (
    <Container className="d-flex justify-content-center align-items-center vh-50">
      <Card className="shadow-lg p-4 w-100" style={{ borderRadius: "15px", background: "#fff" }}>
        <h3 className="text-center mb-4">Your Profile</h3>
        <Formik
          initialValues={profileData}
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
            if (!values.confirmPassword || values.confirmPassword.trim() === "") {
              errors.confirmPassword = "Required";
            } else if (values.confirmPassword !== values.password) {
              errors.confirmPassword = "Passwords do not match";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values)
              setProfileData(JSON.stringify(values))
              // alert(JSON.stringify(values, null, 2));
              nextStep()
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fname"
                      placeholder="Enter Your First Name"
                      onChange={handleChange}
                      onBlur={(e) => {
                        handleBlur(e);
                        setProfileData((prev) => ({ ...prev, fname: e.target.value }));
                      }}
                      value={values.fname}
                      isInvalid={touched.fname && errors.fname}
                    />
                    <Form.Control.Feedback type="invalid">{errors.fname}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lname"
                      placeholder="Enter Your Last Name"
                      onChange={handleChange}
                      onBlur={(e) => {
                        handleBlur(e);
                        setProfileData((prev) => ({ ...prev, lname: e.target.value }));
                      }}
                      value={values.lname}
                      isInvalid={touched.lname && errors.lname}
                    />
                    <Form.Control.Feedback type="invalid">{errors.lname}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      onChange={handleChange}
                      onBlur={(e) => {
                        handleBlur(e);
                        setProfileData((prev) => ({ ...prev, email: e.target.value }));
                      }}
                      value={values.email}
                      isInvalid={touched.email && errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phoneNum"
                      placeholder="Enter Your Phone Number"
                      onChange={handleChange}
                      onBlur={(e) => {
                        handleBlur(e);
                        setProfileData((prev) => ({ ...prev, phoneNum: e.target.value }));
                      }}
                      value={values.phoneNum}
                      isInvalid={touched.phoneNum && errors.phoneNum}
                    />
                    <Form.Control.Feedback type="invalid">{errors.phoneNum}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Create Password"
                      onChange={handleChange}
                      onBlur={(e) => {
                        handleBlur(e);
                        setProfileData((prev) => ({ ...prev, password: e.target.value }));
                      }}
                      value={values.password}
                      isInvalid={touched.password && errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Your Password"
                      onChange={handleChange}
                      onBlur={(e) => {
                        handleBlur(e);
                        setProfileData((prev) => ({ ...prev, confirmPassword: e.target.value }));
                      }}
                      value={values.confirmPassword}
                      isInvalid={touched.confirmPassword && errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Button type="submit" className="w-100 mt-4" variant="primary" disabled={isSubmitting}>
                 Next
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default ProfilePage;
