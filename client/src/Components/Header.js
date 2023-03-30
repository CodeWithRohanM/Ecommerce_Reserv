import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    return <>

        <div className="bg-blue-400 w-full py-4 shadow-2xl">

            <div className="flex flex-col gap-y-4 md:flex-row md:justify-between bg-yellow-300 w-full container mx-auto">

                <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-20 bg-red-400 items-center">
                    <a href="/"><img src="/Images/icon_logo.png" className="w-14 h-14 hover:cursor-pointer"></img></a>

                    <div className="flex flex-col gap-y-4 md:flex-row gap-x-12 bg-green-400 items-center">
                        <NavLink to="/ticket"><h1 className="hover:cursor-pointer text-xl antialiased font-bold">Ticket</h1></NavLink>
                        <NavLink to="/contact"><h1 className="hover:cursor-pointer text-xl antialiased font-bold">Contact Us</h1></NavLink>
                    </div>
                </div>


                <div className="flex flex-col gap-y-4 md:flex-row gap-x-12 bg-red-600 items-center">
                    <NavLink to="/logIn"><button type="button" className="bg-orange-400 px-4 md:px-12 py-2 font-bold rounded-lg hover:cursor-pointer text-xl antialiased">LogIn</button></NavLink>

                    <NavLink to="/register"><h1 className="hover:cursor-pointer text-xl antialiased font-bold">Register</h1></NavLink>
                </div>
            </div>
        </div>

    </>
};
export default Header;