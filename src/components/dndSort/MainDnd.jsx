import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// mui
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import toast from "react-hot-toast";

const MainDnd = ({ setColumnsOrder, columnsOrder }) => {
  useEffect(() => {
    // update local storage on every changes in dnd
    localStorage.setItem("columnOrder", JSON.stringify(columnsOrder));
  }, [columnsOrder]);

  const initialOrder = [
    { id: "1", force: true, isActive: true, content: "نام و نام خانوادگی" },
    { id: "2", force: true, isActive: true, content: "کد ملی" },
    { id: "3", force: false, isActive: true, content: "کد پرسنلی" },
    { id: "4", force: false, isActive: true, content: "موبایل" },
    { id: "5", force: false, isActive: true, content: "وضعیت کاربران" },
    { id: "6", force: false, isActive: true, content: "ورود دو مرحله" },
    { id: "7", force: false, isActive: true, content: "نوع کاربر" },
  ];

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newItems = [...columnsOrder];

    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setColumnsOrder(newItems);
  };

  const deleteFromList = (id) => {
    const getItemsClone = [...columnsOrder];
    const findItem = getItemsClone.find((item) => item.id === id);

    if (findItem.force) return;
    findItem.isActive = !findItem.isActive;

    setColumnsOrder(getItemsClone);
  };

  const resetOrder = () => {
    setColumnsOrder(initialOrder);
    toast.success("ترتیب ستون ها به حالت پیش فرض  بازگشت");
  };

  return (
    <div className="flex justify-center flex-col ">
      <h4 className="text-right font-bold mb-2 text-textColor">
        ترتیب ستون ها
      </h4>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="my-list">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {columnsOrder.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      onClick={() => deleteFromList(item.id)}
                      className={
                        item.isActive
                          ? ` px-3 py-2 min-w-[200px] text-sortText hover:border-primary border border-white bg-sortBg my-2 rounded-md text-sm flex items-center justify-between gap-x-3 `
                          : " px-3 py-2 min-w-[200px] text-sortText hover:border-primary border border-white bg-sortBg my-2 rounded-md text-sm opacity-60 line-through flex items-center justify-between gap-x-3 "
                      }
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <li
                        className={`${
                          item.force ? "!cursor-not-allowed" : "cursor-pointer"
                        }`}
                      >
                        {item.content}
                      </li>
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M16.29 14.29L12 18.59l-4.29-4.3a1 1 0 00-1.42 1.42l5 5a1 1 0 001.42 0l5-5a1 1 0 00-1.42-1.42zM7.71 9.71L12 5.41l4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42l-5-5a1 1 0 00-1.42 0l-5 5a1 1 0 001.42 1.42z" />
                      </svg>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="flex items-center justify-center flex-col">
        <p className="text-mainRed text-xs max-w-[150px] my-3 text-center">شما قادر به غیر فعال کردن نام و نام خانوادگی و کد ملی نیستید</p>

        <button
          onClick={() => resetOrder()}
          className="= p-1  text-primary hover:text-sortText transition-all ease-in-out  duration-150  cursor-pointer rounded-lg text-sm flex items-center justify-center gap-x-3 px-4 py-2"
        >
          پیش فرض
          <RestartAltOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default MainDnd;
