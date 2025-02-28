import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";

const BusinessInfoForm = ({ prevStep, nextStep, businessInfoData, setBusinessInfoData }) => {
  return (
    <Formik
      initialValues={businessInfoData}
      validate={(values) => {
        const errors = {};

        // Brand Name Validation
        if (!values.brandName) {
          errors.brandName = "Brand Name is required.";
        }

        // Brand Type Validation
        if (!values.brandType) {
          errors.brandType = "Brand Type is required.";
        }

        // Street Address Validation
        if (!values.streetAddress) {
          errors.streetAddress = "Street Address is required.";
        }

        // City Validation
        if (!values.city) {
          errors.city = "City is required.";
        }

        // Zip Code Validation (must be 5 digits)
        if (!values.zipCode) {
          errors.zipCode = "Zip Code is required.";
        } else if (!/^\d{5}$/.test(values.zipCode)) {
          errors.zipCode = "Zip Code must be 5 digits.";
        }

        // Tax ID Validation (must be at least 9 digits)
        if (!values.taxId) {
          errors.taxId = "Tax ID is required.";
        } else if (!/^\d{9,}$/.test(values.taxId)) {
          errors.taxId = "Tax ID must be at least 9 digits.";
        }

        // Agreement File Validation
        if (!values.agreementFile) {
          errors.agreementFile = "Agreement document is required.";
        }

        // Waiver File Validation
        if (!values.waiverFile) {
          errors.waiverFile = "Waiver document is required.";
        }

        // COI File Validation
        if (!values.coiFile) {
          errors.coiFile = "COI PDF is required.";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setBusinessInfoData(values);
          nextStep();
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <FormikForm className="container mt-4 p-4">
          <h3 className="text-center" style={{ color: "#a6a4a2" }}>Step 2</h3>
          <h3 className="text-center mb-4">Business Information</h3>
          <p className="text-center text-muted">Please enter information about your company.</p>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Brand Name*</Form.Label>
                <Form.Control
                  type="text"
                  name="brandName"
                  placeholder="Input Your Brand Name"
                  value={values.brandName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.brandName && errors.brandName}
                />
                <Form.Control.Feedback type="invalid">{errors.brandName}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Brand Type*</Form.Label>
                <Form.Select
                  name="brandType"
                  value={values.brandType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.brandType && errors.brandType}
                >
                  <option value="">Select Type of Your Brand</option>
                  <option value="Local">Local</option>
                  <option value="National">National</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors.brandType}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Street Address*</Form.Label>
                <Form.Control
                  name="streetAddress"
                  placeholder="Input Your Street Address"
                  value={values.streetAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.streetAddress && errors.streetAddress}
                />
                <Form.Control.Feedback type="invalid">{errors.streetAddress}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>City*</Form.Label>
                <Form.Control
                  name="city"
                  placeholder="Input City"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.city && errors.city}
                />
                <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Zip Code*</Form.Label>
                <Form.Control
                  name="zipCode"
                  placeholder="Input Zip Code"
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.zipCode && errors.zipCode}
                />
                <Form.Control.Feedback type="invalid">{errors.zipCode}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Tax ID Number*</Form.Label>
                <Form.Control
                  name="taxId"
                  placeholder="Input Tax ID Number"
                  value={values.taxId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.taxId && errors.taxId}
                />
                <Form.Control.Feedback type="invalid">{errors.taxId}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          {/* File Uploads Section */}
          <h5 className="mt-4">Documents Upload</h5>
          <p className="text-muted">Once the following documents are signed, you'll be ready to get started.</p>

          <Form.Group className="mb-3">
            <Form.Label>Agreement Document*</Form.Label>
            <InputGroup>
              <input
                type="file"
                accept=".doc,.docx,.pdf"
                className="form-control"
                onChange={(event) => setFieldValue("agreementFile", event.currentTarget.files[0])}
              />
            </InputGroup>
            {errors.agreementFile && <div className="text-danger">{errors.agreementFile}</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Waiver Document*</Form.Label>
            <InputGroup>
              <input
                type="file"
                accept=".doc,.docx,.pdf"
                className="form-control"
                onChange={(event) => setFieldValue("waiverFile", event.currentTarget.files[0])}
              />
            </InputGroup>
            {errors.waiverFile && <div className="text-danger">{errors.waiverFile}</div>}
          </Form.Group>

          <h5 className="mt-4">COI PDF Upload</h5>
          <p className="text-muted">Upload your COI (Certificate of Insurance) PDF.</p>
          <Form.Group className="mb-3">
            <InputGroup>
              <input
                type="file"
                accept=".pdf"
                className="form-control"
                onChange={(event) => setFieldValue("coiFile", event.currentTarget.files[0])}
              />
            </InputGroup>
            {errors.coiFile && <div className="text-danger">{errors.coiFile}</div>}
          </Form.Group>

          <div className="d-flex justify-content-end mt-4">
            <Button variant="link" className="text-decoration-none" onClick={prevStep}>
              Previous
            </Button>
            <Button type="submit" variant="primary">
              Next Step
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};

export default BusinessInfoForm;
