import axios from "axios";

const fetchData = async (url, method = "get", payload, query) => {
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

    return {
      data: response.data,
      isLoading: false,
      error: null,
      cancelRequest,
    };
  } catch (err) {
    return {
      data: [],
      isLoading: false,
      error: err,
      cancelRequest,
    };
  }
};

export default fetchData;
