import { Link, Route } from "react-router-dom";
import Login from "../pages/login/Login";
// import About from "../../pages/about/About";
// import github from "https://github.com/Sadullah-TANRIKULU";


const Navbar = () => {
    return (
        <div className="navbar bg-blue-100 w-full h-9 flex justify-between ">
          <div className="logo w-1/2 ">
            <h1 className="h-full text-center" > David Moses <span className="text-green-600" >Recipe</span> </h1>
          </div>
          <div className="links flex justify-evenly w-1/2 ">
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Link to={github} /> */}
            {/* <Link to={ <Login /> } >Logout</Link> */}
          </div>
        </div>
      );
}
 
export default Navbar;