import React from "react";

const MiddlePage = () => {

    return <>

        <div className="w-screen h-screen">

            <div className="flex flex-col gap-y-12 items-center w-full h-full">
                <h1 className="text-xl md:text-3xl text-center max-w-sm md:max-w-full font-bold antialiased">Travel With the Worlds Largest And Safest Network</h1>

                <div className="flex flex-col gap-y-4 md:flex-row justify-around container mx-auto w-4/5 h-1/2 items-center md:items-start">

                    <div className="flex flex-col gap-y-3 bg-gray-100 items-center justify-evenly w-1/2 md:w-1/4 h-3/4 rounded-lg shadow-2xl">
                        <img src="/Images/bus-stop.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                        <h1 className="text-center text-sm md:text-lg"><span className="text-3xl font-bold">2000+</span> <br></br>Bus locations</h1>
                    </div>

                    <div className="flex flex-col gap-y-3 bg-gray-100 items-center justify-evenly w-1/2 md:w-1/4 h-3/4 rounded-lg shadow-2xl">
                        <img src="/Images/customers.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                        <h1 className="text-center text-sm md:text-lg"><span className="font-bold text-3xl">20 Million</span> <br></br>Happy custoners globally</h1>
                    </div>

                    <div className="flex flex-col gap-y-3 bg-gray-100 items-center justify-evenly w-1/2 md:w-1/4 h-3/4 rounded-lg shadow-2xl">
                        <img src="/Images/bus_tickets.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                        <h1 className="text-center text-sm md:text-lg"><span className="font-bold text-3xl">5000+</span> <br></br>Tickets book everyday</h1>
                    </div>

                </div>



                <h1 className="text-xl md:text-3xl text-center max-w-sm md:max-w-lg font-bold antialiased">Here is what our customers have to say abous us</h1>

                <div className="flex flex-col items-center justify-center bg-gray-200 w-full h-full md:h-1/2">


                    <div className="flex flex-col gap-y-4 md:flex-row justify-evenly w-full  
                    h-3/4 items-center md:items-start">

                        <div className="flex flex-col bg-gray-100 items-start justify-center w-1/2 md:w-1/4 h-full rounded-lg py-2 md:py-12 shadow-2xl">

                            <div className="flex flex-row gap-x-10 w-3/4 container mx-auto">
                                <div className="flex flex-col items-center">
                                    <img src="/Images/man.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                                    <img src="/Images/rating.png" className="w-16 h-16"></img>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <h1 className="font-bold text-2xl">Mark</h1>
                                    <h1 className="text-gray-500">Frequent Traveller</h1>
                                </div>
                            </div>

                            <div className="flex container mx-auto w-3/4">
                                <h1 className="">Awesome travel expereice with reserve. Excellent staff.</h1>
                            </div>
                        </div>





                        <div className="flex flex-col  bg-gray-100 items-start justify-center w-1/2 md:w-1/4 h-full rounded-lg shadow-2xl">

                            <div className="flex flex-row gap-x-10 w-3/4 container mx-auto">
                                <div className="flex flex-col items-center">
                                    <img src="/Images/woman.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                                    <img src="/Images/rating.png" className="w-16 h-16"></img>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <h1 className="font-bold text-2xl">Clara</h1>
                                    <h1 className="text-gray-500">Student</h1>
                                </div>
                            </div>

                            <div className="flex container mx-auto w-3/4">
                                <h1 className="">Awesome travel expereice with reserve. Excellent staff.</h1>
                            </div>
                        </div>




                        <div className="flex flex-col bg-gray-100 items-start justify-center w-1/2 md:w-1/4 h-full rounded-lg shadow-2xl">

                            <div className="flex flex-row gap-x-10 w-3/4 container mx-auto">
                                <div className="flex flex-col items-center">
                                    <img src="/Images/mans.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                                    <img src="/Images/rating.png" className="w-16 h-16"></img>
                                </div>

                                <div className="flex flex-col gap-y-2">
                                    <h1 className="font-bold text-2xl">Steve</h1>
                                    <h1 className="text-gray-500">Accountant</h1>
                                </div>
                            </div>

                            <div className="flex container mx-auto w-3/4">
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