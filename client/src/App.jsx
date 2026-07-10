import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

import CustomerDashboard from "./pages/dashboard/CustomerDashboard";
import RestaurantDashboard from "./pages/dashboard/RestaurantDashboard";
import RiderDashboard from "./pages/dashboard/RiderDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />

          {/* DashBoard Routes */}

          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route
            path="/restaurant/dashboard"
            element={<RestaurantDashboard />}
          />
          <Route path="/rider/dashboard" element={<RiderDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
