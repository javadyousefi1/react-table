import ChildrenAlert from "../alert/chlidrenAlert";

const FilterInputList = ({setShowAlretChildren}) => {
  return (
    <>
      <ChildrenAlert backdrop backdropClose setShowAlretChildren={setShowAlretChildren}>
        <div className="grid md:grid-cols-2 md:grid-rows-2  gap-x-8 gap-y-3 md:col-span-1">
          <div>
            <label className="text-gray-600 text-sm mr-2 mb-2">
              نقش واحد :
            </label>

            <select className="focus:shadow-2xl bg-[#fff] mt-1  min-w-[220px]  outline-none p-2 w-full rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-blue-500">
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 text-sm mr-2 mb-2">سامانه :</label>
            <select className="focus:shadow-2xl bg-[#fff] mt-1  min-w-[220px]  outline-none p-2 w-full rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-blue-500">
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 text-sm mr-2 mb-2">
              گروه سامانه:
            </label>
            <select className="focus:shadow-2xl bg-[#fff] mt-1  min-w-[220px]  outline-none p-2 w-full rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-blue-500">
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 text-sm mr-2 mb-2">استان :</label>
            <select className="focus:shadow-2xl bg-[#fff] mt-1  min-w-[220px]  outline-none p-2 w-full rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-blue-500">
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 text-sm mr-2 mb-2">منطقه :</label>
            <select className="focus:shadow-2xl bg-[#fff] mt-1  min-w-[220px]  outline-none p-2 w-full rounded-xl border border-[#ededed] hover:border-gray-400 transition-all ease-linear duration-100 cursor-pointer focus:border-blue-500">
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
              <option>انتخاب کنید</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowAlretChildren(false)}
            className="bg-blue-500 px-8 py-2 hover:shadow-lg items-center flex gap-x-2 text-white rounded-xl hover:bg-white hover:border-blue-400 hover:text-blue-500 hover:border-gray-400 border transition-all ease-in-out duration-150"
          >
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
              className="w-4 h-4"
            >
              <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32h432c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6v-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
            </svg>
            <span>اعمال فیلتر</span>
          </button>
        </div>
      </ChildrenAlert>
    </>
  );
};

export default FilterInputList;
