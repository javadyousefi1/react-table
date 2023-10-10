import { useState } from "react";
import AlertTailwind from "./alert";
import ChildrenAlert from "./chlidrenAlert";

const AlertComponent = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className=" items-center flex-col flex justify-center ">
      <h1 className="text-center font-bold text-lg m-3">Alert Tailwind</h1>
      <div className="flex gap-x-3">
        <button
          className=" bg-green-400 p-2 rounded-full text-white"
          onClick={() => setIsShow((isShow) => !isShow)}
        >
          show
        </button>
      </div>

      {isShow && (
        <AlertTailwind
          icon="succ"
          text="ورود شما با موفقیت انجام شد"
          title="وارد شدید"
          confirmButtonText="تایید"
          backdrop
          backdropClose
        />
      )}

      <ChildrenAlert backdrop backdropClose>
        <div className="bg-blue-400 p-2 w-[300px] text-white flex justify-center rounded-lg">
          hi i am chliren
        </div>
      </ChildrenAlert>
    </div>
  );
};

export default AlertComponent;
