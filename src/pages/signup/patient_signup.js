import axios from "axios";
import React,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";

function PsignIn(){
    const history=useNavigate();
    const [formData, setFormData] = useState({
        firstname: "",
        surname: "",
        username: "",
        gender: "",
        problemDiagnosed: "",
        mobileNumber: "",
        country: "",
        email: "",
        password: "",
        confirmPassword:"",
      });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    async function submit(e){
      e.preventDefault();
    
      try {
        const response = await axios.post("http://localhost:5000/patient/signup", formData);
    
        if (response.data === "exist") {
          alert("exists");
          console.log(response);
          history("/login");
        } else if (formData.password !== formData.confirmPassword) {
          alert("Confirm Password and Password are not the same");
          console.log(response);
        } else {
          alert("entered");
          console.log(response);
          history("/login");
        }
      } catch (error) {
        alert("Error signing up");
        console.error("Error:", error);
      }
    }
    
      
      

    return(
    <div>
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: `url(Images/signIn.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Form container positioned over the image */}
      <div
        className="container-fluid mt-2"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        >
            <div className="col-md-12">
                <div className="row g-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 rounded-3" style={{backgroundColor: 'floralwhite', height: '650px'}}>
                        <form action="POST" onSubmit={submit}>
                            <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <label className="mt-3 colo">Firstname</label>
                                <input type="text" className="form-control border-0 mt-1" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Your Firstname" style={{height: '65px'}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label className="mt-3 colo">Surname</label>
                                <input type="text" className="form-control border-0 mt-1"  name="surname" value={formData.surname} onChange={handleChange} placeholder="Your Surname" style={{height: '65px'}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label className="colo">Username</label>
                                <input type="text" className="form-control border-0 mt-1" name="username" value={formData.username} onChange={handleChange} placeholder="Your Username" style={{height: '65px'}}/>
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
                                <label className="colo">Problem Diagnosed</label>
                                <select className="form-select border-0 mt-1" name="problemDiagnosed" value={formData.problemDiagnosed} onChange={handleChange} style={{height: '65px'}}>
                                <option >Select Problem</option>
                                <option value="heart problem">Heart Problem</option>
                                <option value="kidney transplant">Kidney Transplant</option>
                                <option value="lung transplant">Lung Transplant</option>
                                <option value="councelling">Councelling</option>
                                <option value="cancer">Cancer</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label className="colo">Mobile Number</label>
                                <input type="number" className="form-control border-0 mt-1" name="mobileNumber" autoComplete="off" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter Mobile Number" style={{height: '65px'}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label className="colo">Country</label>
                                <select className="form-select border-0 mt-1" name="country" value={formData.country} onChange={handleChange} style={{height: '65px'}}>
                                <option >Select Country</option>
                                <option value="USA">USA</option>
                                <option value="Russia">Russia</option>
                                <option value="India">India</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Ghana">Ghana</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label className="colo">Email</label>
                                <input type="email" className="form-control border-0 mt-1" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" style={{height: '65px'}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label className="colo">Password</label>
                                <input type="password" className="form-control border-0 mt-1" name="password" value={formData.password} onChange={handleChange} placeholder="Your Password" style={{height: '65px'}}/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <label className="colo">Confirm Password</label>
                                <input type="password" className="form-control border-0 mt-1" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" style={{height: '65px'}}/>
                            </div>
                            <div className="col-md-12">
                            <button className="btn btn-success" type="submit" onClick={submit}>SignIn</button>
                            </div>
                            </div>
                        </form>
                        <p className="mt-1">Already Have an Account? <Link to="/login">LogIn</Link> </p>
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PsignIn;