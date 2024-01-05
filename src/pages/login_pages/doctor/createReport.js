import axios from "axios";
import React, { useState } from "react";

function Report() {
  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    age: "",
    gender: "",
    mobileNumber: "",
    files: null, // Changed to null for file
  });

  const handleChange = (e) => {
    if (e.target.name === "files") {
      // Update file data
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0], // Set file to the selected file object
      });
    } else {
      // Update other form fields
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  async function submit(e) {
    e.preventDefault();
  
    try {
  
      const res = await axios.post("http://localhost:5000/doctor/report", formData);
  
      console.log("Response:", res.data); // Log the response received from the server
  
      if (res.data === "created") {
        alert("Data saved");
      } else {
        alert("Not saved");
      }
    } catch (error) {
      alert("Error submitting report: " + error.message); // Log the specific error message
      console.error("Error:", error);
    }
  }
  

    return(
        <div>
            <div className="col-md-12" style={{backgroundColor: "rgba(131, 220, 255, 0.29)", height:"680px"}}>
                <div className="row g-3">
                    <div className="col-md-3 "></div>
                    <div className="col-md-6 rounded-3 mt-5" style={{backgroundColor: 'floralwhite', height: '500px'}}>
                        <form action="POST" onSubmit={submit}>
                            <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <label className="mt-3 colo">Patient Name</label>
                                <input type="text" className="form-control border-0 mt-1" name="patient" value={formData.patient} onChange={handleChange} placeholder="Your Firstname" style={{height: '65px'}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label className="mt-3 colo">Doctor Name</label>
                                <input type="text" className="form-control border-0 mt-1" name="doctor" value={formData.doctor} onChange={handleChange} placeholder="Your Firstname" style={{height: '65px'}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label className="colo">Age</label>
                                <input type="number" className="form-control border-0 mt-1" name="age" value={formData.age} onChange={handleChange} placeholder="Enter ID" style={{height: '65px'}}/>
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="colo">Gender</label>
                                <select className="form-select border-0 mt-1" name="gender" value={formData.gender} onChange={handleChange} style={{height: '65px'}}>
                                <option>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="prefer not say">Prefer Not to Say</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label className="colo">Mobile Number</label>
                                <input type="number" className="form-control border-0 mt-1" name="mobileNumber" autoComplete="off" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter Mobile Number" style={{height: '65px'}}/>
                            </div>
                            <div>
                                <label className="colo">Reports</label>
                                <input type="file" className="form-control border-0 mt-1" name="files" placeholder="Upload Files" onChange={handleChange}/>
                            </div>
                            <div className="col-md-12">
                            <button className="btn btn-success" type="submit">Submit</button>
                            </div>
                            </div>
                        </form>
                    </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Report;