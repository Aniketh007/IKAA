import axios from "axios";
import React,{useState} from "react";
import { useNavigate} from "react-router-dom";

function AddAdmin(){
    const history=useNavigate();
    const [formData, setFormData] = useState({
        firstname: "",
        surname: "",
        username: "",
        id: "",
        gender: "",
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

    async function submit(e) {
        e.preventDefault();
      
        try {
            const res = await axios.post("http://localhost:5000/admin/signup", formData);
            if (res.data === "exist") {
              alert("Admin already exists");
            } else if (formData.password !== formData.confirmPassword) {
              alert("Confirm Password and Password are not the same");
            } else {
              alert("New admin added successfully");
              history("/admin",{ state: { userType: 'admin' } });
            }
          } catch (error) {
            alert(`Error signing up: ${error.response.data.message}`);
            console.error("Error:", error);
          }
          
      }
  
    return (
      <div style={{backgroundColor: "rgba(131, 220, 255, 0.29)", height:"100vh"}}>
          <div className="container " style={{backgroundColor: "cornSilk", padding:"20px"}}>
            <div className="p-3">
              <h1>Add Admin</h1>
              {/* <img src={admin} alt="doctor" className="avatarimg" /> */}
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
                        <label className="colo">ID</label>
                        <input type="number" className="form-control border-0 mt-1" name="id" value={formData.id} onChange={handleChange} placeholder="Enter ID" style={{height: '65px'}}/>
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
                    <button className="btn btn-success" type="submit">SignIn</button>
                    </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
    );
  };
  
  export default AddAdmin;
  