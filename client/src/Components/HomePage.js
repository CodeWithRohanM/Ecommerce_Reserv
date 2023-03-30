import React from "react";
import HeroSection from "./HeroSection";
import MiddlePage from "./MiddlePage";
import Footer from "./Footer";

const HomePage = () => {

    return <>
    <div className="flex flex-col gap-y-12 w-screen h-screen">
        <section className="border-b-2 border-black">
            <HeroSection />
        </section>

        <section className="border-b-2 border-black">
            <MiddlePage />

        </section>

        <section className="border-b-2 border-black h-screen w-screen">
            <Footer/>
        </section>
        </div>

    </>
};

export default HomePage;