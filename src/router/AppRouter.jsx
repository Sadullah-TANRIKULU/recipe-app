import { Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
    <div className="appRouter h-full w-full ">
      {/* <h3 className="text-center">App Router</h3> */}
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        <Route path="/home/about" element={<About />} />
        <Route path="/home/details" element={<Details />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
