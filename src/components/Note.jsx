import { Link } from "react-router-dom";
import { useFormatDate } from "../hooks/useFormatDate";

const Note = ({
  message,
  color = "chat-bubble-secondary",
  to = "Unknown",
  date,
  likes,
  id,
}) => {
  const formattedDate = useFormatDate(date);

  return (
    <Link to={`/message/${id}`}>
      <div className="notebook-page min-h-96 flex flex-col max-w-[500px] mx-auto relative rounded-lg pb-14 dark:bg-gray-800 bg-white shadow duration-300">
        {/* header  */}
        <div className="note-header border-b border-gray-300 dark:border-gray-800 pt-4 bg-gray-500/5 dark:bg-indigo-200/5 rounded-t-lg px-4 flex items-center pb-3">
          <div
            className={`rounded-full bg-gray-400 dark:bg-gray-500 p-2 text-white dark:text-gray-100`}
          >
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
              className="lucide lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          </div>
          <p className="text-gray-600 font-medium text-sm ms-2 dark:text-gray-300">
            {to}
          </p>

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
            className="lucide lucide-chevron-right ms-auto dark:text-gray-300 text-gray-600"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>

        {/* body  */}
        <div className="message pt-4 pb-3 min-h-52 pe-2 flex flex-col justify-end grow">
          <div className="pb-2 w-full ps-5 flex justify-center mb-auto">
            <p className="text-xs text-gray-900 dark:text-gray-100 opacity-60">
              {formattedDate}
            </p>
          </div>
          <div className="chat chat-end">
            <div className={`chat-bubble rounded-2xl ${color} text-sm`}>
              {/* <p className="pb-3">from: secret</p> */}

              <p className="line-clamp-7 break-words overflow-hidden font-medium">
                {message ? message : "Message is empty"}
              </p>
            </div>

            <div className="chat-footer text-gray-900 dark:text-gray-100 opacity-50 mt-1">
              20 comments
            </div>
          </div>
        </div>

        {/* bottom  */}
        <div className="note-bottom mt-auto border-t rounded-b-lg border-gray-300  dark:border-gray-800 bg-gray-500/5 dark:bg-indigo-200/5  bottom-0 w-full absolute px-4 py-3 flex justify-between items-center">
          <div className="py-2 pe-4 ps-3 text-gray-500 bg-white dark:bg-gray-600 dark:text-gray-300 grow rounded-full border border-gray-300 dark:border-gray-600 text-sm flex items-center">
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
              className="lucide lucide-smile"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" x2="9.01" y1="9" y2="9" />
              <line x1="15" x2="15.01" y1="9" y2="9" />
            </svg>
            <p className="ms-auto">Aa</p>
          </div>
          <button className="flex items-center text-[12px] heart-icon text-gray-500 dark:text-gray-200 cursor-pointer px-2 py-1">
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
              className="lucide lucide-heart me-1"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            {likes}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Note;
