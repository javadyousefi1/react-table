import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect,useRef } from "react";
import { Button, List, ListItem } from "@mui/material";


function AutocompleteWithInfiniteScroll() {
  const [searchText, setSearchText] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef(null);

  // Simulated data fetching function. You can replace this with an actual data fetch.
  const fetchMoreData = () => {
    if (!loading) {
      setLoading(true);
      // Simulate data fetching delay (e.g., API request).
      setTimeout(() => {
        const newData = generateMoreData(); // Replace with your data fetching logic.
        setOptions((prevOptions) => [...prevOptions, ...newData]);
        setLoading(false);
        if (newData.length === 0) {
          setHasMore(false); // No more data to fetch.
        }
      }, 1000); // Simulated delay.
    }
  };

  // Simulated data generation. Replace this with actual data fetching logic.
  const generateMoreData = () => {
    const newData = [];
    for (let i = 0; i < 10; i++) {
      newData.push(`Option ${options.length + i + 1}`);
    }
    return newData;
  };

  // Handle scroll events to trigger data fetching when scrolling to the end.
  const handleScroll = () => {
    if (
      listRef.current &&
      listRef.current.scrollTop + listRef.current.clientHeight >=
        listRef.current.scrollHeight - 200 // Adjust this value as needed.
    ) {
      // Fetch more data when the user is close to the end.
      fetchMoreData();
    }
  };

  useEffect(() => {
    fetchMoreData(); // Load initial data.

    if (listRef.current) {
      listRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []); // Run once when the component mounts.

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        id="infinite-scroll-autocomplete"
        options={options}
        getOptionLabel={(option) => option}
        value={searchText}
        onInputChange={(event, newInputValue) => {
          setSearchText(newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
      />
      <div
        ref={listRef}
        style={{ maxHeight: 150, overflowY: 'auto', border: '1px solid #ccc' }}
      >
        {options.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
        {loading && <div>Loading...</div>}
        {!hasMore && <div>No more data</div>}
      </div>
    </div>
  );
}

export default AutocompleteWithInfiniteScroll;









function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

const topFilms = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];
// import { useEffect, useState } from "react";
// import axios from "axios";

// const LazySelectOption = () => {
//   const [fakeData, setFakeData] = useState([]);
//   const [searchValue, setSearchValue] = useState([]);
//   const [showDropDown, setShowDropDown] = useState(false);
//   const [selectedItemValue, setSelectedItemValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [limit, setLimit] = useState(5);
//   const totalDatalenght = 10;

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
//       .then(({ data }) => {
//         setLoading(false);
//         setFakeData(data);
//         setSearchValue(data);
//       });
//   }, []);

//   useEffect(() => {
//     searchHandler(selectedItemValue);
//   }, [selectedItemValue]);

//   const searchHandler = (value) => {
//     const index = fakeData.filter((item) =>
//       item.name.toLocaleLowerCase().includes(value.trim())
//     );
//     if (index.length === 0) console.log("no result");
//     setSearchValue(index);

//     if (searchValue === "") setSearchValue(fakeData);
//   };

//   const fetchMoreData = () => {
//     setLoading(true);
//     setLimit((prevLim) => prevLim + 1);
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
//       .then(({ data }) => {
//         setLoading(false);
//         setFakeData(data);
//         setSearchValue(data);
//       });
//   };

//   return (
//     <>
//       {showDropDown && (
//         <div
//           className="fixed top-0 left-0 z-10  w-full h-full"
//           onClick={() => {
//             setShowDropDown(false);
//           }}
//         ></div>
//       )}
//       <div className="flex justify-center ">
//         <div className=" relative z-10  max-w-[250px]">
//           <input
//             value={selectedItemValue}
//             onChange={({ target: { value } }) => setSelectedItemValue(value)}
//             // onClick={() => {
//             //   setShowDropDown(true);
//             //   if (selectedItemValue !== "") setSelectedItemValue("");
//             // }}
//             type="text"
//             className="focus:shadow-2xl  overflow-y-auto focus:border-blue-500 bg-[#fff] min-w-[250px]  outline-none p-2 rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
//           />
//           {showDropDown && (
//             <div className="absolute top-14 z-20  overflow-x-hidden w-full p-2 rounded-lg bg-gray-200 max-h-44">
//               {searchValue.map((item) => (
//                 <SelectItems
//                   key={item.id}
//                   text={item.name}
//                   setShowDropDown={setShowDropDown}
//                   setSelectedItemValue={setSelectedItemValue}
//                 />
//               ))}
//               {searchValue == "" && (
//                 <div className="text-center">Not Found</div>
//               )}

//               {fakeData.length !== totalDatalenght && (
//                 <button
//                   onClick={() => fetchMoreData()}
//                   className="bg-blue-500 my-2 text-white p-2 w-full rounded-lg text-sm h-[35px] flex justify-center items-center"
//                 >
//                   {loading ? (
//                     <div
//                       class="w-5 h-5 absolute rounded-full animate-spin
//                     border-2 border-solid border-white border-t-transparent"
//                     ></div>
//                   ) : (
//                     <span>بارگذاری بیشتر</span>
//                   )}
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default LazySelectOption;

// export const SelectItems = ({
//   text,
//   setShowDropDown,
//   setSelectedItemValue,
// }) => {
//   return (
//     <div
//       onClick={() => {
//         setSelectedItemValue(text);
//         setShowDropDown(false);
//       }}
//       className="px-3 py-1 hover:bg-white transition-all ease-in-out duration-150 rounded-lg cursor-pointer"
//     >
//       {text}
//     </div>
//   );
// };
