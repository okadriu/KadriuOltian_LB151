import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import Spiel from "./pages/Spiel";
import HighscoreListe from "./pages/HighscoreListe";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser.email);
        setAuthState("dashboard");
      } else {
        setUser(null);
        setAuthState(null);
      }
    });

    return unsubscribe;
  }, [user]);

  if (authState === null)
    return (
      <>
        <Navbar />
        <div className="container">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/Spiel" element={<Spiel />} />
            <Route path="/HighscoreListe" element={<HighscoreListe />} />
          </Routes>
        </div>
      </>
    );
  if (user)
    return (
      <>
        <Dashboard user={user} setAuthState={setAuthState} setUser={setUser} />
      </>
    );
}

export default App;
