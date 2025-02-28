import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";

const BusinessInfoForm = ({ prevStep, nextStep, businessInfoData, setBusinessInfoData}) => {
  
  return (
    <Formik
      initialValues={businessInfoData}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
        console.log(values,values.waiverFile.name);
        setBusinessInfoData(values);
          
          nextStep();
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <FormikForm className="container mt-4 p-4">
            <h3 className="text-center" style={{color:"#a6a4a2"}}>Step 2</h3>
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
                >
                  <option value="">Select Type of Your Brand</option>
                  <option value="Local">Local</option>
                  <option value="National">National</option>
                </Form.Select>
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
                />
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
                />
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
                />
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
                />
              </Form.Group>
            </Col>
          </Row>

          {/* File Uploads Section */}
          <h5 className="mt-4">Documents Upload</h5>
          <p className="text-muted">Once the following documents are signed, you'll be ready to get started.</p>

          {/* Agreement File Upload */}
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
            {values.agreementFile && <small className="text-success">Uploaded: {values.agreementFile.name}</small>}
          </Form.Group>

          {/* Waiver File Upload */}
          <Form.Group className="mb-3">
            
            <InputGroup>
              <input
                type="file"
                accept=".doc,.docx,.pdf"
                className="form-control"
                onChange={(event) => setFieldValue("waiverFile", event.currentTarget.files[0])}
              />
            </InputGroup>
            {values.waiverFile && <small className="text-success">Uploaded: {values.waiverFile.name}</small>}
          </Form.Group>

          {/* COI PDF Upload */}
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
            {values.coiFile && <small className="text-success">Uploaded: {values.coiFile.name}</small>}
          </Form.Group>

          {/* Navigation Buttons */}
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
