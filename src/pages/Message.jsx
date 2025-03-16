// firebase
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormatDate } from "../hooks/useFormatDate";

import Navbar from "../components/Navbar";
import Note from "../components/Note";
import ReplyBubble from "../components/ui/ReplyBubble";

const Message = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fetching, setFetching] = useState(true);

  const [message, setMessages] = useState([]);

  const fetchMessage = async () => {
    try {
      const docRef = doc(db, "messages", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setMessages(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);
  const formattedDate = useFormatDate(message.createdAt);
  return (
    <div className="max-w-4xl mx-auto pt-3.5 flex flex-col items-center px-3 min-h-dvh">
      <Navbar />
      {fetching ? (
        <div className="mt-4 py-4">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : message ? (
        <div className="wrapper shadow-2xl flex flex-col w-full mb-4 grow max-w-2xl mt-4 rounded-lg bg-slate-200 dark:bg-gray-800">
          <div className="message-header mb-6 p-4 px-3 bg-gray-100 dark:bg-gray-700/80 flex items-center justify-between rounded-t-lg">
            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer dark:hover:bg-slate-600 duration-300 rounded-full dark:text-gray-200 text-gray-600 p-1"
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
                className="lucide lucide-arrow-left"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>
            <p className="font-medium text-gray-700 dark:text-gray-200">
              {message.to}
            </p>
            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer rounded-full dark:text-gray-200 text-gray-600 p-1"
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
                className="lucide lucide-heart"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </div>

          <div className="message-body grow flex flex-col justify-start pe-3">
            <div className="chat chat-end  w-full pe-4 mb-6">
              <div className="chat-bubble rounded-2xl chat-start chat-bubble-secondary">
                <p className="text-wrap break-words w-full text-sm">
                  {message.message}
                </p>
              </div>

              <p className="dark:text-gray-300 text-gray-600 text-xs chat-header mb-1">
                {formattedDate}
              </p>
            </div>
            <div className="replies-wrapper px-3">
              <ReplyBubble />
              <ReplyBubble />
              <ReplyBubble />
            </div>
          </div>

          <div className="message-bottom dark:bg-gray-700/40 p-3 bg-slate-100  rounded-t-2xl rounded-b-lg">
            <div className="border w-full flex items-end rounded-lg border-gray-300 dark:border-slate-600">
              <textarea
                className="bg-slate-100 w-full dark:bg-gray-700/0 outline-0 text-gray-600 p-3 rounded-lg dark:text-slate-200 appearance-none"
                placeholder="Add reply..."
                rows={2}
                name="reply"
                id=""
              ></textarea>

              <button className="cursor-pointer bg-slate-500 p-2 shadow rounded-lg md:px-6 m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send-horizontal"
                >
                  <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
                  <path d="M6 12h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">
          This message is empty
        </p>
      )}
    </div>
  );
};

export default Message;
