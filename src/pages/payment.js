import React, { useState, useEffect } from "react";
import axios from "axios";

const AppointmentPayment = ({ appointmentDetails }) => {
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    try {
      const response = await axios.post("/create-appointment-payment", {
        appointmentDetails,
      });

      if (response.data && response.data.paymentSuccessful) {
        setMessage("Appointment payment successful!");
        // Add logic here to proceed after successful payment
      } else {
        setMessage("Appointment payment failed.");
      }
    } catch (error) {
      setMessage("Error processing appointment payment.");
    }
  };

  return (
    <div>
      <h2>Appointment Payment</h2>
      <button onClick={handlePayment}>Pay Appointment Fee</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AppointmentPayment;
