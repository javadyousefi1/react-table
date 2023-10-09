import { Suspense, useEffect, useState } from "react";
import ModalTaliwind from "./components/modal";
import useFetch from "./hook/useFetch";
import FetchData from "./components/fetchComponent";
import CardComponent from "./components/lazyload/CardComponent";
import { cardData } from "./components/lazyload/mock";

const App = () => {
  // console.log("re render")

  const [isShow, setIsShow] = useState(true);



  return (
    <>
      {/* <ModalTaliwind
        icon="err"
        title="خطا"
        text="ورود شما با خطا مواجه شد"
        confirmButtonText="تایید"
        backdrop
        // backdropClose
      /> */}
      <div dir="rtl" className="h-screen ">
        <button onClick={() => setIsShow((isShow) => !isShow)}>
          {isShow ? "close" : "open"}
        </button>

        {<FetchData />}
      </div>


{/* <h1>React Lazy Loading with Infinite Scroll</h1>
      <Suspense fallback={<div>isLoading...</div>}>
        <CardComponent cardData={cardData} />
      </Suspense> */}

    </>
  );
};

export default App;
