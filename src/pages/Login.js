import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){
    const [selectedRole, setSelectedRole] = useState("");
    const [doctorLogin, setDoctorLogin] = useState(false);
    const [patientLogin, setPatientLogin] = useState(false);
    const [adminLogin, setAdminLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const history = useNavigate();
    
    const handleRoleSelection = (role) => {
        setSelectedRole(role);
        setDoctorLogin(false);
        setAdminLogin(false);
        setPatientLogin(false);
        // Perform actions based on the selected role (e.g., redirect to a specific page or display role-specific content)
        switch (role) {
        case 'doctor':
            // Logic for doctor login
            setDoctorLogin(true);
            break;
        case 'admin':
            // Logic for admin login
            setAdminLogin(true);
            break;
        case 'patient':
            // Logic for patient login
            setPatientLogin(true);
            break;
        default:
            break;
        }
    };

    async function handlePatientLogin(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:5000/patient/login",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/dashboard",{ state: { userType: 'patient' } })
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                    history("/psignin");
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    };

    async function handleDoctorLogin(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:5000/doctor/login",{
                email,password,id
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/dashboard",{ state: { userType: 'doctor' } })
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up - contact Admin")
                    history("/");
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    };

    async function handleAdminLogin(e){
        e.preventDefault();

        try{

            const res=await axios.post("http://localhost:5000/admin/login",{
                email,password,id
            });
            if(res.data==="exist"){
                history("/dashboard",{ state: { userType: 'admin' } })
            }
            else{
                alert("User have not sign up - contact Admin")
            }
        }
        catch(e){
            console.log(e);

        }

    };

    return(
        <div className="container-fluid">
            <div className="row">
                <div 
                    className="col-lg-8"
                    style={{
                        height: "100vh",
                        backgroundImage: `url(Images/banner.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                          }}
                ></div>
                <div className="col-lg-4 p-3" style={{ textAlign: 'center', backgroundColor: 'orange'}}>
                    <h2>Login</h2>
                    <p>Please select your designation:</p>
                    <div>
                        <button onClick={() => handleRoleSelection('doctor')}>Doctor</button>
                        <button className= "mx-1" onClick={() => handleRoleSelection('admin')}>Admin</button>
                        <button onClick={() => handleRoleSelection('patient')}>Patient</button>
                    </div>
                    {selectedRole && <p>Selected Role: {selectedRole}</p>}
                    {/* You can display role-specific content or perform actions based on the selected role */}
                    {doctorLogin &&(
                        <div className="container mt-5 d-flex align-items-center justify-content-center" style={{width:'500px', height:'300px'}}>
                             <div className="mt-4 wow fadeIn ">
                                <form className="mx-auto mt-5">
                                    <div className="form-group">
                                        <label className="mb-1" style={{color: 'black'}}>Email</label>
                                        <input type="text" class="form-control border-0 text-center " onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" style={{height: '65px', width:'300px'}}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1" style={{color: 'black'}}>Doctor-ID</label>
                                        <input type="text" class="form-control border-0 text-center " onChange={(e)=>{setId(e.target.value)}} placeholder="ID" style={{height: '65px', width:'300px'}}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1" style={{color: 'black'}}>Password</label>
                                        <input type="password " class="form-control text-center border-0 mb-3" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" style={{height: '65px', width:'300px'}}/>
                                    </div>
                                    <p style={{ color: 'black' }}>Don't Have An Account? <Link to="/dsignin">SignIn</Link></p>
                                </form>
                                <button className="btn btn-success" onClick={(handleDoctorLogin)}>Login</button>
                                <p style={{color: 'black'}}>Forgot Password? <a href="SignIn.html">Forgot</a></p>
                            </div>
                        </div>
                    )}

                    {adminLogin&&(
                        <div className="container mt-4 d-flex align-items-center justify-content-center" style={{width:'500px', height:'300px'}}>
                            <div className="mt-5 wow fadeIn ">
                            <form className="mx-auto mt-5">
                                <div className="form-group">
                                    <label className="mb-1" style={{color: 'black'}}>Email</label>
                                    <input type="text" class="form-control border-0 text-center " onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" style={{height: '65px', width:'300px'}}/>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1" style={{color: 'black'}}>Admin ID</label>
                                    <input type="text" class="form-control border-0 text-center " onChange={(e)=>{setId(e.target.value)}} placeholder="ID" style={{height: '65px', width:'300px'}}/>
                                </div>
                                <div className="form-group">
                                    <label className="mt-3 mb-1" style={{color: 'black'}}>Password</label>
                                    <input type="password " class="form-control text-center border-0 mb-3" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" style={{height: '65px', width:'300px'}}/>
                                </div>
                            </form>
                            <button className="btn btn-success" onClick={(handleAdminLogin)}>Login</button>
                            <p style={{color: 'black'}}>Forgot Password? <a href="SignIn.html">Forgot</a></p>
                        </div>
                   </div>
                    )}

                    {patientLogin && (
                        <div className="container mt-2 d-flex align-items-center justify-content-center" style={{ width: '500px', height: '300px' }}>
                        <div className="mt-3 wow fadeIn ">
                            <form action="POST"className="mx-auto mt-5">
                            <div className="form-group">
                                <label className="mb-1" style={{ color: 'black' }}>Email</label>
                                <input type="text" className="form-control border-0 text-center " onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" style={{ height: '65px', width: '300px' }} />
                            </div>
                            <div className="form-group">
                                <label className="mt-3 mb-1" style={{ color: 'black' }}>Password</label>
                                <input type="password " className="form-control text-center border-0 mb-3" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" style={{ height: '65px', width: '300px' }} />
                            </div>
                            <p style={{ color: 'black' }}>Don't Have An Account? <Link to="/psignin">SignIn</Link></p>
                            </form>
                            <button className="btn btn-success mb-1" onClick={handlePatientLogin} type="submit">Login</button>
                            <p style={{ color: 'black' }}>Forgot Password? <a href="SignIn.html">Forgot</a></p>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login;