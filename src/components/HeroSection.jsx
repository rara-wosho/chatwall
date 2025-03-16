import CreateMessage from "./ui/CreateMessage";

const HeroSection = ({ colView, setColView }) => {
  return (
    <div className="pt-3 pb-4 md:pb-8 md:pt-8 flex flex-col items-center">
      <CreateMessage />
      <p className="md:text-5xl text-4xl dark:text-white text-gray-800 text-center font-bold py-4">
        Where <span className="text-indigo-600">Chats</span> Become{" "}
        <span className="text-indigo-600">Echoes</span>
      </p>
      <p className="text-base font-medium lg:text-lg dark:text-gray-300 text-gray-500 text-center">
        A safe space for your untold messages—share your feelings anonymously
        and free from judgment. Release confessions, stories, or just a random
        thought you've kept locked away.
      </p>
      {/* <Scrollingbadges /> */}

      <div className="action-btns flex items-center gap-2 justify-center pb-4 pt-6">
        <button className="btn btn-outline border-gray-600 hover:bg-gray-700 text-gray-700 dark:text-gray-200  px-4 md:px-8 hover:text-white rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-book-text me-1"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            <path d="M8 11h8" />
            <path d="M8 7h6" />
          </svg>
          About
        </button>
        <button
          onClick={() => document.getElementById("my_modal_4").showModal()}
          className="btn btn-primary rounded-lg px-4 md:px-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-square-text me-1"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M13 8H7" />
            <path d="M17 12H7" />
          </svg>
          Share a Message
        </button>
      </div>

      <div className="flex items-center mb-8 mt-4">
        <div className="avatar-group -space-x-2 md:-space-x-4">
          <div className="avatar w-8 h-8 md:w-10 md:h-10 border-gray-200 dark:border-gray-600">
            <div className="w-8 md:w-10">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="avatar w-8 h-8 md:w-10 md:h-10 border-gray-200 dark:border-gray-600">
            <div className="w-8 md:w-10">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="avatar w-8 h-8 md:w-10 md:h-10 border-gray-200 dark:border-gray-600">
            <div className="w-8 md:w-10">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="avatar w-8 h-8 md:w-10 md:h-10 border-gray-200 dark:border-gray-600 avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-8 md:w-10">
              <span className="text-xs">99+</span>
            </div>
          </div>
        </div>

        <p className="text-gray-500 font-medium dark:text-gray-400 ms-2 text-xs md:text-sm ">
          Trusted by 99+ users
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
        <div className="flex items-center gap-2 justify-center">
          <input
            type="text"
            placeholder="Search a name..."
            className="input input-primary shadow rounded-lg bg-white dark:bg-gray-700 w-full text-gray-600  dark:text-gray-200 max-w-xl border-0"
          />
          <button className="p-2 rounded-lg bg-primary cursor-pointer text-sm px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>

        {/* toggle col view  */}
        <div className="hidden lg:flex items-center justify-end">
          <div className="flex items-center bg-gray-500/10 dark:bg-gray-700/30 rounded-lg">
            <button
              onClick={() => setColView("3")}
              className={`inline cursor-pointer px-4 py-2 text-gray-600 dark:text-gray-200 rounded-lg ${
                colView == "3" ? "bg-gray-100 dark:bg-gray-700" : "opacity-30"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-columns-3"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 3v18" />
                <path d="M15 3v18" />
              </svg>
            </button>
            <button
              onClick={() => setColView("4")}
              className={`inline cursor-pointer px-4 py-2 text-gray-600 dark:text-gray-200 rounded-lg ${
                colView == "4" ? "bg-gray-100 dark:bg-gray-700" : "opacity-30"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-columns-4"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7.5 3v18" />
                <path d="M12 3v18" />
                <path d="M16.5 3v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
