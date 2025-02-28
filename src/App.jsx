import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div>
      <h2 className=" font-popins text-primary  rounded-md text-center bg-green-200 ">Hello world </h2>
      <Outlet></Outlet>

    </div>
  );
};

export default App;