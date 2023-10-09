import { useEffect } from "react";
import useFetch from "../hook/useFetch";

const FetchData = () => {
  const { data, isLoading, error, cancelRequest } = useFetch(
    "http://localhost:3000/users",
    "post",
    { name: "mr amozad" },
    { pageIndex: 2 }
  );

  useEffect(() => {
    // cancelRequest();
  }, []);

  return (
    <div className=" block">
      <h1>getting data with useFetch</h1>
    </div>
  );
};

export default FetchData;
