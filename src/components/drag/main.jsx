import React, { useState } from "react";
import MyList from "./drag";

function MainDnd() {
  const [items, setItems] = useState([
    { id: "1", content: "نام و نام خانوادگی" },
    { id: "2", content: "کد ملی" },
    { id: "3", content: "کد پرسنلی" },
    { id: "4", content: "موبایل" },
    { id: "5", content: "وضعیت کاربران" },
    { id: "6", content: "ورود دو مرحله" },
    { id: "7", content: "نوع کاربر" },
    { id: "8", content: "عملیات" },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newItems = [...items];

    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);

    console.log(newItems);
  };
  
  return (
    <div className="bg-white w-[200px] rounded-lg">
      <MyList items={items} onDragEnd={handleDragEnd} />
    </div>
  );
}

export default MainDnd;
