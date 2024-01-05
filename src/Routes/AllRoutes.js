import React from 'react';
import FrontPage from '../pages/frontPage';
import Experts from '../pages/experts'; // Update the path if needed
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/contact';
import Cancer from '../pages/services/cancer';
import Cardiology from '../pages/services/cardiology';
import Orthopedic from '../pages/services/orthopadics';
import NeuroSurgery from '../pages/services/neuroSurgery';
import LungTransplant from '../pages/services/lung_transplant';
import KidneyTransplant from '../pages/services/kideny_transplant';
import Login from '../pages/Login';
import PsignIn from '../pages/signup/patient_signup';
import DoctorPage from '../pages/login_pages/doctor_page';
import DsignIn from '../pages/signup/doctor_signup';
import Front from '../pages/login_pages/front_page';
import SideBar from '../pages/login_pages/sideBar';
import AddAdmin from '../pages/login_pages/admin/add_admin';
import BookAppointment from '../pages/login_pages/patient/patient_page';
import User from '../pages/profile';
import Testimonials from '../pages/home/testimonials';
import UserProfile from '../pages/pprofile';
import Payment from '../pages/payment';
import Report from '../pages/login_pages/doctor/createReport';
import DProfile from '../pages/pprofile';

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/experts" element={<Experts />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cancer" element={<Cancer/>} />
                <Route path="/cardiology" element={<Cardiology/>} />
                <Route path="/orthopedic" element={<Orthopedic/>} />
                <Route path="/neurosurgery" element={<NeuroSurgery/>} />
                <Route path="/lung" element={<LungTransplant/>} />
                <Route path="/kidney" element={<KidneyTransplant/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/testimonials" element={<Testimonials/>}/>
                <Route path="/createReport" element={<Report/>}/>
                {/* ****************Doctor******************* */}
                <Route path="/dsignin" element={<DsignIn/>}/>
                <Route path="/doctor" element={<DoctorPage/>}/>
                <Route path="/doctor/doctorProfile" element={<DProfile/>}/>
                {/* ****************Admin******************** */}
                <Route path="/dashboard" element={<Front/>}/>
                <Route path="/sideBar" element={<SideBar/>}/>
                <Route path="/addAdmin" element={<AddAdmin/>}/>
                {/* ****************Patient****************** */}
                <Route path="/userProfile" element={<UserProfile/>}/>
                <Route path="/psignin" element={<PsignIn/>}/>
                <Route path="/bookAppointment" element={<BookAppointment/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/profile" element={<User/>}/>
            </Routes>
        </>
    );
};

export default AllRoutes;
