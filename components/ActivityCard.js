import { ArchiveIcon } from "@heroicons/react/outline";
import { useState } from "react";
import CardIcon from "./CardIcon";

function ActivityCard({ activity, refresh, setRefresh }) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  // Toggle additional details
  function toggleDetails() {
    setIsCardOpen(!isCardOpen);
  }

  // Send put request to archive and unarchive calls
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

        {/* Call Card - left section- icon and status */}
        <div className=" text-gray-700 flex flex-col items-start justify-center gap-1 ">
          <CardIcon type={activity.call_type} />
          <p className="text-xs  text-gray-500 mt-1  w-12 overflow-clip text-ellipsis">
            {activity.call_type}
          </p>
        </div>

        {/* Call Card - center section - to and from */}
        <div className="flex-grow flex flex-col items-start justify-center gap-2">
          <p className="text-xs text-gray-700">
            From: <strong className="ml-2">{activity.from}</strong>{" "}
          </p>
          <p className="text-xs text-gray-700">
            To: <strong className="ml-5 ">{activity.to || "Unknown"}</strong>{" "}
          </p>
        </div>

        {/* Call Card - right section -date and time */}
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

      {/* Toggle call additional details */}
      {isCardOpen && (
        <div className="">

          {/* additonal details row - arhive, via and duration */}
          <div className="flex items-center justify-between mt-4 gap-8">
            <button onClick={archiveCall} className="  ">
              <ArchiveIcon className="  h-8 w-8 p-1 rounded-full active:scale-95  hover:bg-gray-200 cursor-pointer" />
              <p className="text-xs text-gray-700  w-8">
                {activity.is_archived && "Archived"}
              </p>
            </button>
            <p className="text-xs text-gray-700 flex-grow">
              Via: <strong className="ml-4">{activity.via}</strong>{" "}
            </p>
            <p className="text-xs text-gray-700 "> {activity.duration} sec</p>
          </div>

          {/* Addition details buttons - Call and Message */}
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
    </div>
  );
}
export default ActivityCard;




