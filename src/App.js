import Table from "./components/table";

const App = () => {
  return (
    <>
      <div dir="rtl" className="h-screen ">
        <h1 className="bg-blue-500 text-white text-center p-2 text-lg font-bold mb-20">
          TIC React Table
        </h1>

        <Table />
      </div>
    </>
  );
};

export default App;
