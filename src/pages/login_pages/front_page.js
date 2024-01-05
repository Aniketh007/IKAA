import React from "react";
import SideBar from "./sideBar";
import { useNavigate,useLocation } from "react-router-dom";

function Front() {

  const location = useLocation();
  const user = { userType: location.state.userType };
  const dispatch = () => { };
  const history=useNavigate();

  const boxStyle = {
    width: '20%',
    padding: '20px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    /* Additional styles for the boxes */
  };


  return (
    <div className="container-fluid" style={{ backgroundColor: "rgba(131, 220, 255, 0.29)" }}>
      <div className="row">
        <SideBar user={user} dispatch={dispatch} history={history} />
        <div className="container px-5 col-10">
          <div className="AfterSideBar">
            <h1 style={{ color: "rgb(184 191 234)" }}>Overview</h1>
          </div>
          <div className="maindiv" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="box" style={boxStyle}>
              <div className="one commondiv">
                <div>
                  <h1>136</h1>
                  <p>doctor</p>
                </div>
              </div>
            </div>
            <div className="box" style={boxStyle}>
              <div className="two commondiv">
                <div>
                  <h1>47</h1>
                  <p>nurse</p>
                </div>
              </div>
            </div>
            <div className="box" style={boxStyle}>
              <div className="three commondiv">
                <div>
                  <h1>263</h1>
                  <p>patient</p>
                </div>
              </div>
            </div>
            <div className="box" style={boxStyle}>
              <div className="six commondiv">
                <div>
                  <h1>7</h1>
                  <p>admin</p>
                </div>
              </div>
            </div>
            <div className="box" style={boxStyle}>
              <div className="four commondiv">
                <div>
                  <h1>121</h1>
                  <p>bed</p>
                </div>
              </div>
            </div>
            <div className="box" style={boxStyle}>
              <div className="five commondiv">
                <div>
                  <h1>92</h1>
                  <p>ambulance</p>
                </div>
              </div>
            </div>
            <div className="box" style={boxStyle}>
              <div className="six commondiv">
                <div>
                  <h1>0</h1>
                  <p>appointment</p>

                </div>
              </div>
            </div>
            <div className="box" style={boxStyle}>
              <div className="six commondiv">
                <div>
                  <h1>110</h1>
                  <p>report</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
