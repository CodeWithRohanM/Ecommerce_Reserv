import React from "react";

const Footer = () => {

    return <>

        <div className="w-screen h-96 bg-blue-500">


            <div className="flex flex-row w-full h-full">

                <div className="bg-red-500 w-1/2 flex flex-col justify-center">

                    <div className="flex flex-col gap-y-6 h-4/5 w-full bg-yellow-300 px-12">

                        <div className="flex flex-col gap-y-3">
                            <img src="/Images/icon_logo.png" className="w-16 h-16"></img>
                            <h1>When you have a choice, choose reserve.</h1>
                        </div>

                        <h1 className="max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt ut, facere cumque, aut vero sint officia minima, ullam non nulla consequatur voluptates ad praesentium minus. Eius libero architecto sit?</h1>

                        <h1>sfdh@gmail.com</h1>
                    </div>
                </div>



                <div className="flex flex-col py-10 w-1/2 bg-red-200">

                    <div className="flex flex-row justify-around">

                        <div className="flex flex-col gap-y-12">
                            <h1>About</h1>

                            <div className="flex flex-col gap-y-2">
                                <h1>About Us</h1>
                                <h1>Contact Us</h1>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-12">
                            <h1>About</h1>

                            <div className="flex flex-col gap-y-2">
                                <h1>About Us</h1>
                                <h1>Contact Us</h1>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-12">
                            <h1>About</h1>

                            <div className="flex flex-col gap-y-2">
                                <h1>About Us</h1>
                                <h1>Contact Us</h1>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
            </div>

        </>
};

        export default Footer;