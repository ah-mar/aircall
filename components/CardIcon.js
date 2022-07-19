import {
  PhoneIcon,
  PhoneMissedCallIcon,
  MailIcon,
  PhoneIncomingIcon,
} from "@heroicons/react/solid";

function CardIcon({ type }) {
  if (type === "missed") {
    return (
      <PhoneMissedCallIcon className="  h-6 w-6 p-1 rounded-full border border-red-500" />
    );
  } else if (type === "answered") {
    return (
      <PhoneIncomingIcon className="  h-6 w-6 p-1 rounded-full border border-green-500" />
    );
  } else if (type === "voicemail") {
    return (
      <MailIcon className="  h-6 w-6 p-1 rounded-full border border-gray-500" />
    );
  } else {
    return (
      <PhoneIcon className="  h-6 w-6 p-1 rounded-full border border-gray-500" />
    );
  }
}

export default CardIcon;
