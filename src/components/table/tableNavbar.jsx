import { useState } from "react";
import RowNum from "./rowNum";
import SearchInput from "./searchInput";
import FilterInputList from "./FilterInputList";
import MainDnd from "../dndSort/app";
import ChildrenAlert from "../alert/chlidrenAlert";

// mui
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

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
            <button onClick={()=>setSortOpen(false)} className="text-white bg-blue-400 text-sm mt-5  py-2 rounded-lg px-8">
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
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 00-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 002.1-5.4V432c0-2.2-1.8-4-4-4z" />
            </svg>
          </div>
          <div
            onClick={() => setFilterOpen((prevState) => !prevState)}
            className="text-gray-400 bg-white p-3 rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
          >
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
              className="w-5 h-5"
            >
              <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32h432c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6v-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
            </svg>
          </div>

          <RowNum />
        </div>
      </div>
    </>
  );
};

export default TableNavBar;
