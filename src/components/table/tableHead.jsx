const TableHead = ({ columns, columsObject }) => {
  return (
    <thead>
      <tr lassName="">
        <th className="text-textColor px-4 py-2 whitespace-nowrap text-sm"></th>
        <th className=" text-textColor px-4 py-2 whitespace-nowrap text-sm">
          سطر
        </th>
        <th className="text-textColor px-4 py-2 whitespace-nowrap text-sm">
          نام و نام خانوادگی
        </th>
        {columns.length > 0 &&
          columns.map((th, index) => {
            return (
              <th
                key={index}
                className="text-textColor px-4 py-2 whitespace-nowrap text-sm"
              >
                {columsObject[th]}
              </th>
            );
          })}
        {/* <th className="text-textColor px-4 py-2 whitespace-nowrap text-sm">
          کد ملی
        </th>
        <th className="text-textColor px-4 py-2 whitespace-nowrap text-sm">
          کد پرسنلی
        </th>
        <th className="text-textColor px-4 py-2 whitespace-nowrap text-sm">
          موبایل
        </th>
        <th className="text-textColor px-4 py-2 whitespace-nowrap text-sm">
          وضعیت کاربران
        </th>
        <th className="text-textColor px-4 py-2 whitespace-nowrap text-sm">
          ورود دو مرحله
        </th>
        <th className="text-textColor px-4 py-2 whitespace-nowrap text-sm">
          نوع کاربر
        </th> */}
        <th className="text-textColor px-4 py-2 whitespace-nowrap text-sm">
          عملیات
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
