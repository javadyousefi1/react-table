// animation package
import { AnimatePresence, motion } from "framer-motion";

import PropTypes from "prop-types";

const ChildrenAlert = ({
  backdrop,
  backdropClose,
  children,
  showAlretChildren,
  setShowAlretChildren,
}) => {
  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  const backdropCloseModalHandler = () => {
    if (!backdropClose) {
      return;
    }
    setShowAlretChildren(false);
  };

  return (
    <>
      <AnimatePresence>
        {
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
                ? "bg-black fixed top-0 left-0 h-full w-full bg-opacity-40 flex justify-center items-center z-50"
                : " fixed top-0 left-0 h-full w-full bg-opacity-40 flex justify-center items-center z-50"
            }
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 50,
              }}
              className=" fixed left-0 right-0 flex z-[120] justify-center items-center px-2 opacity-100 transition-all duration-150 ease-linear"
            >
              {/* warning */}
              <div
                onClick={(e) => handleChildClick(e)}
                className="bg-white p-6 rounded-lg flex flex-col items-center gap-y-5 min-w-[300px] shadow-lg "
              >
                <div>{children}</div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
};

export default ChildrenAlert;

ChildrenAlert.propTypes = {
  setShowAlretChildren: PropTypes.func,
};
