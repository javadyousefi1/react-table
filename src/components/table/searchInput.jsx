import { useState } from "react";
// mui icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
          className="focus:shadow-xs focus:border-blue-500 bg-[#fff] min-w-[250px]  outline-none p-2 w-full rounded-lg border border-[#ededed] hover:border-primary transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
        />
        <button type="submit">
          <div className="text-blue-500 bg-white p-2 rounded-lg border border-[#ededed] hover:border-primary transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue">
            <SearchOutlinedIcon />
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
