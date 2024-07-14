/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/user" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
