import Image from "next/image";
import logo from "../public/logo.svg";
import { AdjustmentsIcon, PhoneIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="flex items-center justify-between gap-6 px-4 shadow sticky top-0 bg-white z-20">
      <Image src={logo} alt="logo" width={80} height={88} className="border" />
      <nav className="flex items-center justify-between flex-grow">
        <button className=" text- p-4 cursor-pointer font-bold text-gray-700 hover:text-gray-400  focus:border-b-2 border-green-500">
          Inbox
        </button>
        <button className=" p-4 cursor-pointer font-bold text-gray-700 hover:text-gray-400  focus:border-b-2 border-green-500">
          All Calls
        </button>
        <button className="p-4 cursor-pointer font-bold text-gray-700 hover:text-gray-400  focus:border-b-2 border-green-500">
          <AdjustmentsIcon className="h-5 w-5 text-gray-700" />
        </button>
      </nav>
    </header>
  );
}
export default Header;
