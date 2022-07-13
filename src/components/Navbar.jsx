import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
// import github from "https://github.com/Sadullah-TANRIKULU";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-blue-100 w-full h-9 flex justify-between ">
      <div className="logo w-1/2 ">
        <h1 className="h-full text-center cursor-pointer " onClick={() => navigate("/home")}>
          {" "}
          David Moses <span className="text-green-600">Recipe</span>{" "}
        </h1>
      </div>
      <div className="links flex justify-evenly w-1/2 ">
        {/* <Link to="https://github.com/Sadullah-TANRIKULU" /> */}
        <Link to="/home/about">About</Link>
        <Link to="logout">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
