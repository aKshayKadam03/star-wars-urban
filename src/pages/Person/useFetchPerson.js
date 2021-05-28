import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetchPerson(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPerson = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setIsError(true))
      .finally((res) => setIsLoading(false));
  };

  //throttling the number of calls
  useEffect(() => {
    getPerson();
  }, [url]);

  return { data, isLoading, isError };
}

export default useFetchPerson;
