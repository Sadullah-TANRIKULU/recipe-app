import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-blue-100 w-full h-9 flex justify-between ">
      <div className="logo w-1/2 ">
        <h1
          className="h-full text-center cursor-pointer "
          onClick={() => navigate("/home")}
        >
          {" "}
          &lt;David Moses <span className="text-green-600">Recipe/&gt;</span>{" "}
        </h1>
      </div>
      <div className="links flex justify-evenly w-1/2 ">
        <Link to="/home/about">About</Link>
        <a href="https://github.com/Sadullah-TANRIKULU" target='_blank' rel="noreferrer" >GitHub</a>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
