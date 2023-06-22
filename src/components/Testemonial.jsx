import React from "react";
import demo from "../assets/logos/logo.png";

const Testimonial = () => {
  return (
    <div className="ss:py-16 ss:grid ss:grid-cols-2    ss:gap-y-10  sm:justify-evenly  max-xs:py-32 max-xs:w-auto  max-xs:flex-col       sm:flex sm:space-x-5 py-10 px-10  text-white bg-gradient-to-tr from-[#192c28] from-70% to-[#121315] snap-center">
      <div className="max-xs:h-5/6  ss:flex-col ss:w-72 ss:h-72   ss:mx-auto  sm:mx-1 sm:w-80 ss:pr-5  max-xs:mx-auto      max-xs:mb-9 max-xs:flex-col   max-xs:py-3   max-xs:w-64    card bg-[#0b0b0b] py-12 h-52 px-3 w-1/3 flex items-center justify-around sm:space-x-5 rounded-md shadow-xl">
        <img src={demo} alt="" className="w-20 h-20 rounded-full sm:ml-4 ss:mb-2 max-xs:my-3 " />

        <div className="box space-y-2 ">
          <h5 className="ss:mt-1 text-xl font-bold text-center">Arshad</h5>
          <p className="font-lato  text-center text-sm max-xs:text-base max-xs:pb-3 ">
            "DevXplore's team provided excellent communication, valuable
            insights, and high-quality development services that exceeded our
            expectations. Highly recommended."
          </p>
        </div>
      </div>

      <div className="max-xs:h-5/6 ss:flex-col ss:w-72 ss:h-72   ss:mx-auto   ss:pr-5 max-xs:ml-auto max-xs:mr-auto     max-xs:mb-9 max-xs:flex-col   max-xs:py-3  max-xs:w-64  card bg-[#0b0b0b] py-10 h-52 px-3 w-1/3 flex items-center justify-around sm:space-x-5 rounded-md shadow-xl">
        <img src={demo} alt="" className="w-20 h-20 rounded-full sm:ml-4 ss:mb-2 max-xs:my-3 " />
        <div className="box space-y-2">
          <h5 className="ss:mt-1 text-xl font-bold text-center">Om Verma</h5>
          <p className="font-lato text-center text-sm     max-xs:text-base max-xs:pb-3 ">
            "DevXplore exceeded expectations with communication, insights, and
            quality development services. Highly recommend for their innovative
            approach."                           
          </p>
        </div>
      </div>

      <div className="max-xs:h-5/6 ss:flex-col ss:w-72 ss:h-72 ss:col-span-2 sm:w-80 ss:mx-auto ss:pr-5 max-xs:ml-auto max-xs:mr-auto max-xs:mb-9 max-xs:flex-col   max-xs:py-3  max-xs:w-64  card bg-[#0b0b0b] py-10 h-52 px-3 w-1/3 flex items-center justify-around sm:space-x-5 rounded-md shadow-xl">
        <img src={demo} alt="" className="w-20 h-20 rounded-full sm:ml-4 ss:mb-2 max-xs:my-3 " />
        <div className="box space-y-2">
          <h5 className=" ss:mt-1 text-xl font-bold text-center">Aman</h5>
          <p className="font-lato text-center text-sm max-xs:text-base max-xs:pb-3">
            "DevXplore delivered outstanding development services with an
            innovative approach and exceptional communication. Highly recommend
            for any development needs."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
