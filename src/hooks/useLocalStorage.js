import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // Create a state value that will be returned by this hook
  const [value, setValue] = useState(() => {
    try {
      // Try to get the value from localStorage
      const item = window.localStorage.getItem(key);

      // Parse stored json or return initialValue if nothing is found
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage when the state changes
  useEffect(() => {
    try {
      // Convert state to JSON and save to localStorage
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
