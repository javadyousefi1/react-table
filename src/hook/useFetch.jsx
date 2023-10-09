import { useEffect, useState } from "react";

// ? request package
import axios from "axios";

const useFetch = (url, method = "get", payload, query) => {
  // ? initialStates
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // ? abort controler
  const controller = new AbortController();

  // ? we run this when want cancel request immediately
  const cancelRequest = () => {
    controller.abort();
    console.log(
      "%c useFetch cancel the request",
      "color: white; font-size: 12px; background-color: blue; padding: 1px;"
    );
  };

  useEffect(() => {
    // ? fetch data async
    const fetchData = async () => {
      try {
        // ? we use axios.request for have dynamic method
        const response = await axios.request({
          url,
          method,
          signal: controller.signal,
          data: payload,
          params: query,
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        // ? at the end set loading false
        setIsLoading(false);
      }
    };

    fetchData();

    // ? cancel request when component unmount
    return cancelRequest;

    // ? useEffect runs when url & method change
  }, [url, method]);

  return {
    data,
    isLoading,
    error,
    cancelRequest,
  };
};

export default useFetch;