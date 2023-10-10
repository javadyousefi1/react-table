import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ChildrenAlert = ({
  icon,
  title,
  text,
  confirmButtonText,
  secondryButton,
  backdrop,
  backdropClose,
  children,
}) => {
  const [showModal, setShowModal] = useState(true);

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
                className="bg-white p-6 rounded-lg flex flex-col items-center gap-y-5 min-w-[300px] shadow-lg max-w-md"
              >
                <div>{children}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChildrenAlert;
