"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../constant/index";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../Button";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex fixed dm-sans justify-between items-center px-[1rem] lg:px-[5%] max-w-[100vw]  bg-white w-[100%] z-30 py-3">
      <Link href="/">
        <Image src="/PayTrack Logo2.svg" alt="logo" width={120} height={180} />
      </Link>
      <div className="flex gap-6 items-center">
        <ul className={`h-fit hidden lg:flex gap-3 `}>
          {NAV_LINKS.map((link) => (
            <ScrollLink
              to={
                link.key === "Contact_Us"
                  ? "footer"
                  : link.key === "Products"
                  ? "compact"
                  : ""
              }
              smooth={true}
              duration={500}
              key={link.key}
              className="regular-12 text-sm flex justify-between hover:text-[#2a1873] cursor-pointer items-center text-gray-50 px-[1.25rem] font-[500] pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </ScrollLink>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Join waitlist"
            icon="/arrow.svg"
            variant="btn_fire_red"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdKLcXNDxNZUStPkOXVOtv5HoypsI71b3HGYAkPGxWor-DIbA/viewform?embedded=true",
                "_blank"
              )
            }
          />
        </div>
      </div>

      <ul
        className={`h-fit absolute lg:hidden left-0 bg-white w-[100vw] pb-4 top-[4.5rem] gap-6  ${
          showMenu
            ? "flex lg:hidden flex-col show pt-4 shadow-md"
            : "hidden hide"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <ScrollLink
            to={link.key === "Contact_Us" ? "footer" : ""}
            smooth={true}
            duration={500}
            key={link.key}
            className="regular-16 flex justify-between hover:text-[#2a1873] items-center text-gray-50 px-[2rem] cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
            <FaArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
          </ScrollLink>
        ))}
      </ul>

      <Image
        src="/navbar.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block  cursor-pointer lg:hidden"
        onClick={() => setShowMenu(!showMenu)}
      />
    </nav>
  );
};

export default NavBar;
