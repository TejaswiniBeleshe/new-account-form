import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressNav from "./ProgressNav";

import ProfilePage from "../Profile/ProfilePage";
import BusinessInfoPage from "../BusinessInfo/BusinessInfo";
import ShowData from "../Showdata/ShowData";


const WrapperParent = () => {
  const [step, setStep] = useState(1);
  const [temp,setTemp] = useState('')
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
  
 const [allData,setAllData] = useState({})
 useEffect(()=>{
  let data = JSON.parse(localStorage.getItem("profile-info"))
  console.log(data)
  if(data && data.fname){
    setAllData(data)
    setStep(3)
    setTemp('local')
  }else{
    setAllData({})
  }
},[])

  useEffect(()=>{
    if(step === 3 && temp!== 'local'){
      localStorage.setItem("profile-info",JSON.stringify({...profileData, ...businessInfoData,}))
      setAllData({...profileData, ...businessInfoData})
    }
  },[step])

  

  const nextStep = () => {
        setStep((prev) => Math.min(prev + 1, 3))
    }
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Container className="w-100 m-4 p-4 d-flex flex-column justify-content-center align-items-center min-vh-100 " style={{ background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)" }}>
      <h1 className="fs-3 fw-bold text-center" style={{color:"#fff"}}>Create Account</h1>
      {/* <span className="d-flex justify-content-end align-items-end w-10"> */}
        
        
      {/* </div> */}
      <Card className=" p-4 w-75 " style={{ height:"88%" ,borderRadius: "15px", background: "#fff",margin:"4rem 0" }}>
        <ProgressNav step={step} />
        {step === 1 && <ProfilePage nextStep={nextStep} profileData={profileData} setProfileData={setProfileData}/>}
        {step === 2 && <BusinessInfoPage prevStep={prevStep} nextStep={nextStep} step={step} businessInfoData={businessInfoData} setBusinessInfoData={setBusinessInfoData}/>}
        {step === 3 && <ShowData allData={allData} setAllData={setAllData} setStep={setStep}/>}
        <div className="d-flex justify-content-between mt-4">
        </div>
           <div className="d-flex justify-content-between mt-4">
              <Button variant="link" style={{textDecoration:"none"}}>← Back to Login</Button>        
            </div>
      </Card>
    </Container>
  );
};

export default WrapperParent;
