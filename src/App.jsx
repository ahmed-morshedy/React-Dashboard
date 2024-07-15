/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/user" element={<Dashboard />} />
        <Route path="/profile/:Id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
