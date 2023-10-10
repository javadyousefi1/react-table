import { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";

const FetchDataComponent = () => {
  const [data, setData] = useState();

  const handleButtonClick = () => {
    const res = fetchData("http://localhost:3001/users", "get");
    // setData(data);
    console.log(res);
  };

  return (
    <div className=" items-center flex-col flex justify-center ">
      <h1 className="text-center font-bold text-lg m-3">
        getting data with fetch function
      </h1>
      <div className="flex gap-x-3">
        <button
          onClick={handleButtonClick}
          className=" bg-blue-400 p-2 rounded-full text-white"
        >
          click
        </button>
        <button className=" bg-red-400 p-2 rounded-full text-white">
          cancel
        </button>
      </div>
    </div>
  );
};

export default FetchDataComponent;
