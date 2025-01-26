import React from 'react';
//Need this to switch pages
//React Router Dom Updates
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import RoutePaths from "./components/RoutePaths";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <RoutePaths />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
