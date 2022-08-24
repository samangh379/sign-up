import React from "react";
import "./App.css";
import LoginInfo from "./Components/LoginInfo";
import SignUpInfo from "./Components/SignUpInfo";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/signup" element={<SignUpInfo />} />
                <Route path="/login" element={<LoginInfo />} />
                <Route path="/" element={<Navigate to="/signup" />} />
            </Routes>
        </div>
    );
};

export default App;
