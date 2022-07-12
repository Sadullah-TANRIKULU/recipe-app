// import { Link, Route } from "react-router-dom";
// import About from "../../pages/about/About";
// import github from "https://github.com/Sadullah-TANRIKULU";

const Header = () => {
  return (
    <div className="header bg-blue-100 w-full h-9 flex justify-between ">
      <div className="logo w-1/2 ">
        <h1 className="h-full text-center" > David Moses Recipe </h1>
      </div>
      <div className="links flex justify-evenly w-1/2 ">
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Link to={github} /> */}
        <h4>Logout</h4>
      </div>
    </div>
  );
};

export default Header;
