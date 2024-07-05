import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import LandingPage from "./pages/Home/LandingPage";
import { DashboardAdmin } from "./pages/Dashboard/DashboardAdmin";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import AOS from "aos";
import 'aos/dist/aos.css';
import { NotFound } from "./pages/404/NotFoundPage";

export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<LandingPage />} />
                    <Route path="/admin" element={<DashboardAdmin />} />
                    <Route path="/admin_signin" element={<LoginPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}
