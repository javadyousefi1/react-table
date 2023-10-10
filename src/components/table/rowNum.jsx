import { useState } from "react";

const RowNum = () => {
  const [rowNum, setRowNum] = useState(5);
  const [showDropDown, setShowDropDown] = useState(false);

  const numOfRows = [5, 10, 15];

  return (
    <>
      <div className="relative text-gray-400 bg-white p-2 rounded-xl flex justify-center items-center border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue">
        <div
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
                    onClick={() => {
                      setShowDropDown(false);
                      setRowNum(row);
                    }}
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
    </>
  );
};

export default RowNum;
