import { useState } from "react";

// components
import RowNum from "./rowNum";
import SearchInput from "./searchInput";
import FilterInputList from "./FilterInputList";
import MainDnd from "../dndSort/app";
import ChildrenAlert from "../alert/chlidrenAlert";

// mui
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

const TableNavBar = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <>
      {filterOpen && (
        <FilterInputList
          showAlretChildren={filterOpen}
          setShowAlretChildren={setFilterOpen}
        />
      )}

      {sortOpen && (
        <ChildrenAlert
          backdrop
          backdropClose
          showAlretChildren={sortOpen}
          setShowAlretChildren={setSortOpen}
        >
          <MainDnd />
          <div className="flex justify-center">
            <button
              onClick={() => setSortOpen(false)}
              className="text-white bg-blue-400 text-sm mt-5  py-2 rounded-lg px-8"
            >
              تایید
            </button>
          </div>
        </ChildrenAlert>
      )}

      <div className="mb-4 flex md:flex-row justify-between flex-col px-2 gap-y-2">
        {/* search */}
        <SearchInput />

        {/* sort */}
        <div className="flex gap-x-4 flex-row-reverse justify-between">
          <div
            onClick={() => setSortOpen((prevState) => !prevState)}
            className="text-gray-400 relative bg-white p-2 rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
            title="ترتیب ستون"
          >
            <FilterListOutlinedIcon />
          </div>
          <div
            onClick={() => setFilterOpen((prevState) => !prevState)}
            className="text-gray-400 bg-white w-[45px] h-[45px] flex justify-center items-center rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
            title="فیلتر"
          >
            <FilterAltOutlinedIcon />
          </div>

          <RowNum />
        </div>
      </div>
    </>
  );
};

export default TableNavBar;
