import { useState } from "react";
import FetchDataComponent from "./components/fetchFunction/fetchComponent";
import AlertComponent from "./components/alert/alertComponent";
import Table from "./components/table/table";
import CardComponent from "./components/lazyload/CardComponent";
import Main from "./components/lazyload/main";
import LazySelectOption from "./components/lazySelectOption/lazySelectOption";
import MyList from "./components/dndSort/drag";
import MainDnd from "./components/dndSort/app";
import Uploader from "./components/fileuploader/uploader";
const App = () => {
  // console.log("re render")

  return (
    <>
      <div dir="rtl">
        <div className="bg-[#f4f5f7] h-screen">
          <br />
          {/* <Table /> */}
          {/* <FilterInputList /> */}
          {/* <Main /> */}
          {/* <LazySelectOption /> */}
          {/* <MyList /> */}
          {/* <MainDnd /> */}

          <div className="flex justify-center">
            <div className="w-[350px]">
              <Uploader />
            </div>
          </div>
        </div>
        {/* <FetchDataComponent /> */}
        {/* <AlertComponent /> */}
      </div>
    </>
  );
};

export default App;
