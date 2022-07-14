import meal2 from "../../assets/meal2.svg";

const Header = () => {
  return (
    <div className="header flex flex-col justify-center items-center ">
      <img className=" w-1/3 p-2" src={meal2} alt="login form header" />
      <h1
          className="h-full text-center cursor-pointer text-4xl text-white ">
          
          &lt;David Moses <span className="text-green-600">Recipe/&gt;</span>
        </h1>
    </div>
  )
};

export default Header;
