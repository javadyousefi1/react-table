import { motion } from "framer-motion";
import { useState } from "react";

const TableItems = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <>
      <tr>
        <td
          onClick={() => setIsDropDownOpen((prevState) => !prevState)}
          className="cursor-pointer   text-center text-blue-500   whitespace-nowrap"
        >
          <span>
            <svg
              className={`w-5 h-5 transition-all ease-in-out duration-150 ${
                isDropDownOpen && "rotate-180"
              }`}
              fill="none"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.182 6.182a.45.45 0 01.636 0L7.5 8.864l2.682-2.682a.45.45 0 01.636.636l-3 3a.45.45 0 01-.636 0l-3-3a.45.45 0 010-.636z"
                clipRule="evenodd"
              />
            </svg>
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
          className="cursor-pointer text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm"
        >
          <span className="hover:border-gray-500 border-b border-white pb-1">
            جواد یوسفی
          </span>
        </td>
        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <span className="hover:border-gray-500 border-b border-white pb-1">
            1520639044
          </span>
        </td>
        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <span className="hover:border-gray-500 border-b border-white pb-1">
            5623
          </span>
        </td>
        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <span className="hover:border-gray-500 border-b border-white pb-1">
            09126868504
          </span>
        </td>

        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <div className=" border border-green-500 rounded-lg inline py-[1px] px-2 text-green-500 hover:bg-green-500 hover:text-white transition-all ease-in-out duration-100 cursor-pointer ">
            فعال
          </div>
        </td>
        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <div className=" border border-red-500 rounded-lg inline py-[1px] px-2 text-red-500 hover:bg-red-500 hover:text-white transition-all ease-in-out duration-100 cursor-pointer ">
            غیر فعال
          </div>
        </td>
        <td className="text-center px-4 py-6 whitespace-nowrap text-gray-500 text-sm">
          <span className="hover:border-gray-500 border-b border-white pb-1">
            سازمانی
          </span>
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
          <td className="px-4  bg-gray-100 rounded-lg relative" colSpan="4">
            <div className="bg-gray-100 w-8 h-8 absolute rotate-45 top-[-7px] right-5 rounded-lg"></div>
            <div className="p-3">
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm font-bold text-slate-800">نام کاربری</span>
                <span className="text-blue-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
                    />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">0021938954</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm font-bold text-slate-800">جنسیت</span>
                <span className="text-blue-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
                    />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">مرد</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm font-bold text-slate-800">نام پدر</span>
                <span className="text-blue-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
                    />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">اسماعیل</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm font-bold text-slate-800">تاریخ تولد</span>
                <span className="text-blue-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
                    />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">۱۳۷۷/۱۲/۲۶</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm font-bold text-slate-800">ایمیل</span>
                <span className="text-blue-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
                    />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">Javad9000@gmail.com</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm font-bold text-slate-800">استان های دارای سمت</span>
                <span className="text-blue-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
                    />
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

export default TableItems;

export const RowIcons = () => {
  return (
    <div className="flex justify-between items-center">
      <span title="تفییر رمز عبور">
        <svg
          className="w-4 h-4 cursor-pointer fill-blue-400"
          viewBox="0 0 512 512"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24v-40h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zm40-176c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" />
        </svg>
      </span>
      <span title="ویرایش اطلاعات">
        <svg
          className="w-6 h-6 cursor-pointer fill-yellow-400"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M21.7 13.35l-1 1-2.05-2.05 1-1a.55.55 0 01.77 0l1.28 1.28c.21.21.21.56 0 .77M12 18.94l6.06-6.06 2.05 2.05L14.06 21H12v-2.06M12 14c-4.42 0-8 1.79-8 4v2h6v-1.89l4-4c-.66-.08-1.33-.11-2-.11m0-10a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z" />
        </svg>
      </span>
      <span title="حذف کاربر">
        <svg
          className="w-4 h-4 cursor-pointer fill-red-500"
          viewBox="0 0 448 512"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96l7.2-14.3zM32 128h384v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
        </svg>
      </span>
    </div>
  );
};
