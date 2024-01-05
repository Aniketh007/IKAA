import React from "react";
import { useLocation } from "react-router-dom";

const DoctorPage = () => {
    const location = useLocation();

    return(
        <div>
            <h1>Hello Welcome</h1>
        </div>
    )
}

export default DoctorPage;
