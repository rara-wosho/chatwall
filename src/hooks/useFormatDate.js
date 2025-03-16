import { useState, useEffect } from "react";

export const useFormatDate = (firestoreDate, fallbackText = "Just now") => {
  const [formattedDate, setFormattedDate] = useState(fallbackText);

  useEffect(() => {
    try {
      if (!firestoreDate) {
        setFormattedDate(fallbackText);
        return;
      }

      // Convert to JavaScript Date if it's a Firestore timestamp
      const dateObj =
        typeof firestoreDate.toDate === "function"
          ? firestoreDate.toDate()
          : firestoreDate instanceof Date
          ? firestoreDate
          : null;

      if (!dateObj) {
        setFormattedDate(fallbackText);
        return;
      }

      const now = new Date();
      const diffInMs = now - dateObj;
      const diffInHours = diffInMs / (1000 * 60 * 60);

      if (diffInHours < 24) {
        // Less than 24 hours old - show relative time
        const diffInSeconds = diffInMs / 1000;

        if (diffInSeconds < 60) {
          setFormattedDate("Just now");
        } else if (diffInSeconds < 3600) {
          const minutes = Math.floor(diffInSeconds / 60);
          setFormattedDate(`${minutes} minute${minutes > 1 ? "s" : ""} ago`);
        } else {
          const hours = Math.floor(diffInHours);
          setFormattedDate(`${hours} hour${hours > 1 ? "s" : ""} ago`);
        }
      } else {
        // More than 24 hours old - show exact date and time
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const month = months[dateObj.getMonth()];
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();

        let hours = dateObj.getHours();
        const minutes = dateObj.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";

        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12

        setFormattedDate(`${month} ${day} ${year} ${hours}:${minutes} ${ampm}`);
      }
    } catch (error) {
      console.error("Error formatting date:", error);
      setFormattedDate(fallbackText);
    }
  }, [firestoreDate, fallbackText]);

  return formattedDate;
};
