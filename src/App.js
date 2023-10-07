import Table from "./components/table";

const App = () => {
  return (
    <>
      <div className="h-screen bg-[#f6f7f9]">
        <h1 className="bg-blue-500 text-white text-center p-2 text-lg font-bold">
          TIC React Table
        </h1>

        <Table />
      </div>
    </>
  );
};

export default App;
