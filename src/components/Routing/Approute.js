import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import Nav from "../Body_comps/Nav"
import WorkdayData from "../API/WorkdayData";
import Landingpage from "../Pages/Landingpage";
import Login from "../UserHandling/Login";
import Register from "../UserHandling/Register";
import Footer from "../Body_comps/Footer";
import Logout from "../UserHandling/Logout";
import Testapi from "../API/Testapi";

function Approute() {
    return (
        <>
        
        <Router>
            <Nav/>
            <Routes>
            
                <Route path="/test" element={<WorkdayData/>} />

                <Route path="/Register" element={<Register/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Landingpage" element={<Landingpage/>} />
                <Route path="/Logout" element={<Logout/>} />
                <Route path="/testing" element={<Testapi/>} />





               


            </Routes>
            <Footer/>
        </Router>
        </>
    )
}

export default Approute
