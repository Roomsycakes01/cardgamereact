import React from "react";
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import LandingPage from "../Components/LandingPage";
import App from "../App";

export default function ProjectRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/game" element={<App />} />
            </Routes>
        </Router>
    );
}


