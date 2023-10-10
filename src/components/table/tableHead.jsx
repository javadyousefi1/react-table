const TableHead = () => {
  return (
    <thead>
      <tr>
        <th className="text-blue-500 px-4 py-2 whitespace-nowrap text-sm"></th>
        <th className="px-4 py-2">#</th>
        <th className="text-blue-500 px-4 py-2 whitespace-nowrap text-sm">
          نام و نام خانوادگی
        </th>
        <th className="text-blue-500 px-4 py-2 whitespace-nowrap text-sm">
          کد ملی
        </th>
        <th className="text-blue-500 px-4 py-2 whitespace-nowrap text-sm">
          کد پرسنلی
        </th>
        <th className="text-blue-500 px-4 py-2 whitespace-nowrap text-sm">
          موبایل
        </th>
        <th className="text-blue-500 px-4 py-2 whitespace-nowrap text-sm">
          وضعیت کاربران
        </th>
        <th className="text-blue-500 px-4 py-2 whitespace-nowrap text-sm">
          ورود دو مرحله
        </th>
        <th className="text-blue-500 px-4 py-2 whitespace-nowrap text-sm">
          نوع کاربر
        </th>
        <th className="text-blue-500 px-4 py-2 whitespace-nowrap text-sm">
          عملیات
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
