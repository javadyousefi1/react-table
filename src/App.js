import { useState } from "react";
import ModalTaliwind from "./components/modal";
import useFetch from "./hook/useFetch";
import FetchData from "./components/fetchComponent";

const App = () => {
  // console.log("re render")

  const [isShow, setIsShow] = useState(true);

  return (
    <>
    <ModalTaliwind
    icon="err"
    title="خطا"
    text="ورود شما با خطا مواجه شد"
    confirmButtonText="تایید"
    backdrop
    backdropClose
    /> 
      <div dir="rtl" className="h-screen ">
        <button onClick={() => setIsShow((isShow) => !isShow)}>
          {isShow ? "close" : "open"}
        </button>

        {isShow && <FetchData />}
      </div>
    </>
  );
};

export default App;
