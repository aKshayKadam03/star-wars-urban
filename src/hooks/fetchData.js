import React, { useState, useRef } from "react";
import axios from "axios";

function FetchData(url, query) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let throttleTimer = useRef();

  const getPeople = () => {
    setIsLoading(true);
    axios
      .get(url, {
        params: {
          search: query,
          limit: 5,
        },
      })
      .then((res) => setData(res.data.results.filter((_, index) => index < 6)))
      .catch((err) => setIsError(true))
      .finally((res) => setIsLoading(false));
  };

  //throttling the number of calls
  React.useEffect(() => {
    setIsLoading(true);
    throttleTimer.current && clearTimeout(throttleTimer.current);
    throttleTimer.current = setTimeout(() => {
      getPeople();
    }, 500);
  }, [query]);

  return { data, isLoading, isError };
}

export default FetchData;
