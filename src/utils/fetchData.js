import axios from "axios";

const fetchData = async (url, method = "get", payload, query) => {
  // initial states
  let data = null;
  let error = null;
  let isLoading = true;

  // abort controller
  const controller = new AbortController();

  // we run this when want to cancel the request immediately
  const cancelRequest = () => {
    controller.abort();
    console.log(
      "%c fetchData canceled the request",
      "color: white; font-size: 12px; background-color: blue; padding: 1px;"
    );
  };

  try {
    // fetch data async
    const response = await axios.request({
      url,
      method,
      signal: controller.signal,
      data: payload,
      params: query,
    });
    data = response.data;
    console.log(data)
  } catch (err) {
    error = err;
  } finally {
    // at the end set loading false
    isLoading = false;
  }

  return {
    data,
    isLoading,
    error,
    cancelRequest,
  };
};

export default fetchData;
