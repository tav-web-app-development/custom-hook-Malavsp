import { useEffect, useState } from "react";

export default function useTime() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  function useInterval() {
    const newDate = new Date().toLocaleTimeString();
    setDate(newDate);
  }

  useEffect(() => {
    const id = setInterval(useInterval, 1000);

    return () => {
      console.log("clear");
      clearInterval(id);
    };
  }, []);

  return date;
}
