import { useEffect, useState } from "react";
import axios from "axios";

const LazySelectOption = () => {
  const [fakeData, setFakeData] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedItemValue, setSelectedItemValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(5);
  const totalDatalenght = 10;
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
      .then(({ data }) => {
        setLoading(false);
        setFakeData(data);
        setSearchValue(data);
      });
  }, []);

  useEffect(() => {
    searchHandler(selectedItemValue);
  }, [selectedItemValue]);

  const searchHandler = (value) => {
    const index = fakeData.filter((item) =>
      item.name.toLocaleLowerCase().includes(value.trim())
    );
    if (index.length === 0) console.log("no result");
    setSearchValue(index);

    if (searchValue === "") setSearchValue(fakeData);
  };

  const fetchMoreData = () => {
    setLoading(true);
    setLimit((prevLim) => prevLim + 1);
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
      .then(({ data }) => {
        setLoading(false);
        setFakeData(data);
        setSearchValue(data);
      });
  };

  return (
    <>
      {showDropDown && (
        <div
          className="fixed top-0 left-0 z-10  w-full h-full"
          onClick={() => {
            setShowDropDown(false);
          }}
        ></div>
      )}
      <div className="flex justify-center ">
        <div className=" relative z-10  max-w-[250px]">
          <input
            value={selectedItemValue}
            onChange={({ target: { value } }) => setSelectedItemValue(value)}
            onClick={() => {
              setShowDropDown(true);
              if (selectedItemValue !== "") setSelectedItemValue("");
            }}
            type="text"
            className="focus:shadow-2xl  overflow-y-auto focus:border-blue-500 bg-[#fff] min-w-[250px]  outline-none p-2 rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
          />
          {showDropDown && (
            <div className="absolute top-14 z-20  overflow-x-hidden w-full p-2 rounded-lg bg-gray-200 max-h-44">
              {searchValue.map((item) => (
                <SelectItems
                  key={item.id}
                  text={item.name}
                  setShowDropDown={setShowDropDown}
                  setSelectedItemValue={setSelectedItemValue}
                />
              ))}
              {searchValue == "" && (
                <div className="text-center">Not Found</div>
              )}

              {fakeData.length !== totalDatalenght && (
                <button
                  onClick={() => fetchMoreData()}
                  className="bg-blue-500 my-2 text-white p-2 w-full rounded-lg text-sm h-[35px] flex justify-center items-center"
                >
                  {loading ? (
                    <div
                      class="w-5 h-5 absolute rounded-full animate-spin
                    border-2 border-solid border-white border-t-transparent"
                    ></div>
                  ) : (
                    <span>بارگذاری بیشتر</span>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LazySelectOption;

export const SelectItems = ({
  text,
  setShowDropDown,
  setSelectedItemValue,
}) => {
  return (
    <div
      onClick={() => {
        setSelectedItemValue(text);
        setShowDropDown(false);
      }}
      className="px-3 py-1 hover:bg-white transition-all ease-in-out duration-150 rounded-lg cursor-pointer"
    >
      {text}
    </div>
  );
};
