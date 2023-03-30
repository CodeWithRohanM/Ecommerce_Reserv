import React from "react";
import Header from "./Header";

const HeroSection = () => {

    return <>


        <div className="w-screen h-screen bg-red-400">
        <Header />


            <img src="/Images/bgImage.jpeg" className="object-cover h-4/5 w-full bg-opacity-80"></img>


            <div className="flex flex-col gap-y-12 w-full">
                <div className="grid grid-cols-3 gap-x-2 container mx-auto max-w-md md:max-w-2xl bg-yellow-300 -mt-96">

                    <select className="p-2 bg-white rounded-lg text-gray-500 font-bold active:bg-none 
                    text-sm md:text-lg">
                        <option selected>From</option>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                    </select>

                    <select className="p-2 bg-white rounded-lg text-gray-500 font-bold active:bg-none 
                    text-sm md:text-lg">
                        <option selected>To</option>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                    </select>

                    <select className="p-2 bg-white rounded-lg text-gray-500 font-bold active:bg-none 
                    text-sm md:text-lg">
                        <option selected>Travel Date</option>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                    </select>
                </div>

                <div className="flex flex-row justify-center">
                    <button type="button" className="bg-orange-500 px-12 py-2 text-white font-bold hover:bg-orange-400">
                        Search</button>
                </div>
            </div>
        </div>
    </>
};

export default HeroSection;