import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState([]);
  const dataMehtod = async (url, method = "get", payload, query) => {
    // Create initial state variables

    // Create an AbortController
    const controller = new AbortController();

    // Create a function to cancel the request
    const cancelRequest = () => {
      controller.abort();
      console.log(
        "%c fetchData cancel the request",
        "color: white; font-size: 12px; background-color: blue; padding: 1px;"
      );
    };

    try {
      // Use axios.request for dynamic method
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
      setIsLoading(false);
    }
    return {
      data,
      isLoading,
      error,
      cancelRequest,
    };
  };
  return dataMehtod;
};

export default useFetch;
