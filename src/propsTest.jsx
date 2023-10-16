import { useEffect, useState } from "react";
import DynamicObject from "./dynamitctest";
import axios from "axios";

const PropsTest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => setData(data))
      .catch();
  }, []);
  return (
    <>
      <DynamicObject   data={data} />
    </>
  );
};

export default PropsTest;
