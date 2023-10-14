import { useState } from "react";

// motion
import { motion } from "framer-motion";

// mui icons
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const TableRow = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const name = "جواد یوسفی";
  console.log(name.length);

  return (
    <>
      <tr>
        <td
          onClick={() => setIsDropDownOpen((prevState) => !prevState)}
          className="cursor-pointer   text-center text-blue-500   whitespace-nowrap"
        >
          <span>
            <KeyboardArrowDownOutlinedIcon
              style={{
                cursor: "pointer",
                transform: isDropDownOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </span>
        </td>
        <td
          onClick={() => setIsDropDownOpen((prevState) => !prevState)}
          className="cursor-pointer   text-center text-blue-500  px-4 py-6 whitespace-nowrap"
        >
          1
        </td>
        <td
          onClick={() => setIsDropDownOpen((prevState) => !prevState)}
          className=" text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm max-w-[80px] overflow-x-hidden truncate  overflow-hidden text-overflow-ellipsis"
        >
          {/* tool tip  */}
          <span
            className="pb-1"
            title="جواد یوسفی جواد یوسفی جواد یوسفی جواد یوسفی"
          >
            جواد یوسفی
          </span>
        </td>
        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <span className="pb-1">1520639044</span>
        </td>
        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <span className="pb-1">5623</span>
        </td>
        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <span className="pb-1">09126868504</span>
        </td>

        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <div className=" border border-green-500 rounded-lg inline py-[1px] px-2 text-green-500 hover:bg-green-500 hover:text-white transition-all ease-in-out duration-300 cursor-pointer ">
            فعال
          </div>
        </td>
        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <div className=" border border-red-500 rounded-lg inline py-[1px] px-2 text-red-500 hover:bg-red-500 hover:text-white transition-all ease-in-out duration-300 cursor-pointer ">
            غیر فعال
          </div>
        </td>
        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <span className="pb-1">سازمانی</span>
        </td>
        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <RowIcons />
        </td>
      </tr>

      {isDropDownOpen && (
        <motion.tr
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className=" py-6"
        >
          <td className="px-4  bg-gray-100 rounded-lg relative" colSpan="10">
            <div className="bg-gray-100 w-8 h-8 absolute rotate-45 top-[-7px] right-5 rounded-lg"></div>
            <div className="p-3 flex justify-between">
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-800 whitespace-nowrap ">
                  نام کاربری
                </span>
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">0021938954</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-900">جنسیت</span>
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">مرد</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-900">نام پدر</span>
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">اسماعیل</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-900">تاریخ تولد</span>
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">۱۳۷۷/۱۲/۲۶</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-900">ایمیل</span>
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">
                  Javad9000@gmail.com
                </span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-800 whitespace-nowrap">
                  استان های دارای سمت
                </span>
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">تبریز</span>
              </div>
            </div>
          </td>
        </motion.tr>
      )}
    </>
  );
};

export default TableRow;

export const RowIcons = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="px-2 md:px-1" title="تفییر رمز عبور">
        <VpnKeyOutlinedIcon
          sx={{
            color: "#9ca3af",
            transition: "color 0.2s linear",

            cursor: "pointer",
            "&:hover": {
              color: "#1B71F2",
            },
          }}
        />
      </span>
      <span className="px-2 md:px-1" title="ویرایش اطلاعات">
        <EditOutlinedIcon
          sx={{
            color: "#9ca3af",
            cursor: "pointer",
            transition: "color 0.2s linear",
            "&:hover": {
              color: "#1B71F2",
            },
          }}
        />
      </span>
      <span className="px-2 md:px-1" title="حذف کاربر">
        <DeleteOutlineOutlinedIcon
          sx={{
            cursor: "pointer",
            color: "#9ca3af",
            transition: "color 0.2s linear",
            "&:hover": {
              color: "red",
            },
          }}
        />
      </span>
    </div>
  );
};