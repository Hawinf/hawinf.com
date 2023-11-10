import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Tool from "./tools/Tool";
import Footer from "./footer/Footer";

const Homepage = () => {
    return (
        <>
            <Hero />
            <About />
            <Tool />
            <Footer />
        </>
    )
}

export default Homepage;