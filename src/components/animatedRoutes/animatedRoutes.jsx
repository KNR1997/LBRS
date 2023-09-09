import React, { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../../pages/home/Home";
import Hotel from "../../pages/hotel/Hotel";
import List from "../../pages/list/List";
import Form from "../../pages/register2/form";
import Login from "../../pages/login/login";
import InterestFields from "../../pages/interestFields/InterestFields";
import { AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";

function AnimatedRoutes() {

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/register" />;
  };

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/hotels"
          element={
            <RequireAuth>
              <List />
            </RequireAuth>
          }
        />
        <Route
          path="/hotels/:id"
          element={
            <RequireAuth>
              <Hotel />
            </RequireAuth>
          }
        />
        <Route
          path="/interestFields"
          element={
            <RequireAuth>
              <InterestFields />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Form />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </AnimatePresence>
  );
}

export default AnimatedRoutes;
