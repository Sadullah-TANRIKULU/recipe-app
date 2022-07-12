import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
    <div className="appRouter h-full ">
      <h3 className="text-center" >App Router</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/about" element={ <About /> } />
          <Route path="/details" element={ <Details /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
