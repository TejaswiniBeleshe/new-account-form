import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressNav from "./ProgressNav";
import "./BusinessInfo.css"
import ProfilePage from "../Profile/ProfilePage";


const BusinessInfo = () => {
  const [step, setStep] = useState(1);
  const [profileData,setProfileData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNum: "",
  })

  useEffect(()=>{
    console.log(profileData)

  },[profileData])

  const nextStep = () => {
        
        setStep((prev) => Math.min(prev + 1, 3))
    }
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Container className="m-4 d-flex justify-content-center align-items-center vh-50" style={{ background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)" }}>
      <Card className="shadow-lg p-4 w-75" style={{ borderRadius: "15px", background: "#fff" }}>
        <ProgressNav step={step} />
        {/* {step === 1 && <ProfilePage nextStep={nextStep} profileData={profileData} setProfileData={setProfileData}/>} */}
        {step === 2 && <p>2</p>}
        {step === 3 && <p>3</p>}
        <div className="d-flex justify-content-between mt-4">
          <Button variant="link" className="text-decoration-none" onClick={prevStep} disabled={step === 1}>
            Previous
          </Button>
          <Button variant="primary" className="px-4" onClick={nextStep} disabled={step === 3}>
            Next Step &gt;
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default BusinessInfo;
