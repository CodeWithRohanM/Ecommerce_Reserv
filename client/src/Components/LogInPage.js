import React from "react";
import Header from "./Header";

const LogInPage = () =>{

    return <>
    <Header/>

    <div className="bg-yellow-300 w-screen h-screen">

        <div className="relative bg-blue-500 w-full h-1/2">

            <div className="bg-orange-400 w-1/3 h-1/2 absolute bottom-0">

                <div className="bg-red-400 w-full h-full absolute ml-12 mt-12">
                    <div className="bg-blue-800 w-full h-full mt-12 ml-12"></div>
                </div>

            </div>

            <div className="bg-blue-900 rounded-full w-1/6 h-1/2 absolute -left-6 md:-left-32"></div>

            <div className="bg-blue-800 rounded-full w-1/6 h-1/2 absolute -right-6 md:-right-32"></div>



            <div className="absolute bg-pink-500 w-1/3 h-1/2 right-0 bottom-0">
                <div className="bg-cyan-300 w-full h-full -ml-12 mt-12 absolute">
                    <div className="bg-blue-800 w-full h-full absolute -ml-12 mt-12"></div>
                </div>
            </div>

        </div>

    </div>

    
    </>
};

export default LogInPage;