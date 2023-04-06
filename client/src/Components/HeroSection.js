import React, { useState } from "react";
import Header from "./Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import heroVideo from "/Users/rohanmote/Desktop/Thapa Projects/RESERVE_Booking/client/src/Components/HeroSection.js";

const HeroSection = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return <>


        <div className="w-screen h-screen flex flex-col">
            <Header />

            <img src="/Images/bgImage_animated.jpeg" className="object-cover h-5/6 items-center"></img>

            <div className="flex flex-col gap-y-12 w-full bg-yellow-300">
                <div className=" grid grid-cols-3 gap-x-2 container mx-auto max-w-md md:max-w-2xl -mt-96">

                    <select className="p-2 bg-white rounded-lg text-gray-500 font-bold active:bg-none 
                    text-sm md:text-lg hover:cursor-pointer">
                        <option selected>From</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Pune">Pune</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Kolkata">Kolkata</option>

                    </select>

                    <select className="p-2 bg-white rounded-lg text-gray-500 font-bold active:bg-none 
                    text-sm md:text-lg hover:cursor-pointer">
                        <option selected>To</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Pune">Pune</option>
                        <option value="Delhi">Delhi</option>

                    </select>

                    <div className="flex flex-row items-center gap-x-2 p-2 bg-white rounded-lg text-gray-500 font-bold active:bg-none text-sm md:text-lg hover:cursor-pointer">
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat={`dd MMM yyyy`}
                        className="w-full hover:cursor-pointer px-4 focus:outline-none"
                        shouldCloseOnSelect={true}
                    />

                    <img src="/Images/animated.gif" className="w-8 h-8"></img>
                    </div>

                    {/* <select className="p-2 bg-white rounded-lg text-gray-500 font-bold active:bg-none 
                    text-sm md:text-lg">
                        <option selected>Travel Date</option>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                    </select> */}
                </div>

                <div className="flex flex-row justify-center">
                    <button type="button" className="bg-orange-500 px-12 md:px-20 py-2 text-white font-bold hover:bg-orange-400">
                        Search</button>
                </div>
            </div>
        </div>
    </>
};

export default HeroSection;