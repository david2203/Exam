import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";

import WorkdayData from "../API/WorkdayData";
import Register from "../UserHandling/Register";


function Approute() {
    return (
        <Router>
            <Routes>
                <Route path="/test" element={<WorkdayData/>} />

                <Route path="/Register" element={<Register/>} />

               


            </Routes>
        </Router>
    )
}

export default Approute
