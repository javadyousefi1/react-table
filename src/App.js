import { useState } from "react";
import FetchDataComponent from "./components/fetchFunction/fetchComponent";
import AlertComponent from "./components/alert/alertComponent";
import Table from "./components/table/table";

const App = () => {
  // console.log("re render")

  return (
    <>
      <div dir="rtl">
        <div className="bg-[#f4f5f7] h-screen">
          <br />
          <Table />
        </div>
        {/* <FetchDataComponent /> */}
        {/* <AlertComponent /> */}
      </div>
    </>
  );
};

export default App;
