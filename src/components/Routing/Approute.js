import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from "../Body_comps/Nav"
import WorkdayData from "../API/WorkdayData";
import Landingpage from "../Pages/Landingpage";
import Login from "../UserHandling/Login";
import Register from "../UserHandling/Register";
import Footer from "../Body_comps/Footer";
import Logout from "../UserHandling/Logout";
import Jobs from "../Pages/Jobs";
import SpecificJob from "../Pages/SpecificJob";
import ForgottenPW from "../UserHandling/ForgottenPW";
import ApplyToSpecific from "../Pages/ApplyToSpecific";
import MyApplications from "../Pages/MyApplications";
import SavedJobs from "../Pages/SavedJobs";
import AboutUs from "../Pages/AboutUs";
import AboutBrand from "../Pages/AboutBrand";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsConditions from "../Pages/TermsConditions";
import WorkWithUs from "../Pages/WorkWithUs";

//Routing component for showing all prefered pages with their specified links
function Approute() {
    return (
        <>
        
        <Router>
            <Nav/>
            <Routes>
            
                <Route path="/Workday" element={<WorkdayData/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Logout" element={<Logout/>} />
                <Route path="/" element={<Landingpage/>} />
                <Route path="/Jobs" element={<Jobs/>} />
                <Route path="/SpecificJob" element={<SpecificJob/>} />
                <Route path="/ForgottenPW" element={<ForgottenPW/>} />
                <Route path="/ApplyToSpecific" element={<ApplyToSpecific/>} />
                <Route path="/MyApplications" element={<MyApplications/>} />
                <Route path="/SavedJobs" element={<SavedJobs/>} />
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/AboutBrand" element={<AboutBrand/>} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
                <Route path="/Terms" element={<TermsConditions/>} />
                <Route path="/WorkWithUs" element={<WorkWithUs/>} />












            </Routes>
            <Footer/>
        </Router>
        </>
    )
}

export default Approute
