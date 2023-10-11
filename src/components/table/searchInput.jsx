import { useState } from "react";

const SearchInput = () => {
  // ! prevent if value is null
  // ! block more search

  const [searchValue, setSearchValue] = useState("");

  const changeHandler = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!searchValue) return;

    console.log("search submit");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center gap-x-2">
        <input
          type="text"
          onChange={changeHandler}
          className="focus:shadow-2xl focus:border-blue-500 bg-[#fff] min-w-[250px]  outline-none p-2 w-full rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
        />
        <button type="submit">
          <div className="text-blue-500 bg-white p-2 rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue">
            <svg
              className="w-6 h-6"
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
