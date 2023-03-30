import React from "react";

const MiddlePage = () => {

    return <>

        <div className="w-screen h-screen bg-blue-500">

            <div className="flex flex-col gap-y-12 bg-yellow-300 items-center w-full h-full">
                <h1 className="text-xl md:text-2xl text-center max-w-sm md:max-w-full bg-green-500 font-bold antialiased">Travel With the Worlds Largest And Safest Network</h1>

                <div className="flex flex-col gap-y-4 md:flex-row justify-evenly container mx-auto w-4/5  bg-red-800 h-1/2 items-center md:items-start">

                    <div className="flex flex-col gap-y-3 bg-pink-300 items-center justify-center w-1/2 md:w-1/4 h-1/2 rounded-lg">
                        <img src="/Images/bus-stop.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                        <h1 className="text-center text-sm md:text-md">2000+ <br></br>Bus locations</h1>
                    </div>

                    <div className="flex flex-col gap-y-3 bg-pink-300 items-center justify-center w-1/2 md:w-1/4 h-1/2 rounded-lg">
                        <img src="/Images/customers.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                        <h1 className="text-center text-sm md:text-md">20 Million <br></br>Happy custoners globally</h1>
                    </div>

                    <div className="flex flex-col gap-y-3 bg-pink-300 items-center justify-center w-1/2 md:w-1/4 h-1/2 rounded-lg">
                        <img src="/Images/bus_tickets.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                        <h1 className="text-center text-sm md:text-md">5000+ <br></br>Tickets book everyday</h1>
                    </div>

                </div>



                <h1 className="text-xl md:text-2xl text-center max-w-sm md:max-w-full bg-green-500 font-bold antialiased">Here is what our customers have to say abous us</h1>

                <div className="flex flex-col items-center justify-center bg-red-800 w-full h-full md:h-1/2">


                    <div className="flex flex-col gap-y-4 md:flex-row justify-evenly w-full bg-green-300  
                    h-3/4 items-center md:items-start">

                        <div className="flex flex-col gap-y-3 bg-pink-300 items-start justify-center w-1/2 md:w-1/4 h-full rounded-lg py-2 md:py-0">

                            <div className="flex flex-row gap-x-4 w-3/4 bg-red-500 container mx-auto">
                                <div className="flex flex-col bg-yellow-300 items-center">
                                    <img src="/Images/bus-stop.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                                    <img src="/Images/rating.png" className="w-16 h-16"></img>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <h1 className="font-bold text-2xl">Name</h1>
                                    <h1 className="text-gray-500">Designation</h1>
                                </div>
                            </div>

                            <div className="flex container mx-auto w-3/4 bg-blue-500">
                                <h1 className="text-sm md:text-md">Awesome travel expereice with reserve. Excellent staff.</h1>
                            </div>
                        </div>





                        <div className="flex flex-col gap-y-3 bg-pink-300 items-start justify-center w-1/2 md:w-1/4 h-full rounded-lg">

                            <div className="flex flex-row gap-x-4 w-3/4 bg-red-500 container mx-auto">
                                <div className="flex flex-col bg-yellow-300 items-center">
                                    <img src="/Images/bus-stop.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                                    <img src="/Images/rating.png" className="w-16 h-16"></img>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <h1 className="font-bold text-2xl">Name</h1>
                                    <h1 className="text-gray-500">Designation</h1>
                                </div>
                            </div>

                            <div className="flex container mx-auto w-3/4 bg-blue-500">
                                <h1 className="">Awesome travel expereice with reserve. Excellent staff.</h1>
                            </div>
                        </div>




                        <div className="flex flex-col gap-y-3 bg-pink-300 items-start justify-center w-1/2 md:w-1/4 h-full rounded-lg">

                            <div className="flex flex-row gap-x-4 w-3/4 bg-red-500 container mx-auto">
                                <div className="flex flex-col bg-yellow-300 items-center">
                                    <img src="/Images/bus-stop.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                                    <img src="/Images/rating.png" className="w-16 h-16"></img>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <h1 className="font-bold text-2xl">Name</h1>
                                    <h1 className="text-gray-500">Designation</h1>
                                </div>
                            </div>

                            <div className="flex container mx-auto w-3/4 bg-blue-500">
                                <h1 className="">Awesome travel expereice with reserve. Excellent staff.</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>

    </>
};

export default MiddlePage;