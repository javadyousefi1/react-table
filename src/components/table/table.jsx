import RowNum from "./rowNum";
import TableHead from "./tableHead";
import TableItems from "./tableItems";
import TableNavBar from "./tableNavbar";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
// loading
// pagination
// get data
// responsive
// refactor drop down

const Table = () => {
  return (
    <>
      <div className="container max-w-7xl mx-auto">
        <TableNavBar />

        <div className="px-3">
          <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-x-auto shadow-lg p-5">
            <table className="w-full table-auto ">
              <TableHead />

              <tbody>
                <TableItems />
                <TableItems />
                <TableItems />
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Pagination dir="ltr" count={10} color="primary" size="small" />
        </div>
      </div>
    </>
  );
};

export default Table;
