import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import { useState } from "react";

const CreateMessage = () => {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    to: "",
    color: "chat-bubble-primary",
  });

  const addMessage = async () => {
    setSending(true);

    const newMessage = {
      message: formData.message,
      to: formData.to,
      color: formData.color,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "messages"), newMessage);

      setFormData({
        message: "",
        to: "",
        from: "",
        color: "chat-bubble-primary",
      });
      document.getElementById("my_modal_4").close();
    } catch (error) {
      console.error("Error adding message:", error);
      return null; // Or throw an error, depending on your error handling strategy
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "to") {
      if (value.length <= 20) {
        // name is receiver and message, receiver value should be at 20 max characters
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    console.log(formData);
  };

  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-2xl bg-blue-50 dark:bg-gray-800 rounded-xl p-0">
        <div className="border-b dark:bg-gray-500/20 bg-gray-400/30 dark:border-gray-700 border-gray-300 modal-header px-3 md:px-6 pt-4 pb-3 flex items-center justify-between">
          <h3 className="font-bold text-[16px] flex items-center text-indigo-900/80 dark:text-indigo-300">
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
              className="lucide lucide-message-square-more me-1"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M8 10h.01" />
              <path d="M12 10h.01" />
              <path d="M16 10h.01" />
            </svg>
            New Message
          </h3>
          <button
            onClick={() => document.getElementById("my_modal_4").close()}
            className="close-btn text-gray-600 dark:text-gray-200 cursor-pointer bg-gray-100/10 dark:hover:bg-gray-800 hover:bg-gray-50/70 duration-300 p-1 rounded-lg"
          >
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
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="modal-action p-3 md:p-6 mt-0">
          {/* <form method="dialog" className="w-full"> */}
          <div className="w-full">
            <div className="flex justify-center mb-3 text-gray-600 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-user-round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <p className="text-gray-600 font-semibold text-center dark:text-gray-300 text-sm mb-2">
              To
            </p>
            <input
              onChange={handleChange}
              name="to"
              value={formData.to}
              className="bg-gray-600/10 border-0 dark:border-gray-800 text-gray-600 dark:text-gray-200 dark:bg-gray-700/45 rounded-lg p-3 w-full focus:outline-none mb-1 text-center"
              placeholder="Example : Alladin (max 20)"
            />
            <p className="text-end text-xs dark:text-gray-400 text-gray-600">
              {formData.to.length}/20
            </p>
            <p className="text-gray-600 font-semibold dark:text-gray-300 text-sm mb-2">
              Message :
            </p>
            <textarea
              onChange={handleChange}
              name="message"
              className="bg-gray-600/10 border-0 text-gray-600 dark:text-gray-200 dark:bg-gray-700/45 rounded-lg p-3 w-full focus:outline-none"
              placeholder="Your message here"
              rows={10}
              value={formData.message}
            ></textarea>

            {/* if there is a button, it will close the modal */}
            <div className="flex items-center justify-center md:justify-end gap-2 mt-3">
              <button
                onClick={() => document.getElementById("my_modal_4").close()}
                className="btn md:px-12 btn-outline btn-primary grow md:grow-0"
              >
                Cancel
              </button>
              <button
                onClick={addMessage}
                disabled={formData.message === "" || formData.to === ""}
                className="btn md:px-12 btn-primary flex items-center disabled:text-gray-600/50  disabled:border-gray-400 dark:disabled:border-gray-800/0 dark:disabled:text-gray-500  grow md:grow-0"
              >
                {sending ? "Sending..." : "Send"}
                {!sending && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default CreateMessage;
