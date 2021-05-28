import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function useFetchPeople(url, query) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let debounceTimer = useRef();

  const getPeople = () => {
    setIsLoading(true);
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

  //throttling the number of calls
  useEffect(() => {
    setIsLoading(true);
    debounceTimer.current && clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      getPeople();
    }, 500);
  }, [query]);

  return { data, isLoading, isError };
}

export default useFetchPeople;
