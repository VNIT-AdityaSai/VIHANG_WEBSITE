import React from "react";
import Header from "../Header"
import Gallery from "../Gallery"
import Clubs from "../Clubs";
import Updates from "../Updates";
import Footer from "../Footer";

const Home = () => {
    document.title = "Home | Vihang 2025";
    return (
        <>
            <Header />
            <Gallery />
            <Clubs />
            <Updates />
            <Footer />
        </>
    )
}

export default Home;