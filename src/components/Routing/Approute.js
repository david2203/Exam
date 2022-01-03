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
import SpecificJob from "../Body_comps/SpecificJob";

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
                <Route path="/Landingpage" element={<Landingpage/>} />
                <Route path="/Jobs" element={<Jobs/>} />
                <Route path="/SpecificJob" element={<SpecificJob/>} />



            </Routes>
            <Footer/>
        </Router>
        </>
    )
}

export default Approute
