import { FC } from "react";

interface NavbarProps {
  title: string;
}

const Navbar: FC<NavbarProps> = ({ title }) => {
  return (
    <div className="fixed top-0 z-10 w-full p-4 bg-white flex justify-center items-center border-b-2  border-slate-100 ">
      <span className="text-center font-bold">{title}</span>
    </div>
  );
};

export default Navbar;
