import {
  BeakerIcon,
  PhoneIcon,
  UserIcon,
  CogIcon,
  StarIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

function Footer({ missedCalls }) {
  return (
    <footer className=" border flex items-center justify-between  w-full absolute bottom-0 left-0 p-1 z-20 bg-white">
      <button className="relative p-4 group cursor-pointer focus:border-b-2 border-green-500 text-gray-700 active:scale-95">
        <PhoneIcon className="h-8 w-8 p-1 rounded-full text-gray-700 group-hover:bg-gray-200" />
        <span className=" w-4 h-4 flex items-center absolute top-3 right-4 text-[8px] p-1  border rounded-full bg-red-500 text-white font-bold ">
          {missedCalls}
        </span>
      </button>

      <button className="p-4 group cursor-pointer focus:border-b-2 border-green-500 text-gray-700 active:scale-95">
        <UserIcon className="  h-8 w-8 p-1 rounded-full   group-hover:bg-gray-200" />
      </button>
      <button className="p-2  group cursor-pointer focus:border-b-2 border-green-500 text-gray-700 active:scale-95">
        <ViewGridIcon className=" h-12 w-12 p-1 rounded-full  text-green-500  border group-hover:bg-gray-200" />
      </button>
      <button className="  p-4 group cursor-pointer focus:border-b-2 border-green-500 text-gray-700 active:scale-95">
        <CogIcon className=" h-8 w-8 p-1 rounded-full  text-gray-700 group-hover:bg-gray-200" />
      </button>
      <button className="p-4 group cursor-pointer focus:border-b-2 border-green-500 text-gray-700 active:scale-95">
        <StarIcon className=" h-8 w-8 p-1 rounded-full  text-gray-700 group-hover:bg-gray-200" />
      </button>
    </footer>
  );
}
export default Footer;

// implement missed calls
