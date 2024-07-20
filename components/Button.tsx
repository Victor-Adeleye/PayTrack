import Image from "next/image";
import { MouseEvent } from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_blue" | "btn_plain_white" | "btn_fire_red";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
const Button = ({ type, title, icon, variant, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flexCenter items-center py-3 px-6 gap-3 rounded-md whitespace-nowrap transition duration-150 ease-in-out font-medium group ${variant}`}
    >
      <label className="bold-10 whitspace-nowrap">{title}</label>
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className={`flex justify-center items-center tracking-normal text-primary-500 group-hover:translate-x-1.5 transition-transform duration-150 ease-in-out ml-1 ${
            variant == "btn_plain_white" && "mt-2"
          }`}
        />
      )}
    </button>
  );
};

export default Button;
