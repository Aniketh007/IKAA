import React from "react";
import { Link } from "react-router-dom";

function SideBar({user, dispatch }){
  let backgroundColor = "#000"; // Default color for the sidebar

  switch (user?.userType) {
    case "patient":
      backgroundColor = "#4169E1"; // Change to yellow for patients
      break;
    case "admin":
      backgroundColor = "#0818A8"; // Change to blue for admins
      break;
    case "doctor":
      backgroundColor = "#1F51FF"; // Change to green for doctors
      break;
    default:
      break;
  }
    return (
        <>
          <div className="col-2 p-2" style={{ backgroundColor: backgroundColor, fontSize:"24px", height:"100vh" }}>
              <div className="top_section">
                <h1 className="logo p-3" style={{color: "white"}}>
                  IKAA
                </h1>
              </div>
              <div className="bottomSection">
                <Link className="link" activeclassname="active" to={"/dashboard"}>
                  <div className="icon p-3" style={{color: "white"}}>
                    DashBoard
                  </div>
                </Link>
    
                {user?.userType === "patient" ? (
                  <Link
                    className="link"
                    activeclassname="active"
                    to={{
                      pathname: "/profile",
                      state: { userType: user.userType },
                    }}
                  >
                    <div className="p-3" style={{color: "white"}}>
                      Profile
                    </div>
                  </Link>
                ) : null}
    
                {user?.userType === "patient" ? (
                  <Link
                    className="link"
                    activeclassname="active"
                    to={"/bookAppointment"}
                  >
                    <div className="p-3" style={{color: "white"}}>
                      Book Appointment
                    </div>
                  </Link>
                ) : null}
                {user?.userType === "admin" ? (
                  <Link className="link" activeclassname="active" to={"/dsignin"}>
                    <div className="p-3" style={{color: "white"}}>
                      Add Doctor
                    </div>
                  </Link>
                ) : null}
                {user?.userType === "admin" ? (
                  <Link className="link" activeclassname="active" to={"/addAdmin"}>
                    <div className="p-3" style={{color: "white"}}>
                      Add Admin
                    </div>
                  </Link>
                ) : null}
    
                {user?.userType === "doctor" ? (
                  <Link
                    className="link"
                    activeclassname="active"
                    to={{
                      pathname: "/doctor/doctorProfile",
                      state: { userType: user.userType },
                    }}
                  >
                    <div className="p-3" style={{color: "white"}}>
                      Profile
                    </div>
                  </Link>
                ) : null}
                {user?.userType === "doctor" ? (
                  <Link
                    className="link"
                    activeclassname="active"
                    to={"/checkappointment"}
                  >
                    <div className="p-3" style={{color: "white"}}>
                      Appointments
                    </div>
                  </Link>
                ) : null}
                {user?.userType === "doctor" ? (
                  <Link
                    className="link"
                    activeclassname="active"
                    to={"/createReport"}
                  >
                    <div className="p-3" style={{color: "white"}}>
                      Create Report
                    </div>
                  </Link>
                ) : null}
                
    
                <Link
                  className="LogOutPath link"
                  onClick={() => {
                    dispatch({ type: "AUTH_LOGOUT" });
                  }}
                  to={"/"}
                >
                  <div className="p-3" style={{color: "white"}}>
                    Logout
                  </div>
                </Link>
              </div>
            </div>
        </>
      );
    };
    
export default SideBar;