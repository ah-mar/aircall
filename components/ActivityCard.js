import { PhoneIcon, PhoneMissedCallIcon, MailIcon } from "@heroicons/react/solid";
import CardIcon from "./CardIcon";

function ActivityCard({ activity }) {




  return (
    <div
      role="button"
      className="flex items-center justify-between border rounded-md mt-4 mx-2 px-2 py-4 gap-4 hover:border-green-500 cursor-pointer"
    >
      {/* Icon - missed/ successfull/ div- from /to time / date */}

      <div className=" text-gray-700 flex flex-col items-start justify-center gap-1 ">
        <CardIcon type={activity.call_type} />
        <p className="text-xs  text-gray-500 mt-1  w-12 overflow-clip text-ellipsis">{activity.call_type}</p>
      </div>

      <div className="flex-grow flex flex-col items-start justify-center gap-2">
        <p className="text-xs text-gray-700">
          From: <strong className="ml-1">{activity.from}</strong>{" "}
        </p>
        <p className="text-xs text-gray-700">
          To: <strong className="ml-5 ">{activity.to || "Unknown"}</strong>{" "}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-xs text-gray-700">
          {new Date(activity.created_at).toLocaleTimeString()}
        </p>
        <p className="text-xs text-gray-700 ">
          {" "}
          {new Date(activity.created_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
export default ActivityCard;

const activity = {
  id: 7829,
  created_at: "2018-04-18T15:43:32.000Z",
  direction: "inbound",
  from: "+33 6 34 45 74 34",
  to: "Olivier Pailhes",
  via: "Spain Hotline",
  duration: "300",
  is_archived: false,
  call_type: "answered",
};
