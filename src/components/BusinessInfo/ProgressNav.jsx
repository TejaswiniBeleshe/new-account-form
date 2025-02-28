import React from "react";
import { Nav } from "react-bootstrap";

const ProgressNav = ({ step }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <Nav className="w-100 d-flex justify-content-around">
        {[
          { label: "Your Profile", stepNum: 1 },
          { label: "Business Information", stepNum: 2 },
          { label: "Additional Users", stepNum: 3 },
        ].map(({ label, stepNum }) => (
          <div key={stepNum} className="text-center w-25">
            <div
              className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-2 ${
                step >= stepNum ? "bg-primary text-white" : "bg-light text-muted"
              }`}
              style={{ width: "35px", height: "35px", fontSize: "18px", fontWeight: "bold" }}
            >
              {stepNum}
            </div>
            <p className={step >= stepNum ? "text-primary fw-bold" : "text-muted"}>{label}</p>
          </div>
        ))}
      </Nav>
      
    </div>
  );
};

export default ProgressNav;
