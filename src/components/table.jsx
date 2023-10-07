const Table = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="bg-red-400 rounded-lg">
        <table className="w-full text-sm text-left text-gray-400  rounded-lg">
          <thead className="text-xs text-gray-700 uppercase w-full bg-gray-100 ">
            <tr className=" flex justify-between">
              <th className=" bg"> </th>
              <th className="px-6 py-4 bg">نام و نام خانوادگی</th>
              <th className="px-6 py-4">کد ملی</th>
              <th className="px-6 py-4">کد پرسنلی</th>
              <th className="px-6 py-4">موبایل</th>
              <th className="px-6 py-4">سطر</th>
              <th className="px-6 py-4">وضعیت کاربران</th>
              <th className="px-6 py-4">ورود دو مرحله</th>
              <th className="px-6 py-4">نوغ کاربر</th>
              <th className="px-6 py-4">عملیات</th>
            </tr>
          </thead>
          <tbody className=" ">
            <tr className=" border-b bg-gray-300 border-gray-400 flex justify-between relative">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 absolute right-4 top-5 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                جواد یوسفی
              </th>
              <td className="px-6 py-4">1520639055</td>
              <td className="px-6 py-4">1523</td>
              <td className="px-6 py-4">09126868504</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">فعال</td>
              <td className="px-6 py-4">غیر فعال</td>
              <td className="px-6 py-4">سازمانی</td>
              <td className="px-6 py-4">عملیات</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
