import React from "react";
import Image from "next/image";
const Paytrack = () => {
  return (
    <div
      id="compact"
      className="max- relative dm-sans px-[1rem] -container mt-20 flex flex-col items-center justify-center mb-[3rem]"
    >
      <h1 className="text-center Duplicate-sans text-xl lg:text-5xl mb-5 lg:mb-3 font-bold ">
        PayTrack Solves All Your Payroll Needs
      </h1>
      <p className="text-center text-md lg:text-xl mb-8">
        We empower forward-thinking businesses in{" "}
        <br className="hidden lg:flex" />
        the UK, giving them more time to focus on growth and success.
      </p>
      <div className="lg:flex  items-center justify-evenly min-h-[27.5rem] relative w-[100%]">
        <div className="absolute w-[60%]  h-[100%] bg-[#dae0ff] mx-auto top-0 left-0 ml-[20%] rounded">
          {" "}
          <img
            src="/half-yellow.svg"
            alt=""
            className="lg:ml-[10rem] ml-[3rem] icon"
          />
        </div>
        <div className="shadow-md relative z-10 rounded-md flex flex-col justify-evenly p-4 mx-4 bg-white lg:w-3/12 mt-[2rem] mb-[4rem] min-h-[10rem] lg:min-h-[20rem]  lg:relative lg:z-10">
          <h3 className="text-center text-2xl dm-sans font-bold ">
            Effortless Payroll Automation
          </h3>
          <p className="text-center text-md lg:text-xl leading-8">
            Streamline your payroll processes with our customizable and
            stress-free solutions. Enjoy competitive transaction and processing
            fees.
          </p>
          <div></div>
        </div>
        <div className="shadow-md rounded-md relative z-10 flex flex-col justify-evenly p-4 mx-4 bg-white lg:w-3/12 mt-5 mb-[4rem] min-h-[10rem] lg:min-h-[20rem]   lg:relative lg:z-10">
          <h3 className="text-center text-2xl font-bold dm-sans">
            Simplify Leave Management
          </h3>
          <p className="text-center text-md lg:text-xl leading-8">
            Easily manage your team's leave with our flexible and hassle-free
            solutions. Benefit from competitive transaction and processing fees.
          </p>
          <div></div>
        </div>
        <div className="shadow-md rounded-md relative z-10 flex flex-col justify-evenly p-4 mx-4 bg-white lg:w-3/12 mt-5 mb-[4rem] min-h-[10rem] lg:min-h-[20rem]  lg:relative lg:z-10">
          <h3 className="text-center text-2xl font-bold dm-sans">
            Ensure Compliance
          </h3>
          <p className="text-center text-md lg:text-xl leading-8">
            Stay compliant with our reliable and user-friendly solutions. We
            offer competitive transaction and processing fees.
          </p>
          <div></div>
        </div>
      </div>

      <Image
        src="/Vector.svg"
        width={40}
        height={40}
        alt=""
        className="absolute icon bottom-0 right-[10%]"
      />
    </div>
  );
};

export default Paytrack;
