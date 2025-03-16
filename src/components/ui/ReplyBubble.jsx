const ReplyBubble = () => {
  return (
    <div className="flex items-end mb-3">
      <div className="flex items-center justify-center me-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-user-round text-gray-500 dark:text-gray-300"
        >
          <path d="M18 20a6 6 0 0 0-12 0" />
          <circle cx="12" cy="10" r="4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble rounded-2xl bg-slate-300 dark:bg-slate-600 dark:text-slate-200 text-gray-600 text-sm font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
          aliquid.
        </div>

        <p className="dark:text-gray-300 text-gray-600 text-xs chat-header mb-1 opacity-70">
          23/32/2023
        </p>
      </div>
    </div>
  );
};

export default ReplyBubble;
