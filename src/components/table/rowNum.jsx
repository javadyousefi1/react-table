import { useState } from "react";

const RowNum = () => {
  const numOfRows = [10, 20, 30, 40, 50];

  // check LS data and set some defaults
  let rowNumLocalStorage = localStorage.getItem("rowNum")
    ? localStorage.getItem("rowNum")
    : 10;

  // prevent mannual save data to LS
  if (!numOfRows.includes(+rowNumLocalStorage)) {
    rowNumLocalStorage = 10;
    localStorage.setItem("rowNum", rowNumLocalStorage);
  }

  const [rowNum, setRowNum] = useState(rowNumLocalStorage);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleRowNumOnChange = (seletedRowNum) => {
    // save to LS for store row
    localStorage.setItem("rowNum", seletedRowNum);
    // close drop down
    setShowDropDown(false);

    // set state new row num
    setRowNum(seletedRowNum);
  };

  return (
    <>
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
    </>
  );
};

export default RowNum;
