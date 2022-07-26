import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
//import { activities } from "../data";
import ActivityCard from "../components/ActivityCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("inbox"); //for header buttons
  const [calls, setCalls] = useState([]); //primary call data
  const [refresh, setRefresh] = useState(true); // to refetch after sending post request

  console.log({ calls, refresh });

  // calculate number of missed call for use in footer phone icon
  const missedCalls = calls.filter(
    (call) => call.call_type === "missed"
  ).length;

  //Initial data fetch, on component mount
  useEffect(() => {
    fetch("https://aircall-job.herokuapp.com/activities")
      .then((res) => res.json())
      .then((data) => setCalls(data))
      .catch((error) => console.error(error));
  }, []);

  //Subsequent data fetch - reactive on filter change and post requests
  useEffect(() => {
    fetch("https://aircall-job.herokuapp.com/activities")
      .then((res) => res.json())
      .then((data) => {
        let newList;
        if (filter === "archive") {
          newList = data.filter((call) => call.is_archived);
        } else if (filter === "inbox") {
          newList = data.filter((call) => !call.is_archived);
        } else {
          newList = data;
        }
        setCalls(newList);
      })
      .catch((error) => console.error(error));
  }, [filter, refresh]);

  return (
    <div className="bg-gray-700 flex items-center justify-center h-screen relative">
      <Head>
        <title>AirCall</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-[666px] w-[376px] border rounded-md bg-white relative  flex flex-col">
        <Header setFilter={setFilter} />

        <main className="flex-grow overflow-y-auto">
          {calls.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          ))}
        </main>

        <Footer missedCalls={missedCalls} />
      </div>
    </div>
  );
}
