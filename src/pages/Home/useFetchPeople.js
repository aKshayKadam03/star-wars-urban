import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function useFetchPeople(url, query, userInputBackup) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let debounceTimer = useRef();

  const getPeople = () => {
    setIsLoading(true);
    setIsError(false);
    axios
      .get(url, {
        params: {
          search: query,
        },
      })
      .then((res) => setData(res.data.results.filter((_, index) => index < 6)))
      .catch((err) => setIsError(true))
      .finally((res) => setIsLoading(false));
  };

  //reducing the number of calls while user types
  useEffect(() => {
    if (userInputBackup.current === "" || null) return;
    setIsLoading(true);
    debounceTimer.current && clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      getPeople();
    }, 500);
  }, [userInputBackup.current]);

  return { data, isLoading, isError };
}

export default useFetchPeople;
