import Image from "next/image";
import React from "react";

const WhyComp = () => {
  return (
    <>
      <div className="bg-[#d9dffe] dm-sans relative py-20 flex flex-col max- px-[1rem] lg:padding-container mt-[5rem] p-5 ">
        <img
          src="/vector3.svg"
          className="absolute w-8 h-6 -top-5 icon right-10"
        />

        <div className=" items-center justify-center text-center">
          <p className="text-center mb-3 duru-sans  dm-sans">Why PayTrack</p>
          <h3 className="text-center mb-8 dm-sans font-bold">
            Payroll Operations powered by world-class Tech
          </h3>
          <div className="lg:flex items-center gap-[5%] justify-center ">
            <div className="flex border-b lg:border-b-0 lg:border-r border-black  min-h-[12.5rem] px-[5%] flex-col items-center justify-center ">
              <Image
                src="/CustomerSupport.svg"
                alt="suport"
                width={32}
                height={32}
                className=""
              />{" "}
              <h6 className="text-center font-[600] mt-6">
                Run Payroll In Minutes (Not Days):
              </h6>{" "}
              <p className="text-center mt-2">
                Automate payroll, expenses, tax, and insurance payments quickly
                and efficiently, saving you valuable time.
              </p>
            </div>
            <div className="flex border-b lg:border-b-0 lg:border-r border-black  min-h-[12.5rem] px-[5%] flex-col items-center justify-center ">
              <Image
                src="/clock.svg"
                alt="clock"
                width={32}
                height={32}
                className=""
              />{" "}
              <h6 className="text-center font-[600] mt-6">Data Consistency:</h6>{" "}
              <p className="text-center mt-2">
                Ensure precision with unified data, reducing errors and
                improving overall consistency in your payroll processes.
              </p>
            </div>
            <div className="flex border-b lg:border-b-0 border-black min-h-[12.5rem] px-[5%] flex-col items-center justify-center ">
              <Image
                src="/Script.svg"
                alt="script"
                width={32}
                height={32}
                className=""
              />{" "}
              <h6 className="text-center font-[600] mt-6">
                Better Employee Experience:
              </h6>{" "}
              <p className="text-center mt-2">
                Enhance employee satisfaction by simplifying expense
                submissions, time-off requests, and approvals for a smoother
                workflow.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/vector8.svg"
          className="absolute  bottom-0 w-8 h-12 right-[50%]  icon "
        />
      </div>
    </>
  );
};

export default WhyComp;
