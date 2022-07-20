import Image from "next/image";
import logo from "../public/logo.svg";

function Header({ setFilter }) {
  function handleCallsReset() {
    fetch("https://aircall-job.herokuapp.com/reset")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
      .finally(() => setFilter("inbox"));
  }

  return (
    <header className="flex items-center justify-between gap-6 px-4 shadow sticky top-0 bg-white z-20">
      <button onClick={handleCallsReset}>
        <Image src={logo} alt="logo" width={80} height={88} />
      </button>

      <nav className="flex items-center justify-between flex-grow">
        <button onClick={() => setFilter("inbox")} className="headerButton">
          Inbox
        </button>
        <button onClick={() => setFilter("all")} className="headerButton">
          All
        </button>
        <button onClick={() => setFilter("archive")} className=" headerButton">
          Archive
        </button>
      </nav>
    </header>
  );
}
export default Header;
