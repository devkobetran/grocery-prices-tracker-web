import React, { lazy } from "react";
//Need this to switch pages
//React Router Dom Updates
import { Routes, Route } from "react-router-dom";

//Pages
const HomePage = lazy(() => import("../pages/Home"));
const AddPage = lazy(() => import("../pages/add/AddPage"))
//404 Page
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));

const RoutePaths = () => (
  <Routes>
    {/* A <Routes> looks through its children <Route> and renders the first one that matches the current URL. */}
    <Route path="/" element={<HomePage />} />
    <Route path="/add-form" element={<AddPage />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />

    {/* 404 page */}
    <Route path="/404" element={<NotFoundPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
export default RoutePaths;