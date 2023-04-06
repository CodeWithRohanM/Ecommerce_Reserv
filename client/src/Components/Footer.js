import React from "react";

const Footer = () => {

    return <>

        <div className="w-screen h-fit md:h-96 tracking-wider">


            <div className="flex flex-row w-full h-full bg-gray-300">

                <div className=" w-1/2 flex flex-col justify-center">

                    <div className="flex flex-col gap-y-6 h-4/5 w-full px-12">

                        <div className="flex flex-col gap-y-3">
                            <img src="/Images/caravana.gif" className="w-20 h-20 rounded-full"></img>
                            <h1 className="text-xl">When you have a choice, choose reserve.</h1>
                        </div>

                        <h1 className="max-w-lg text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt ut, facere cumque, aut vero sint officia minima, ullam non nulla consequatur voluptates ad praesentium minus. Eius libero architecto sit?</h1>

                        <h1 >reserve@gmail.com</h1>
                    </div>
                </div>



                <div className="flex flex-col py-10 w-1/2">

                    <div className="flex flex-row justify-around">

                        <div className="flex flex-col gap-y-12">
                            <h1 className="text-2xl font-bold border-b border-black pb-2">About</h1>

                            <div className="flex flex-col gap-y-2">
                                <h1 className="hover:text-lg transition-all ease-in-out duration-300 hover:cursor-pointer">About Us</h1>
                                <h1 className="hover:text-lg transition-all ease-in-out duration-300 hover:cursor-pointer">Contact Us</h1>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-12">
                            <h1 className="text-2xl font-bold border-b border-black pb-2">Useful Links</h1>

                            <div className="flex flex-col gap-y-2">
                                <h1 className="hover:cursor-pointer hover:text-lg transition-all ease-in-out duration-300">Career</h1>
                                <h1 className="hover:cursor-pointer hover:text-lg transition-all ease-in-out duration-300">FAQ's</h1>
                                <h1 className="hover:cursor-pointer hover:text-lg transition-all ease-in-out duration-300">T & C</h1>
                                <h1 className="hover:cursor-pointer hover:text-lg transition-all ease-in-out duration-300">Privacy Policy</h1>
                                <h1 className="hover:cursor-pointer hover:text-lg transition-all ease-in-out duration-300">Blogs</h1>

                            </div>
                        </div>

                        <div className="flex flex-col gap-y-12">
                            <h1 className="text-2xl font-bold border-b border-black pb-2">Follow Us</h1>

                            <div className="grid grid-cols-2 gap-y-4">
                                <img src="/Images/twitter.png" className="w-6 h-6 hover:w-8 hover:h-8 transition-all ease-in-out duration-300 hover:cursor-pointer"></img>
                                <img src="/Images/instagram.png" className="w-6 h-6 hover:w-8 hover:h-8 transition-all ease-in-out duration-300 hover:cursor-pointer"></img>
                                <img src="/Images/whatsapp.png" className="w-6 h-6 hover:w-8 hover:h-8 transition-all ease-in-out duration-300 hover:cursor-pointer"></img>
                                <img src="/Images/facebook.png" className="w-6 h-6 hover:w-8 hover:h-8 transition-all ease-in-out duration-300 hover:cursor-pointer"></img>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
            </div>

        </>
};

        export default Footer;