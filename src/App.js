import { useState } from "react";
// http
import FetchDataComponent from "./components/fetchFunction/fetchComponent";

import AlertComponent from "./components/alert/alertComponent";
import Table from "./components/table/table";
import CardComponent from "./components/lazyload/CardComponent";
import Main from "./components/lazyload/main";
import LazySelectOption from "./components/lazySelectOption/lazySelectOption";
import MyList from "./components/dndSort/MainDnd";
import Uploader from "./components/fileuploader/uploader";
import MultiSelectAutocomplete from "./components/autoComplete/MultiSelectAutocomplete";
import useFetch from "./hook/useFetch";
import fetchData from "./utils/fetchData";

const App = () => {
  return (
    <>
      // system changed
      <div dir="rtl">
        <div className="bg-[#f4f5f7] h-screen ">
          <br />

          <Table />
          {/* <FilterInputList /> */}
          {/* <Main /> */}
          {/* <LazySelectOption /> */}
          {/* <MultiSelectAutocomplete/> */}

          <div className="flex justify-center">
            <div className="w-[350px]">{/* <Uploader /> */}</div>
          </div>
        </div>
        {/* <FetchDataComponent /> */}
        {/* <AlertComponent /> */}
      </div>
    </>
  );
};

export default App;
