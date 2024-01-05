import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookAppointment() {
    const history=useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        appointmentDate: "",
        paymentMethod: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/bookAppointment", formData);

            if (res.data === "success") {
                alert("Appointment booked successfully!");
                // Handle successful booking, such as redirecting to a success page
            } else {
                alert("Failed to book the appointment. Please try again.");
            }
        } catch (error) {
            alert("Appointment Booked");
            history("/");
        }
    };

    const renderPaymentFields = () => {
        const { paymentMethod } = formData;

        if (paymentMethod === "creditCard") {
            return (
                <>
                    <div className="col-12 col-sm-6">
                        <label className="p-3">Card Number:</label>
                        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label className="p-3">Expiry Date:</label>
                        <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label className="p-3">CVV:</label>
                        <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} />
                    </div>
                </>
            );
        } else if (paymentMethod === "debitCard") {
            // Render fields for debit card payment method
            return (
                <>
                    <div className="col-12 col-sm-6">
                        <label className="p-3">Card Number:</label>
                        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label className="p-3">Expiry Date:</label>
                        <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label className="p-3">CVV:</label>
                        <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} />
                    </div>
                </>
                /* Add fields for debit card details */
            );
        } else {
            return null; // No additional fields for other payment methods
        }
    };

return (
    <div style={{ backgroundColor: "rgba(131, 220, 255, 0.29)", height: "100vh", display: "flex", alignItems: "center" }}>
        <div className="container " style={{ backgroundColor: "cornSilk", fontSize: "23px", padding: "20px" }}>
            <div className="p-3">
                <h1>Book Appointment</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <label className="p-3">Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label className="p-3">Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <label className="p-3">Mobile Number: </label>
                            <input type="text" name="mobileNumber" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label className="p-3">Problem Diagnosed:</label>
                            <select name="problemDiagnosed">
                                <option selected>Choose Problem</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Cancer">Cancer</option>
                                <option value="Kidney">Kidneys</option>
                                <option value="Lungs">Lungs</option>
                                <option value="Orthopedic">Orthopedic</option>
                                <option value="Gynecology">Gynecology</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <label className="p-3">Appointment Date:</label>
                            <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label>Appointment Time:</label>
                            <div className="input-group date" id="time" data-target-input="nearest">
                                <input type="text" className="form-control datetimepicker-input" data-target="#time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} />
                                <div className="input-group-append" data-target="#time" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-clock"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <label className="p-3">Describe Problem:</label>
                            <textarea rows="3" name="Problem" placeholder="Describe Your problem"></textarea>
                        </div>
                        <div className="col-12 col-sm-6">
                            <label className="p-3">Payment Method:</label>
                            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                                <option value="">Select Payment Method</option>
                                <option value="creditCard">Credit Card</option>
                                <option value="debitCard">Debit Card</option>
                            </select>
                        </div>
                        <div className="row g-3">
                            {renderPaymentFields()} {/* Render payment-specific fields */}
                            {/* Other fields and submit button */}
                        </div>
                    </div>
                    <button type="submit">Book Appointment</button>
                </form>
            </div>
        </div>
    </div>
);
}

export default BookAppointment;