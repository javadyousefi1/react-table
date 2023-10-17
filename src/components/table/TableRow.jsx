import { useState } from "react";

// motion
import { motion } from "framer-motion";

// mui icons
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// custome alert
import AlertTailwind from "../alert/alert";
import ChildrenAlert from "../alert/chlidrenAlert";

const TableRow = ({ userData, rowNum, columns }) => {
  // const new password state
  const [newPassword, setNewPassword] = useState();

  // table row drop down
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // alert tailwind state
  const [showAlert, setShowAlert] = useState(false);

  // show change password modal
  const [showChangePassword, setShowChangePassword] = useState(false);

  // set alert details in diffrents alert
  const [alertDetails, setAlertDetails] = useState({
    icon: null,
    title: "",
    confirmButtonText: "",
    text: "",
    secondryButton: "",
    HandlerOnSubmit: null,
  });

  // current userName
  const currentUserRowName = userData.firstName + " " + userData.lastName;

  const handleDeactiveUser = () => {
    alert(`handleDeactiveUser  ${userData.userId}`);
    // deActive or active user in here
    // send request
  };

  const handleTwoFactorEnabled = () => {
    alert(`handleTwoFactorEnabled  ${userData.userId}`);
    // deActive or active handleTwoFactorEnabled user in here
    // send request
  };

  const handleDeleteUser = () => {
    alert(`handleDeleteUser  ${userData.userId}`);
    // deActive or active handleTwoFactorEnabled user in here
    // send request
  };

  const handleChangePasswordUser = (e) => {
    // request to change user password

    // hide modal :
    setShowChangePassword(false);
  };

  const alertDeleteUser = () => {
    setAlertDetails({
      icon: "err",
      title: " حذف شود  ؟",
      confirmButtonText: "بله",
      text: `آیا کاربر ${currentUserRowName} حذف شود ؟`,
      secondryButton: "لغو",
      HandlerOnSubmit: handleDeleteUser,
    });

    setShowAlert(true);
  };

  const rowArray = columns.slice(2, 8);

  // ! where we use this ?
  const dropDownArray =
    columns.length > 8 ? columns.slice(9, columns.length - 1) : null;

  const alertDeactiveUser = (userId) => {
    const isUserActive = !Boolean(userData.status) ? "فعال" : "غیر فعال";

    setAlertDetails({
      title: "آیا مطمئن هستید ؟",
      confirmButtonText: "بله",
      text: `آیا از ${isUserActive} کردن ${currentUserRowName} مطمئن هستید ؟`,
      secondryButton: "لغو",
      HandlerOnSubmit: handleDeactiveUser,
    });

    setShowAlert(true);
  };

  const AlertTwoFactorEnabled = () => {
    const isUserActiveTwoFactorEnabled = userData.twoFactorEnabled
      ? "غیر فعال"
      : " فعال";


    setAlertDetails({
      title: "تغییر وضعیت کاربر",
      confirmButtonText: "بله",
      text: `آیا از ${isUserActiveTwoFactorEnabled} کردن ${currentUserRowName} مطمئن هستید ؟`,
      secondryButton: "لغو",
      HandlerOnSubmit: handleTwoFactorEnabled,
    });

    setShowAlert(true);
  };

  return (
    <>
      {showChangePassword && (
        <ChildrenAlert backdrop>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-right font-bold mb-2 text-textColor">
              تغییر رمز عبور
            </h4>

            <div className="flex flex-col my-4">
              <span>کاربر : {currentUserRowName}</span>
              <span>کد ملی : {userData.nationalCode}</span>
            </div>

            <form
              onSubmit={(e) => handleChangePasswordUser(e)}
              className="flex flex-col"
            >
              <input
                type="text"
                name="password"
                placeholder="رمز عبور"
                className="focus:shadow-xs mb-2 focus:border-blue-500 bg-[#fff] min-w-[150px]  outline-none p-2 rounded-lg border border-[#ededed] hover:border-primary transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
              />

              <input
                name="passwordConfirm"
                type="text"
                placeholder="تکرار رمز عبور"
                className="focus:shadow-xs focus:border-blue-500 bg-[#fff] min-w-[150px]  outline-none p-2 rounded-lg border border-[#ededed] hover:border-primary transition-all ease-linear duration-100 cursor-pointer focus:border-mainDarkBlue"
              />

              <div className="flex gap-x-2">
                <button
                  onClick={() => setShowChangePassword(false)}
                  className="text-white bg-mainRed hover:bg-mainRed transition-all ease-in-out duration-150 text-sm mt-5  py-2 rounded-lg px-8"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="text-white bg-primary hover:bg-blue-500 transition-all ease-in-out duration-150 text-sm mt-5  py-2 rounded-lg px-8"
                >
                  تایید
                </button>
              </div>
            </form>
          </div>
        </ChildrenAlert>
      )}

      {showAlert && (
        <AlertTailwind
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          backdrop
          icon={alertDetails.icon}
          title={alertDetails.title}
          text={alertDetails.text}
          confirmButtonText={alertDetails.confirmButtonText}
          secondryButton={alertDetails.secondryButton}
          HandlerOnSubmit={alertDetails.HandlerOnSubmit}
        />
      )}
      {userData && (
        <tr className={!isDropDownOpen ? " border-b  border-b-gray-100" : ""}>
          <td
            onClick={() => setIsDropDownOpen((prevState) => !prevState)}
            className="cursor-pointer   text-center   whitespace-nowrap"
          >
            <span className="text-primary ">
              <KeyboardArrowDownOutlinedIcon
                className="text-sm !w-[16px] !h-[16px] md:!h-[18px]  md:!w-[18px]"
                sx={{
                  cursor: "pointer",
                  transform: isDropDownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </span>
          </td>
          <td className="  text-center text-textColor  px-4 py-6 whitespace-nowrap">
            {rowNum}
          </td>
          <td className=" text-center px-4 py-6 whitespace-nowrap text-textColor text-sm max-w-[80px] overflow-x-hidden truncate  overflow-hidden text-overflow-ellipsis">
            <span
              className="pb-1"
              title={`${userData.firstName || ""} ${userData.lastName || ""}`}
            >
              {`${userData.firstName || ""} ${userData.lastName || ""} `}
            </span>
          </td>
          {rowArray.length > 0 &&
            rowArray.map((td, index) => {
              switch (td) {
                case "status":
                  return (
                    <td
                      className="text-center px-4 whitespace-nowrap text-textColor text-sm"
                      key={`td${index}`}
                    >
                      <button
                        onClick={() => alertDeactiveUser(userData.userId)}
                        className={`${
                          userData.status
                            ? "border-green-500 text-green-500 hover:bg-green-500"
                            : "border-red-500 text-red-500 hover:bg-red-500"
                        } border  rounded-md inline py-1 px-3  hover:text-white transition-all ease-in-out duration-300 cursor-pointer    `}
                      >
                        {userData[td] ? "فعال" : "غیر فعال"}
                      </button>
                    </td>
                  );
                case "twoFactorEnabled":
                  return (
                    <td
                      key={`td${index}`}
                      className="text-center px-4 whitespace-nowrap text-textColor text-sm"
                    >
                      <button
                        onClick={() => AlertTwoFactorEnabled(userData.userId)}
                        className={`${
                          userData.twoFactorEnabled
                            ? "border-green-500 text-green-500 hover:bg-green-500"
                            : "border-red-500 text-red-500 hover:bg-red-500"
                        } border  rounded-md inline py-1 px-3  hover:text-white transition-all ease-in-out duration-300 cursor-pointer    `}
                      >
                        {userData[td] ? "فعال" : "غیر فعال"}
                      </button>
                    </td>
                  );

                default:
                  break;
              }
              return (
                <td
                  key={`td${index}`}
                  className="text-center px-4 whitespace-nowrap text-textColor text-sm"
                >
                  <span className="pb-1">{userData[td] || "-"}</span>
                </td>
              );
            })}

          {/* user twoFactorEnabled */}

          <td className="text-center px-4 whitespace-nowrap text-textColor text-sm">
            <div className="flex justify-between items-center">
              <span
                className="px-2 md:px-1"
                title="تفییر رمز عبور"
                onClick={() => {
                  setShowChangePassword(true);
                }}
              >
                <VpnKeyOutlinedIcon
                  sx={{
                    color: "#111",
                    transition: "color 0.2s linear",

                    cursor: "pointer",
                    "&:hover": {
                      color: "#60A5FA",
                    },
                  }}
                />
              </span>
              <span className="px-2 md:px-1" title="ویرایش اطلاعات">
                <EditOutlinedIcon
                  sx={{
                    color: "#111",
                    cursor: "pointer",
                    transition: "color 0.2s linear",
                    "&:hover": {
                      color: "#60A5FA",
                    },
                  }}
                />
              </span>
              <span
                className="px-2 md:px-1"
                title="حذف کاربر"
                onClick={() => alertDeleteUser()}
              >
                <DeleteOutlineOutlinedIcon
                  sx={{
                    cursor: "pointer",
                    color: "#111",
                    transition: "color 0.2s linear",
                    "&:hover": {
                      color: "#ef4444",
                    },
                  }}
                />
              </span>
            </div>
          </td>
        </tr>
      )}
      {isDropDownOpen && (
        <motion.tr
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className=" py-6"
        >
          <td className="px-4  bg-gray-100 rounded-lg relative" colSpan="10">
            <div className="bg-gray-100 w-8 h-8 absolute rotate-45 top-[-7px] right-5 rounded-lg"></div>
            <div className="p-3 flex justify-between">
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-800 whitespace-nowrap ">
                  نام کاربری
                </span>
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">0021938954</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-900">جنسیت</span>
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">مرد</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-900">نام پدر</span>
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">اسماعیل</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-900">تاریخ تولد</span>
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">۱۳۷۷/۱۲/۲۶</span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-900">ایمیل</span>
                <span className="text-blue-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">
                  Javad9000@gmail.com
                </span>
              </div>
              <div className="m-2 flex items-center gap-x-1">
                <span className="text-sm  text-slate-800 whitespace-nowrap">
                  استان های دارای سمت{userData.nationalCode}
                </span>
                <span className="text-primary">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    className="relative top-[2px]"
                    width="1em"
                  >
                    <path d="M10 9a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500">تبریز</span>
              </div>
            </div>
          </td>
        </motion.tr>
      )}
    </>
  );
};

export default TableRow;
