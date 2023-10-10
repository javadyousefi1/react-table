import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function iconRender(iconType) {
  switch (iconType) {
    case "succ": {
      return (
        <div className="bg-green-100  rounded-full w-14 h-14 flex justify-center items-center text-green-500">
          <svg fill="none" viewBox="0 0 15 15" className="w-7 h-7">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm7.072 3.21l4.318-5.398-.78-.624-3.682 4.601L4.32 7.116l-.64.768 3.392 2.827z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      );
    }

    case "err": {
      return (
        <div className="bg-red-100  rounded-full w-14 h-14 flex justify-center items-center text-red-500">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            className="w-7 h-7"
          >
            <path d="M16.707 2.293A.996.996 0 0016 2H8a.996.996 0 00-.707.293l-5 5A.996.996 0 002 8v8c0 .266.105.52.293.707l5 5A.996.996 0 008 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0022 16V8a.996.996 0 00-.293-.707l-5-5zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        </div>
      );
    }
    default: {
      return (
        <div className="bg-yellow-100  rounded-full w-14 h-14 flex justify-center items-center text-yellow-500">
          <svg
            fill="none"
            viewBox="0 0 15 15"
            height="1em"
            width="1em"
            className="w-7 h-7"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M15 7.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zM7 5V3.99h1V5H7zm1 2v3h1v1H6v-1h1V8H6V7h2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      );
    }
  }
}

const AlertTailwind = ({
  icon,
  title,
  text,
  confirmButtonText,
  secondryButton,
  backdrop,
  backdropClose,
}) => {
  const [showModal, setShowModal] = useState(true);
  // const submitButtonRef = useRef();

  // ? focus on button on mount for close with enter btn
  // useEffect(() => {
  //   submitButtonRef.current.focus();
  // }, []);

  const secondryButtonHandler = () => {
    console.log("secondryButtonHandler clicked !");
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  const backdropCloseModalHandler = () => {
    if (!backdropClose) {
      return;
    }
    setShowModal(false);
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
            }}
            onClick={() => {
              backdropCloseModalHandler();
            }}
            className={
              backdrop
                ? "bg-black fixed top-0 left-0 h-full w-full bg-opacity-40 flex justify-center items-center z-9999"
                : " fixed top-0 left-0 h-full w-full bg-opacity-40 flex justify-center items-center z-9999"
            }
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 50,
              }}
              className=" fixed left-0 right-0 flex justify-center items-center px-2 opacity-100 transition-all duration-150 ease-linear"
            >
              {/* warning */}
              <div
                onClick={(e) => handleChildClick(e)}
                className="bg-white p-6 rounded-lg flex flex-col items-center gap-y-5 min-w-[300px] shadow-lg"
              >
                {/* icon */}

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  }}
                >
                  {iconRender(icon)}
                </motion.div>

                {/* sign out */}
                <div className="flex items-center flex-col ">
                  <b className="text-2xl mb-2">{title}</b>

                  <p className="text-gray-400 text-md">{text}</p>
                </div>

                {/* button */}

                <div className="flex justify-between gap-x-3">
                  <button
                    // ref={submitButtonRef}
                    autoFocus
                    onClick={() => setShowModal(false)}
                    className="outline-none text-white px-6 py-2 bg-blue-500 rounded-lg text-sm hover:bg-opacity-80 transition-all ease-in-out duration-150"
                  >
                    {confirmButtonText}
                  </button>

                  {secondryButton && (
                    <button
                      onClick={() => secondryButtonHandler()}
                      className="text-blue-500 px-6 py-2 border-blue-500 rounded-lg border text-sm hover:bg-gray-100 transition-all ease-in-out duration-150"
                    >
                      {secondryButton}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AlertTailwind;
