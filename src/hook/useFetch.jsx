import axios from "axios";

const useFetch = async (url, method = "get", payload, query) => {
  const dataMehtod = async () => {
    // Create initial state variables
    let data = null;
    let error = null;
    let isLoading = true;

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
      data = response.data;
    } catch (err) {
      error = err;
    } finally {
      isLoading = false;
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
// import React, { useState } from "react";
// import fetchData1 from "./fetchData1"; // Import the fetchData1 function

// function YourComponent() {
//   const [isLoading, setIsLoading] = useState(false);

//   // Define a click handler function to fetch data
//   const handleFetchData = async () => {
//     setIsLoading(true);

//     // Define your API endpoint, HTTP method, payload, and query parameters here
//     const apiUrl = "https://api.example.com/data";
//     const httpMethod = "get"; // Change this to your desired HTTP method
//     const requestData = null; // Set your payload data if needed
//     const queryParams = { param1: "value1", param2: "value2" }; // Set your query parameters if needed

//     // Call the fetchData1 function with the required parameters
//     const { data, isLoading, error, cancelRequest } = await fetchData1(
//       apiUrl,
//       httpMethod,
//       requestData,
//       queryParams
//     );

//     // Handle the fetched data, loading state, and errors here
//     if (data) {
//       console.log("Data fetched successfully:", data);
//     }

//     if (error) {
//       console.error("Error:", error);
//     }

//     // Store the cancelRequest function in state
//     setCancelRequestFunction(cancelRequest);

//     setIsLoading(false);
//   };

//   // Define a function to cancel the request
//   const handleCancelRequest = () => {
//     if (cancelRequestFunction) {
//       cancelRequestFunction();
//     }
//   };

//   // State to store the cancelRequest function
//   const [cancelRequestFunction, setCancelRequestFunction] = useState(null);

//   return (
//     <div>
//       <button onClick={handleFetchData} disabled={isLoading}>
//         {isLoading ? "Fetching Data..." : "Fetch Data"}
//       </button>
//       <button onClick={handleCancelRequest} disabled={!cancelRequestFunction}>
//         Cancel Request
//       </button>
//     </div>
//   );
// }

// export default YourComponent;
