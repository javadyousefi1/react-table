import RowNum from "./rowNum";
import TableHead from "./tableHead";
import TableRow from "./TableRow";
import TableNavBar from "./tableNavbar";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
// loading
// pagination
// get data
// responsive
// refactor drop down

const Table = () => {
  const [pageCount, setPageCount] = useState(0);

  const [test, setTest] = useState(4);

  
  return (
    <>
      <div className="container max-w-7xl mx-auto">
        <TableNavBar setTest={setTest} />

        <div className="px-3">
          <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-x-auto border border-gray-200 p-5">
            <table className="w-full table-auto">
              <TableHead />

              <tbody>
                <TableRow />
                <TableRow />
                <TableRow />
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-10 relative ">
          <Pagination
            dir="ltr"
            onChange={(e) => setPageCount(+e.currentTarget.innerText)}
            // set from db response
            count={10}
            color="primary"
            className=""
            defaultPage={1}
            siblingCount={1}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
