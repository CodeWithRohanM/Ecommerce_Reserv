import React from "react";
import { NavLink } from "react-router-dom";
import "../index";

const Header = () => {

    return <>

        <div className="bg-white w-full py-4 shadow-2xl tracking-widest" id="navbarStyles">

            <div className="flex flex-col gap-y-4 md:flex-row md:justify-between w-full container mx-auto">

                <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-20 items-center w-2/5">
                    <NavLink to="/"
                        style={({ isActive }) => ({
                            borderBottom: isActive ? "1px solid black" : "none",
                        })}>
                        <div className="w-14 h-14 hover:cursor-pointer hover:w-16 hover:h-16 transition-all ease-in-out duration-300">
                            <img src="/Images/icon_logo.png" className=""></img>
                        </div>
                    </NavLink>

                    <div className="flex flex-col gap-y-4 md:flex-row gap-x-6 items-center">
                        <NavLink to="/ticket"
                            style={({ isActive }) => ({
                                color: isActive ? "orange" : "black",
                                borderBottom: isActive ? "1px solid black" : "none",
                            })}
                        ><h1 className="hover:cursor-pointer text-xl antialiased font-bold hover:bg-gray-200 rounded-lg transition ease-in-out duartion-700  py-2 px-4">Ticket</h1></NavLink>
                        <NavLink to="/contact"
                            style={({ isActive }) => ({
                                color: isActive ? "orange" : "black",
                                borderBottom: isActive ? "1px solid black" : "none",
                            })}
                        ><h1 className="hover:cursor-pointer text-xl antialiased font-bold hover:bg-gray-200 rounded-lg py-2  px-4">Contact Us</h1></NavLink>
                    </div>
                </div>


                <div className="flex flex-col gap-y-4 md:flex-row gap-x-6 items-center">
                    <NavLink to="/logIn"
                        style={({ isActive }) => ({
                            color: isActive ? "white" : "black",
                        })}
                    ><button type="button" className="bg-orange-400 hover:bg-orange-300 px-4 md:px-12 py-2 font-bold rounded-lg hover:cursor-pointer text-xl antialiased">LogIn</button></NavLink>

                    <NavLink to="/register"
                        style={({ isActive }) => ({
                            color: isActive ? "orange" : "black",
                            borderBottom: isActive ? "1px solid black" : "none",
                        })}
                    ><h1 className="hover:cursor-pointer text-xl antialiased font-bold hover:bg-gray-200 py-2 px-4 rounded-lg">Register</h1></NavLink>
                </div>
            </div>
        </div>

    </>
};
export default Header;