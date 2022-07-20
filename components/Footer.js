import {
  PhoneIcon,
  UserIcon,
  CogIcon,
  StarIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

function Footer({ missedCalls }) {
  return (
    <footer className=" border flex items-center justify-between  w-full absolute bottom-0 left-0 p-1 z-20 bg-white">
      <button aria-label="calls" className=" footerButton relative  group">
        <PhoneIcon className="footerIcon" />
        <span className=" w-4 h-4 flex items-center absolute top-1 right-2 text-[8px] p-1  border rounded-full bg-red-500 text-white font-bold ">
          {missedCalls}
        </span>
        <span className="text-xs">Calls</span>
      </button>

      <button aria-label="contacts" className="footerButton   group">
        <UserIcon className=" footerIcon" />
        <span className="text-xs">Contacts</span>
      </button>

      <button aria-label="home" className="footerButton   group">
        <ViewGridIcon className=" h-10 w-10 p-1 rounded-full  text-gray-700  border group-hover:bg-gray-200 ring ring-offset-2 ring-green-500" />
        <span className="text-xs">Home</span>
      </button>

      <button aria-label="settings" className="  footerButton   group">
        <CogIcon className=" footerIcon" />
        <span className="text-xs">Settings</span>
      </button>

      <button aria-label="favorites" className="footerButton   group ">
        <StarIcon className=" footerIcon" />
        <span className="text-xs">Favorites</span>
      </button>
    </footer>
  );
}
export default Footer;
