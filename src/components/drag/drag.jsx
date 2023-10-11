import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const MyList = () => {
  const [items, setItems] = useState([
    { id: "1", force: true, isActive: true, content: "نام و نام خانوادگی" },
    { id: "2", force: true, isActive: true, content: "کد ملی" },
    { id: "3", force: false, isActive: true, content: "کد پرسنلی" },
    { id: "4", force: false, isActive: true, content: "موبایل" },
    { id: "5", force: false, isActive: true, content: "وضعیت کاربران" },
    { id: "6", force: false, isActive: true, content: "ورود دو مرحله" },
    { id: "7", force: false, isActive: true, content: "نوع کاربر" },
    { id: "8", force: false, isActive: true, content: "عملیات" },
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

  const deleteFromList = (id) => {
    const getItemsClone = [...items];
    const findItem = getItemsClone.find((item) => item.id === id);

    if (findItem.force) return;
    findItem.isActive = !findItem.isActive;

    setItems(getItemsClone);
  };

  return (
    <div className="w-[200px] flex justify-center items-center py-4">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="my-list">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      onClick={() => deleteFromList(item.id)}
                      className={
                        item.isActive
                          ? "bg-blue-400 p-1 text-center text-white my-2 rounded-lg text-sm"
                          : "bg-blue-400 p-1 text-center text-white my-2 rounded-lg text-sm opacity-60 line-through"
                      }
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default MyList;
