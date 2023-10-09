import { useEffect } from "react";
import fetchData1 from "../hook/useFetch";

const FetchData = () => {
  const handleButtonClick = () => {
    // Define your API endpoint, HTTP method, payload, and query parameters here
    const apiUrl = "http://localhost:3000/users";
    const httpMethod = "get"; // Change this to your desired HTTP method
    const requestData = null; // Set your payload data if needed
    const queryParams = { param1: "value1", param2: "value2" }; // Set your query parameters if needed

    // Call the useFetch hook with the required parameters
    const { data, isLoading, error, cancelRequest } = fetchData1(
      apiUrl,
      httpMethod,
      requestData,
      queryParams
    );

    // Handle the fetched data, loading state, and errors here
    if (data) {
      console.log("Data fetched successfully:", data);
    }

    if (error) {
      console.error("Error:", error);
    }

    // Clean up and cancel the request when done
  };

  return (
    <div className=" block">
      <h1>getting data with useFetch</h1>
      <button onClick={handleButtonClick}>click</button>
      <button className="mt-10 bg-red-400 p-4" onClick={}>cancel</button>
    </div>
  );
};

export default FetchData;
