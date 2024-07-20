"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const BookDemo2 = () => {
  return (
    <div className="flex dm-sans flex-col items-center justify-center max- relative">
      <div className="lg:absolute icon lg:bg-purple-300 lg:opacity-50 lg:-left-20 h-40 rounded-full lg:w-40 lg:top-[50%] hidden lg:flex "></div>
      <div className="flex flex-col lg:flex-row items-center justify-center pt-[4rem] max-container padding-container mt-5 ">
        <div className="bg-[#fff0f0] mb-4 lg:mb-0 relative flex flex-col items-center justify-center min-h-[300px] lg:w-6/12 p-[1.5rem] lg:p-[3rem] lg:bottom-12 rounded-2xl lg:left-12">
          <h3 className="font-bold dm-sans text-center text-3xl">
            Ready for Stress-Free Payroll?
          </h3>{" "}
          <p className="text-xl lg:text-center mt-3 text-slate-700">
            No expertise is needed. Our payroll solution is designed for small
            business owners, making it easy to use regardless of experience.
          </p>
        </div>

        <div className="lg:w-6/12">
          <img
            src="/4.svg"
            alt="booking1"
            className="w-[100%] object-contain h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BookDemo2;
