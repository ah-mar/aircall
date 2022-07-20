import { ArchiveIcon } from "@heroicons/react/outline";
import { useState } from "react";
import CardIcon from "./CardIcon";

function ActivityCard({ activity, refresh,  setRefresh }) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  function toggleDetails() {
    setIsCardOpen(!isCardOpen);
  }

  function archiveCall() {

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_archived: !activity.is_archived }),
      method: "POST",
    };

    fetch(
      `https://aircall-job.herokuapp.com/activities/${activity.id}`,
      options
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
      .finally(() => setRefresh(!refresh));
  }

  return (
    <div
      onClick={toggleDetails}
      role="button"
      className="border  rounded-md mt-4 mx-2 px-2 py-4 hover:border-green-500 cursor-pointer"
    >
      <div className="flex items-center justify-between gap-4 ">
        {/* Icon - missed/ successfull/ div- from /to time / date */}

        <div className=" text-gray-700 flex flex-col items-start justify-center gap-1 ">
          <CardIcon type={activity.call_type} />
          <p className="text-xs  text-gray-500 mt-1  w-12 overflow-clip text-ellipsis">
            {activity.call_type}
          </p>
        </div>

        <div className="flex-grow flex flex-col items-start justify-center gap-2">
          <p className="text-xs text-gray-700">
            From: <strong className="ml-2">{activity.from}</strong>{" "}
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

      {isCardOpen && (
        <div className="">
          <div className="flex items-center justify-between mt-4 gap-8">
            <button
              onClick={archiveCall}
              className=" cursor-pointer focus:border-b-2 border-green-500 text-gray-700"
            >
              <ArchiveIcon className="  h-8 w-8 p-1 rounded-full active:scale-95  hover:bg-gray-200" />
              <p className="text-xs">{activity.is_archived && "Archived"}</p>
            </button>
            <p className="text-xs text-gray-700 flex-grow">
              Via: <strong className="ml-4">{activity.via}</strong>{" "}
            </p>
            <p className="text-xs text-gray-700 "> {activity.duration} sec</p>
          </div>
          <div className="flex items-center justify-between gap-2 mt-16 mb-4 ">
            <button className=" text-gray-700 w-1/2  border-2 border-green-700 px-4 py-2 rounded cursor-pointer font-bold hover:bg-green-700 hover:text-white active:scale-95 ">
              Call
            </button>
            <button className="text-gray-700 w-1/2  border-2 border-green-700 px-4 py-2 rounded cursor-pointer font-bold hover:bg-green-700 hover:text-white active:scale-95 ">
              Message
            </button>
          </div>
        </div>
      )}
      {/* Show Details */}
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

// details will have a new line with archived icon, via text and duration
// two buttons call and message
