import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressNav from "./ProgressNav";

import ProfilePage from "../Profile/ProfilePage";
import BusinessInfoPage from "../BusinessInfo/BusinessInfo";


const WrapperParent = () => {
  const [step, setStep] = useState(1);
  const [profileData,setProfileData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNum: "",
  })

  const [businessInfoData,setBusinessInfoData] = useState({
          brandName: "",
          brandType: "",
          streetAddress: "",
          city: "",
          zipCode: "",
          taxId: "",
          agreementFile: null,
          waiverFile: null,
          coiFile: null,
        })

  useEffect(()=>{
    console.log(profileData)

  },[profileData])

  const nextStep = () => {
        
        setStep((prev) => Math.min(prev + 1, 3))
    }
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Container className="m-4 d-flex justify-content-center align-items-center min-vh-100 w-100" style={{ background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)" }}>
      <Card className=" p-4 w-75 " style={{ height:"88%" ,borderRadius: "15px", background: "#fff",margin:"4rem 0" }}>
        <ProgressNav step={step} />
        {step === 1 && <ProfilePage nextStep={nextStep} profileData={profileData} setProfileData={setProfileData}/>}
        {step === 2 && <BusinessInfoPage prevStep={prevStep} nextStep={nextStep} step={step} businessInfoData={businessInfoData} setBusinessInfoData={setBusinessInfoData}/>}
        {step === 3 &&  <Button variant="link" onClick={prevStep}>← Back to Login</Button>        }
        <div className="d-flex justify-content-between mt-4">
          
         
        </div>
           <div className="d-flex justify-content-between mt-4">
                    <Button variant="link">← Back to Login</Button>        
            </div>
      </Card>
    </Container>
  );
};

export default WrapperParent;
