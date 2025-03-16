import Note from "./Note";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

import { useState, useEffect, useCallback } from "react";

const CardSection = ({ colView }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH COLLECTIONS
  const fetchMessages = useCallback(() => {
    setLoading(true);
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const msgs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMessages((prev) => {
          if (JSON.stringify(prev) !== JSON.stringify(msgs)) {
            return msgs;
          }
          return prev;
        });

        if (loading) setLoading(false);
      },
      (error) => {
        console.error("Error fetching collections: ", error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [loading]);

  // FETCH COLLECTIONS ON COMPONENT MOUNT
  useEffect(() => {
    const unsubscribe = fetchMessages();
    return () => unsubscribe();
  }, []);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${
        colView === "3" ? "lg:grid-cols-3" : "lg:grid-cols-4"
      }
      } w-full gap-2 md:gap-4 lg:gap-6 pb-8`}
    >
      {loading ? (
        <>
          <div className="skeleton h-36 w-full bg-gray-500 dark:opacity-100 dark:bg-black/20 opacity-30"></div>
          <div className="skeleton h-36 w-full bg-gray-500 dark:opacity-100 dark:bg-black/20 opacity-30"></div>
          <div className="skeleton h-36 w-full bg-gray-500 dark:opacity-100 dark:bg-black/20 opacity-30"></div>
          <div className="skeleton h-36 w-full bg-gray-500 dark:opacity-100 dark:bg-black/20 opacity-30"></div>
        </>
      ) : messages ? (
        messages.map((msg) => {
          // Only render complete messages
          if (!msg.message || !msg.id) return null;

          return (
            <Note
              key={msg.id}
              message={msg.message}
              to={msg.to}
              date={msg.createdAt}
              likes={msg.likes || 0}
              id={msg.id}
            />
          );
        })
      ) : (
        <p className="text-gray-400">......</p>
      )}
    </div>
  );
};

export default CardSection;
