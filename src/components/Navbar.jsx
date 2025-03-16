import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className="navbar max-w-2xl py-0 px-2 duration-75 dark:bg-gray-700/75 bg-white/75 shadow-sm rounded-xl">
      <div className="navbar-start">
        <div className="avatar w-6 h-6 me-2 hidden md:inline mx-2">
          <div className="w-6">
            <img
              className="rounded-full"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm duration-300 dark:hover:bg-gray-800 btn-ghost hover:bg-gray-400 dark:text-gray-200 text-gray-600 hover:text-white btn-circle border-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-100 dark:bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <div className="avatar w-8 h-8 md:w-10 md:h-10 border-gray-200 dark:border-gray-600">
                <div className="w-8 md:w-10">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </li>
            <li>
              <a className="py-3 text-gray-600 font-medium dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-200">
                Homepage
              </a>
            </li>
            <li>
              <a className="py-3 text-gray-600 font-medium dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-200">
                History
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles ms-auto text-green-500"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
              </a>
            </li>
            <li>
              <a className="py-3 text-gray-600 font-medium dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-200">
                About
              </a>
            </li>
            <li>
              <a className="py-3 text-gray-600 font-medium dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-200">
                Support
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles ms-auto text-green-500"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <p className="text-base md:text-xl font-semibold duration-75 text-gray-700 dark:text-gray-300">
          Chat
          <span className=" text-indigo-900 dark:text-indigo-500">Wall</span>
        </p>
      </div>
      <div className="navbar-end">
        <button className="btn btn-sm duration-300 dark:hover:bg-gray-800 btn-ghost hover:bg-gray-400 dark:text-gray-200 text-gray-600 hover:text-white btn-circle border-0">
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
            className="lucide lucide-megaphone"
          >
            <path d="m3 11 18-5v12L3 14v-3z" />
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
          </svg>
        </button>
        <button
          onClick={toggleDarkMode}
          className="btn btn-sm duration-300 dark:hover:bg-gray-800 btn-ghost hover:bg-gray-400 dark:text-gray-200 text-gray-600 hover:text-white btn-circle border-0"
        >
          {isDarkMode ? (
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
              className="lucide lucide-moon"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
