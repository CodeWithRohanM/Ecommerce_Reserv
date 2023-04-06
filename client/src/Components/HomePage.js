import React from "react";
import HeroSection from "./HeroSection";
import MiddlePage from "./MiddlePage";
import Footer from "./Footer";

const HomePage = () => {

    return <>
    <div className="flex flex-col gap-y-12 w-screen h-screen">
        <section className="">
            <HeroSection />
        </section>

        <section className="">
            <MiddlePage />

        </section>


        <section className="">
            <Footer/>
        </section>
        </div>

    </>
};

export default HomePage;