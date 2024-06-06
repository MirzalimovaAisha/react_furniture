import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./pages/navbar";
import Section1 from "./pages/section1";
import Header from "./pages/header";
import UnderHeader from "./pages/underHeader";
import Section2 from "./pages/section2";
import Section3 from "./pages/section3";
import Section4 from "./pages/section4";
import Section5 from "./pages/section5";
import Footer from "./pages/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navbar />
        <Header />
        <UnderHeader/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
    </React.StrictMode>
);
