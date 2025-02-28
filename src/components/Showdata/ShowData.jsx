import { useEffect } from "react";

const ShowData = ({allData,setAllData,setStep})=>{

    const handleClear = ()=>{
        localStorage.removeItem('profile-info')
        setAllData({})  
        setStep(1)

    }
   
    return(
        <div>
            {allData && allData.fname ?<><h2>User Data</h2>
            <p>First Name: {allData.fname}</p>
            <p>Last Name: {allData.lname}</p>
            <p>Email-Id: {allData.email}</p>
            <p>Password: {allData.password}</p>
            <p>Phone-no:{allData.phoneNum}</p>
            <p>Brand Name: {allData.brandName}</p>
            <p>Brand Type: {allData.brandType}</p>
            <p>Street Address: {allData.streetAddress}</p>
            <p>City: {allData.city}</p>
            <p>Zip Code: {allData.zipCode}</p>
            <p>Tax-Id Number{allData.taxId}</p>
            <button className="btn btn-danger" onClick={handleClear}>Clear</button>
            </>:<p>Loading ...</p>}
        </div>
    )

}
export default ShowData;