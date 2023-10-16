import { useState } from "react";

// components
import FilterInputList from "./FilterInputList";
import MainDnd from "../dndSort/MainDnd";
import ChildrenAlert from "../alert/chlidrenAlert";

// mui
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import toast from "react-hot-toast";

const TableNavBar = ({
  setRowNum,
  rowNum,
  numOfRows,
  setColumnsOrder,
  columnsOrder,
  searchValue,
  setSearchValue,
}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // row num state
  const [showDropDown, setShowDropDown] = useState(false);

  const handleRowNumOnChange = (seletedRowNum) => {
    // save to LS for store row
    localStorage.setItem("rowNum", seletedRowNum);
    // close drop down
    setShowDropDown(false);

    // set state new row num
    setRowNum(seletedRowNum);

    toast.success(`تعداد سطر ها به ${seletedRowNum} عدد تغییر کرد`);
  };

  const changeSearchHandler = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!searchValue) return;

    console.log("search submit");
  };

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
          <MainDnd
            setColumnsOrder={setColumnsOrder}
            columnsOrder={columnsOrder}
          />
          <div className="flex justify-center">
            <button
              onClick={() => setSortOpen(false)}
              className="text-white bg-primary hover:bg-blue-500 transition-all ease-in-out duration-150 text-sm mt-5  py-2 rounded-lg px-8"
            >
              تایید
            </button>
          </div>
        </ChildrenAlert>
      )}

      <div className="mb-4 flex md:flex-row justify-between flex-col px-2 gap-y-2">
        {/* search */}
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-x-2">
            <input
              type="text"
              onChange={changeSearchHandler}
              className="focus:shadow-xs focus:border-blue-500 bg-[#fff] min-w-[250px]  outline-none p-2 w-full rounded-lg border border-[#ededed] hover:border-primary transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
            />
            <button type="submit">
              <div className="text-blue-500 bg-white p-2 rounded-lg border border-[#ededed] hover:border-primary transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue">
                <SearchOutlinedIcon />
              </div>
            </button>
          </div>
        </form>

        {/* sort */}
        <div className="flex gap-x-1 flex-row-reverse justify-start">
          <div
            onClick={() => setSortOpen((prevState) => !prevState)}
            className="text-gray-400 relative bg-white p-2 rounded-lg border border-[#ededed] hover:border-primary transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
            title="ترتیب ستون"
          >
            <FilterListOutlinedIcon />
          </div>
          <div
            onClick={() => setFilterOpen((prevState) => !prevState)}
            className="text-gray-400 bg-white w-[45px] h-[45px] flex justify-center items-center rounded-lg border border-[#ededed] hover:border-primary transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
            title="فیلتر"
          >
            <FilterAltOutlinedIcon />
          </div>
          {/* backdrop */}
          {showDropDown && (
            <div
              className="fixed top-0 left-0 z-10  w-full h-full"
              onClick={() => {
                setShowDropDown(false);
              }}
            ></div>
          )}
          <div className="relative z-20 text-gray-400 bg-white w-[45px] h-[45px] p-2 rounded-lg flex justify-center items-center border border-[#ededed] hover:border-primary transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue">
            <div
              title="تعداد سطرها"
              onClick={() => setShowDropDown((prevState) => !prevState)}
              className="flex items-center gap-x-1"
            >
              <span>{rowNum}</span>
              <span>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                </svg>
              </span>
            </div>
            {showDropDown && (
              <div onClick={() => setShowDropDown(false)} className=" ">
                <div className=" bg-green-50">
                  <div className="bg-white gap-y-2 shadow-lg rounded-xl border border-[#d1d1d1] text-lg absolute top-11 p-4 w-[100px] flex flex-col right-3">
                    {numOfRows.map((row) => (
                      <span
                        key={row}
                        onClick={() => handleRowNumOnChange(row)}
                        className="hover:bg-gray-100 rounded-lg text-center"
                      >
                        {row}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TableNavBar;
