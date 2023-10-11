import { useEffect, useState } from "react";

const LazySelectOption = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedItemValue, setSelectedItemValue] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const fakeData = [
    { id: "1a2b3c", name: "محمد" },
    { id: "4d5e6f", name: "علی" },
    { id: "7g8h9i", name: "زهرا" },
    { id: "10j11k", name: "مریم" },
    { id: "12l13m", name: "حسن" },
    { id: "14n15o", name: "فاطمه" },
    { id: "16p17q", name: "احمد" },
    { id: "18r19s", name: "لیلا" },
    { id: "20t21u", name: "محمدرضا" },
    { id: "22v23w", name: "سارا" },
  ];

  useEffect(() => {
    setSearchValue(fakeData);
  }, []);

  useEffect(() => {
    searchHandler(selectedItemValue);
  }, [selectedItemValue]);

  const searchHandler = (value) => {
    const index = fakeData.filter((item) =>
      item.name.toLocaleLowerCase().includes(value)
    );
    if (index.length === 0) console.log("no result");
    setSearchValue(index);

    if (searchValue === "") setSearchValue(fakeData);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 z-10  w-full h-full"
        onClick={() => {
          setShowDropDown(false);
        }}
      ></div>
      <div className="flex justify-center ">
        <div className=" relative z-10  max-w-[250px]">
          <input
            value={selectedItemValue}
            onChange={({ target: { value } }) => setSelectedItemValue(value)}
            onClick={() => setShowDropDown(true)}
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
              {searchValue == "" && <div className="text-center">Not Found</div>}
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
